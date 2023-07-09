function addme() {
    // Get form values
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    // Create an object using the form values
    var contact = {
        firstName: fname,
        lastName: lname,
        email: email,
        phone: phone
    };

    // Convert the object to a JSON string
    var jsonString = JSON.stringify(contact);

    // Display the JSON string on the page
    document.getElementById("json-value").textContent = jsonString;
}
