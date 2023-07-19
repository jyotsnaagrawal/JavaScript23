// Add event listener to the Save button
document.getElementById('saveButton').addEventListener('click', saveGroupName);

function saveGroupName() {
    // Get the group name entered by the user
    const groupName = document.getElementById('groupName').value;

    // Perform your group name validation here if required

    // Call the backend API to save the group name (you will need to set up your backend)
    // For simplicity, we will use a dummy function here
    if (createGroup(groupName)) {
        // Show a message saying "Group has been created"
        alert('Group has been created');
        // You can redirect or close the window as needed
    } else {
        alert('Group name already exists');
    }
}

// Dummy function to simulate creating a group
function createGroup(groupName) {
    // Implement your backend logic to save the group name here
    // For this example, we will just return true
    return true;
}
