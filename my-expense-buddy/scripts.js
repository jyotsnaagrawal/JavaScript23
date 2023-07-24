const toggle = () => {
  document.getElementById("nav").classList.toggle("navactive");
};

function saveGroup() {
  var groupNameInput = document.getElementById("groupNameInput");
  var groupName = groupNameInput.value.trim();

  if (!groupName) {
    alert("Please enter a group name.");
    return;
  }

  // Retrieve the stored group names from local storage
  var storedGroupNames = JSON.parse(localStorage.getItem("groupNames")) || [];

  // Check if the group name already exists
  var groupExists = storedGroupNames.some(function (group) {
    return group.name.toLowerCase() === groupName.toLowerCase();
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
  var messageBox = document.getElementById("messageBox");
  var groupCreatedMessage = document.getElementById("groupCreatedMessage");
  groupCreatedMessage.textContent = "Group with name '" + groupName + "' has been created.";
  messageBox.style.display = "block";

  // Clear the input field
  groupNameInput.value = "";
}

var selectedGroupName = null;

function populateListbox() {
  var groupList = document.getElementById("groupList");
  if (!groupList) {
    console.error("Element with ID 'groupList' not found.");
    return;
  }

  groupList.innerHTML = "";

  // Retrieve the stored group names from local storage
  var storedGroupNames = JSON.parse(localStorage.getItem("groupNames")) || [];

  if (storedGroupNames && storedGroupNames.length > 0) {
    storedGroupNames.forEach(function (group) {
      var li = document.createElement("li");
      li.textContent = group.name;
      li.addEventListener("click", function () {
        toggleButtons(li, group.name);
      });
      groupList.appendChild(li);
    });
  } else {
    var li = document.createElement("li");
    li.textContent = "No groups found.";
    groupList.appendChild(li);
  }
}

function toggleButtons(selectedItem, groupName) {
  var groupItems = document.getElementsByTagName("li");

  for (var i = 0; i < groupItems.length; i++) {
    groupItems[i].classList.remove("active");
  }

  selectedItem.classList.add("active");
  selectedGroupName = groupName;

  var buttonContainer = document.getElementById("buttonContainer");

  if (selectedItem.classList.contains("active")) {
    buttonContainer.style.display = "block";
  } else {
    buttonContainer.style.display = "none";
  }
}

function addPerson() {
  if (!selectedGroupName) {
    alert("Please select a group first.");
    return;
  }

  var personName = prompt("Enter person's name");
  if (personName) {
    // Retrieve the stored group names from local storage
    var storedGroupNames = JSON.parse(localStorage.getItem("groupNames"));

    // Find the selected group name in the stored group names
    var selectedGroup = storedGroupNames.find(function (group) {
      return group.name === selectedGroupName;
    });

    if (selectedGroup) {
      // Check if the person's name already exists in the group
      var personExists = selectedGroup.expenses.some(function (expense) {
        return expense.person === personName;
      });

      if (personExists) {
        alert("Person already exists in the group. Please choose a different name.");
        return;
      }

      // Add the person's name to the selected group's expenses array
      selectedGroup.expenses.push({ person: personName, amount: 0 });

      // Update the stored group names in local storage
      localStorage.setItem("groupNames", JSON.stringify(storedGroupNames));

      // Refresh the group list to reflect the added person
      populateListbox();
    }
  }
}

// Populate the listbox with group names
populateListbox();
