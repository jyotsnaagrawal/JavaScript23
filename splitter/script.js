// Retrieve the stored group names from local storage
const storedGroupNames = JSON.parse(localStorage.getItem("groupNames")) || [];

function createGroup() {
    const groupNameInput = document.getElementById("groupNameInput");
    const groupName = groupNameInput.value;

    // Check if the group name already exists
    const groupExists = storedGroupNames.some(function (group) {
        return group.name === groupName;
    });

    if (groupExists) {
        alert("Group name already exists. Please choose a different name.");
        return;
    }

    // Add the new group name to the array of group names
    storedGroupNames.push({ name: groupName, expenses: [] });

    // Store the updated group names array in local storage
    localStorage.setItem("groupNames", JSON.stringify(storedGroupNames));

    // Display the message box
    const messageBox = document.getElementById("messageBox");
    const groupCreatedMessage = document.getElementById("groupCreatedMessage");
    groupCreatedMessage.textContent = `Group with name '${groupName}' has been created.`;
    messageBox.style.display = "block";

    // Clear the input field
    groupNameInput.value = "";

    // Refresh the group dropdown
    populateGroupDropdown();
}

function populateGroupDropdown() {
    const groupDropdown = document.getElementById("groupDropdown");
    groupDropdown.innerHTML = "";

    // Create the default option
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select group";
    groupDropdown.appendChild(defaultOption);

    // Populate the group dropdown with group names
    for (const group of storedGroupNames) {
        const option = document.createElement("option");
        option.value = group.name;
        option.textContent = group.name;
        groupDropdown.appendChild(option);
    }
}

populateGroupDropdown();

function showExpenseForm() {
    const expenseForm = document.getElementById("expenseForm");
    const groupDropdown = document.getElementById("groupDropdown");

    if (groupDropdown.value === "") {
        alert("Please select a group.");
        return;
    }

    expenseForm.style.display = "block";
}

function saveExpense(event) {
    event.preventDefault();

    const dateInput = document.getElementById("dateInput");
    const descriptionInput = document.getElementById("descriptionInput");
    const amountInput = document.getElementById("amountInput");
    const paidByInput = document.getElementById("paidByInput");
    const groupInput = document.getElementById("groupInput");

    const expense = {
        date: dateInput.value,
        description: descriptionInput.value,
        amount: parseFloat(amountInput.value),
        paidBy: paidByInput.value
    };

    const groupName = groupInput.value;

    const selectedGroup = storedGroupNames.find(function (group) {
        return group.name === groupName;
    });

    selectedGroup.expenses.push(expense);

    localStorage.setItem("groupNames", JSON.stringify(storedGroupNames));

    dateInput.value = "";
    descriptionInput.value = "";
    amountInput.value = "";
    paidByInput.selectedIndex = 0;
    groupInput.selectedIndex = 0;

    showExpenseList();
}

function showExpenseList() {
    const expenseList = document.getElementById("expenseList");
    const expenseTableBody = document.getElementById("expenseTableBody");
    expenseTableBody.innerHTML = "";

    const groupDropdown = document.getElementById("groupDropdown");

    if (groupDropdown.value === "") {
        expenseList.style.display = "none";
        return;
    }

    expenseList.style.display = "block";

    const groupName = groupDropdown.value;

    const selectedGroup = storedGroupNames.find(function (group) {
        return group.name === groupName;
    });

    for (const expense of selectedGroup.expenses) {
        const row = document.createElement("tr");

        const dateCell = document.createElement("td");
        dateCell.textContent = expense.date;
        row.appendChild(dateCell);

        const descriptionCell = document.createElement("td");
        descriptionCell.textContent = expense.description;
        row.appendChild(descriptionCell);

        const amountCell = document.createElement("td");
        amountCell.textContent = expense.amount.toFixed(2);
        row.appendChild(amountCell);

        const paidByCell = document.createElement("td");
        paidByCell.textContent = expense.paidBy;
        row.appendChild(paidByCell);

        expenseTableBody.appendChild(row);
    }
}
