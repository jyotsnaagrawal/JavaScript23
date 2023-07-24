// Retrieve the selected group name from the query parameter in the URL
const urlParams = new URLSearchParams(window.location.search);
const selectedGroupName = urlParams.get("group");

// Populate the selected group name on the page
const selectedGroupNameElement = document.getElementById("selectedGroupName");
selectedGroupNameElement.textContent = selectedGroupName;


// Function to add a member to the "Persons Involved" and "Paid By" select elements
function addMemberToSelects(memberName) {
    const involvedPersonsSelect = $("#involvedPersons");
    const paidBySelect = $("#paidBy");

    const option = `<option value="${memberName}">${memberName}</option>`;
    involvedPersonsSelect.append(option);
    paidBySelect.append(option);
}

function addMember() {
    // Retrieve the member name from the input field
    const memberNameInput = $("#memberName");
    const memberName = memberNameInput.val().trim();

    // Perform validation (e.g., check for duplicates, empty input, etc.)
    if (memberName === "") {
        alert("Please enter a valid member name.");
        return;
    }

    let groupMembers = JSON.parse(localStorage.getItem(selectedGroupName)) || []; // Initialize as empty array if null

    // Check if the member already exists in the group
    const existingMember = groupMembers.find(member => member.toLowerCase() === memberName.toLowerCase());
    if (existingMember) {
        alert("Member already exists in the group.");
        return;
    }

    // Add the member to the group
    groupMembers.push(memberName);

    // Save the updated group members list back to local storage
    localStorage.setItem(selectedGroupName, JSON.stringify(groupMembers));

    const storedGroupNames = JSON.parse(localStorage.getItem("groupNames")) || [];
    const selectedGroup = storedGroupNames.find(group => group.name === selectedGroupName);
    const groupPersons = selectedGroup.persons || [];
    groupPersons.push(memberName);

    localStorage.setItem("groupNames", JSON.stringify(storedGroupNames));

    // Clear the input field after adding the member
    memberNameInput.val("");

    // Update the "Persons Involved" and "Paid By" select elements with the new member
    updateInvolvedPersonsSelect();
    updatePaidBySelect();

    // Update the checkbox group with the new member
    updateCheckboxGroup();
}

// Function to update the "Persons Involved" select element with the available group members
function updateInvolvedPersonsSelect() {
    const groupMembersSelect = $("#involvedPersons");
    groupMembersSelect.empty();

    const groupMembers = JSON.parse(localStorage.getItem(selectedGroupName)) || [];

    groupMembers.forEach(member => {
        const option = `<option value="${member}">${member}</option>`;
        groupMembersSelect.append(option);
    });
}

// Function to update the "Paid By" select element with the available group members
function updatePaidBySelect() {
    const paidBySelect = $("#paidBy");
    paidBySelect.empty();

    const groupMembers = JSON.parse(localStorage.getItem(selectedGroupName)) || [];

    groupMembers.forEach(member => {
        const option = `<option value="${member}">${member}</option>`;
        paidBySelect.append(option);
    });
}

// Function to update the checkbox group with the available group members
function updateCheckboxGroup() {
    const checkboxGroup = $("#checkboxGroup");
    checkboxGroup.empty();

    const groupMembers = JSON.parse(localStorage.getItem(selectedGroupName)) || [];

    groupMembers.forEach(member => {
        const checkbox = `<div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="checkbox_${member}" value="${member}">
                                    <label class="custom-control-label" for="checkbox_${member}">${member}</label>
                                </div>`;
        checkboxGroup.append(checkbox);
    });
}

