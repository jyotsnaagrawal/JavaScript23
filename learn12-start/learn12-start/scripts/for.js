// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 
let songLyrics = "";
            for (let i = 99; i > 0; i--) {
                songLyrics += i + " bottles of beer on the wall, " + i + " bottles of beer.<br>";
                songLyrics += "Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.<br><br>";
            }
            document.getElementById("beer").innerHTML = songLyrics;



//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let monthsList = "";
            for (let monthIndex in months) {
                monthsList += months[monthIndex] + "<br>";
            }
            document.getElementById("for-in").innerHTML = monthsList;






// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string.
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph
const myString = "Hello";
            let lettersList = "";
            for (let letter of myString) {
                lettersList += letter + "<br>";
            }
            document.getElementById("for-of").innerHTML = lettersList;




// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph
let counter = 1;
            let numbersList = "";
            while (counter <= 50) {
                numbersList += counter + " ";
                counter++;
            }
            document.getElementById("while").innerHTML = numbersList;