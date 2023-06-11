function start() {
    // Print your name to the name heading
    let name = "Jyotsna";
    document.getElementById("name").innerHTML = "My Name = " + name;

    // String length: calculate the string length and print to the length paragraph
    let myString = "Be it ever so humble, there is no place like home.";
    document.getElementById("length").innerHTML = "The length of the string is: " + myString.length;

    // Escape sequences: print a string to the escape paragraph that uses three different escape sequences
    let text1 = "We are the so-called \"Vikings\" from the north.";
    document.getElementById("escape1").innerHTML = text1; 

    let text2 = 'It\'s alright.';
    document.getElementById("escape2").innerHTML = text2; 

    let text3 = "The character \\ is called backslash.";
    document.getElementById("escape3").innerHTML = text3;

    // JavaScript String Methods

    // Use the JavaScript slice function to display your first name in the first paragraph
    var name1 = "Jyotsna Gaurav Agrawal";
    var firstName = name1.slice(0, name1.indexOf(" "));
    document.getElementById("first").textContent = firstName;

    // Use the JavaScript substring method to display your middle name in the middle paragraph
    var middleName = name1.substring(name1.indexOf(" ") + 1, name1.lastIndexOf(" "));
    document.getElementById("middle").textContent = middleName;

    // Use the JavaScript substring method to display your last name in the last paragraph
    var lastName = name1.substring(name1.lastIndexOf(" ") + 1);
    document.getElementById("last").textContent = lastName;

    // Replacing string content - use the replace method to put your major in a new string and print it to the major paragraph
    let major = "I'm majoring in Physical Therapy at McHenry County College";
    document.getElementById("major").textContent = major.replace("Physical Therapy", "Your Major");

    // Convert the following variable to upper case then print it to the upper paragraph
    let myText = "It's a great day to be alive!";
    document.getElementById("upper").textContent = myText.toUpperCase();

    // Use the trim() method to remove white spaces from the following variable and print it to the trim paragraph
    let trimText = "                  McHenry County College                ";
    document.getElementById("trim").textContent = trimText.trim();

    // Use the indexOf() method to get the index of 'May' and print the index number to the index paragraph
    let months = "January, February, March, April, May, June, July, August, September, October, November, December";
    let index = months.indexOf("May");
    document.getElementById("index").textContent = "Index of 'May': " + index;

    // JavaScript Template Literals

    // Create template literals for both your first and last name (name the variables first and last)
    let first = `Jyotsna`;
    let last = `Agrawal`;

    // Use variable substitutions to create a greeting that incorporates your first and last name and print it to the greeting paragraph
    let greeting = `Hello, my name is ${first} ${last}. Nice to meet you!`;
    document.getElementById("greeting").textContent = greeting;
}