// Function to add an expense
function addExpense() {
    // Retrieve the expense details from the input fields

    const expenseDateInput = $("#expenseDate");
    const expenseNameInput = $("#expenseName");
    const expenseAmountInput = $("#expenseAmount");
    const involvedPersonsCheckboxes = $(".custom-checkbox input:checked");
    const paidBySelect = $("#paidBy");

    const expenseDate = expenseDateInput.val();
    const expenseName = expenseNameInput.val().trim();
    const expenseAmount = parseFloat(expenseAmountInput.val());
    const involvedPersons = Array.from(involvedPersonsCheckboxes).map(checkbox => checkbox.value);
    const paidBy = paidBySelect.val();

    // Perform validation (e.g., check for empty input, valid amount, etc.)
    if (expenseDate === "" || expenseName === "" || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert("Please enter valid expense details.");
        return;
    }

    if (involvedPersons.length === 0) {
        alert("Please select at least one person who is involved in the expense.");
        return;
    }

    // Add the expense to the group
    const newExpense = {
        date: expenseDate,
        name: expenseName,
        amount: expenseAmount,
        involvedPersons: involvedPersons,
        paidBy: paidBy
    };
    // Retrieve the group members from local storage
    const storedGroupNames = JSON.parse(localStorage.getItem("groupNames")) || [];
    const selectedGroup = storedGroupNames.find(group => group.name === selectedGroupName);
    // Check if the selected group is defined and contains persons
    if (!selectedGroup || !selectedGroup.persons) {
        alert("Error: Group members not found.");
        return;
    }
    const groupMembers = selectedGroup.persons;

    // Retrieve the existing expenses from local storage
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    // Add the new expense to the list
    expenses.push(newExpense);

    // Save the updated expenses list back to local storage
    localStorage.setItem("expenses", JSON.stringify(expenses));

    // Clear the input fields after adding the expense
    expenseDateInput.val("");
    expenseNameInput.val("");
    expenseAmountInput.val("");
    involvedPersonsCheckboxes.prop("checked", false);

    // Recalculate and display the split amounts
    updateSplitAmountTable();
}

// Function to calculate and display the split amounts
function updateSplitAmountTable() {
    // Retrieve the group members and expenses from local storage
    const storedGroupNames = JSON.parse(localStorage.getItem("groupNames")) || [];
    const selectedGroup = storedGroupNames.find(group => group.name === selectedGroupName);
    // Check if the selected group is defined
    if (!selectedGroup || !selectedGroup.persons) {
        return;
    }
    const groupMembers = selectedGroup.persons || [];
    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    // Create a map to store each member's total expenses and the count of expenses they are involved in
    const memberTotalExpenses = new Map();
    const memberExpenseCount = new Map();

    // Initialize each member's total expenses and expense count to 0
    groupMembers.forEach(member => {
        memberTotalExpenses.set(member, 0);
        memberExpenseCount.set(member, 0);
    });

    // Calculate each member's total expenses and expense count from the expenses list
    expenses.forEach(expense => {
        var amountPerPerson = 0;
        if (expense.involvedPersons != null) {
            const involvedCount = expense.involvedPersons.length;
            amountPerPerson = expense.amount / involvedCount;
        }

        // Distribute the amount among each involved member
        expense.involvedPersons.forEach(involvedPerson => {
            const currentTotal = memberTotalExpenses.get(involvedPerson);
            memberTotalExpenses.set(involvedPerson, currentTotal + amountPerPerson);

            const currentCount = memberExpenseCount.get(involvedPerson);
            memberExpenseCount.set(involvedPerson, currentCount + 1);
        });
    });

    // Display the split amounts in the table
    const splitAmountTable = $("#splitAmountTable tbody");
    splitAmountTable.empty();

    // Create table rows for each member's split amount
    groupMembers.forEach(member => {
        const totalExpense = memberTotalExpenses.get(member);
        const expenseCount = memberExpenseCount.get(member);
        const splitAmount = expenseCount === 0 ? 0 : totalExpense / expenseCount;

        // Check if the member is not involved in any expenses, display "0.00"
        const formattedSplitAmount = splitAmount.toFixed(2);

        const row = `<tr><td>${member}</td><td>${formattedSplitAmount}</td></tr>`;
        splitAmountTable.append(row);
    });
}

// Function to get the list of group members from local storage
function getGroupMembers() {
    return JSON.parse(localStorage.getItem(selectedGroupName)) || [];
}

// Call the updateInvolvedPersonsSelect(), updatePaidBySelect(), and updateCheckboxGroup() functions when the page loads to populate the "Persons Involved" and "Paid By" select elements and checkbox group
updateInvolvedPersonsSelect();
updatePaidBySelect();
updateCheckboxGroup();

// Call the updateSplitAmountTable() function when the page loads to display the initial split amounts
updateSplitAmountTable();