function start() {
    // Write your name to the name h1
    document.getElementById("name").innerHTML = "Jyotsna" ;

    // Create an array called months that holds all the months of the year
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Use the index to print the month May from the months array to the may paragraph
    document.getElementById("may").innerHTML = months[4];

    // Print the length of the month array to the length paragraph
    document.getElementById("length").innerHTML = months.length;

    // Loop through all of the months array and print each month to the months paragraph
    let monthsText = "";
    for (let i = 0; i < months.length; i++) {
        monthsText += months[i] + "<br>";
    }
    document.getElementById("months").innerHTML = monthsText;

    // Convert the months array to a string and print to the string paragraph
    let monthsString = months.toString();
    document.getElementById("string").innerHTML = monthsString;

    // Create two new arrays - weekends and weekdays, and add the appropriate days to each
    let weekends = ["Saturday", "Sunday"];
    let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    // Join the two arrays into a new array - week
    let week = weekdays.concat(weekends);

    // Print the contents of week to the week paragraph
    document.getElementById("week").innerHTML = week.join(", ");

    // Use the pop method to remove the last element of the week array, then print the week array to the pop paragraph
    let popped = week.pop();
    document.getElementById("pop").innerHTML = week.join(", ");

    // Use the push function to add two fruits to the array fruits and print to the fruits paragraph
    let fruits = ["Apple", "Kiwi", "Mango"];
    fruits.push("Banana", "Orange");
    document.getElementById("fruits").innerHTML = fruits.join(", ");

    // Use the unshift function to add a fruit to the front of the list and print to the fruits2 paragraph
    fruits.unshift("Grapes");
    document.getElementById("fruits2").innerHTML = fruits.join(", ");

    // Sort the array languages and print to the sorted paragraph
    let languages = ["COBOL", "livescript", "C++", "Python", "JavaScript", "Lua", "Basic"];
    document.getElementById("sorted").innerHTML = languages.sort().join(", ");

    // Reverse the array languages and print to the reversed paragraph
    document.getElementById("reversed").innerHTML = languages.reverse().join(", ");

    // Use the compare function to sort the numbers and print to the num-sorted paragraph
    let numbers = [42, 23, 21, 50, 20, 6, 31, 9];
    document.getElementById("num-sorted").innerHTML = numbers.sort(compareNumbers).join(", ");

    // Compare function for sorting numbers in ascending order
    function compareNumbers(a, b) {
        return a - b;
    }

    // Reference links have been provided in the comments for further reading
}
