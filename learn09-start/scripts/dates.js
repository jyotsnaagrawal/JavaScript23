// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
let basicDate = new Date();
document.getElementById("basic").innerHTML = basicDate;

// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
let todayDate = new Date();
document.getElementById("today").innerHTML = "Year: " + todayDate.getFullYear() + ", Month: " + (todayDate.getMonth() + 1) + ", Day: " + todayDate.getDate();

// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
let birthday = new Date("1990-01-01");
document.getElementById("birthday").innerHTML = birthday;

// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
let isoDate = basicDate.toISOString();
document.getElementById("iso").innerHTML = isoDate;

// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
let date1 = basicDate.toLocaleDateString("en-US");
let date2 = basicDate.toLocaleString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
let date3 = basicDate.toLocaleString("en-US", { year: 'numeric', month: '2-digit', day: '2-digit' });
document.getElementById("date1").innerHTML = date1;
document.getElementById("date2").innerHTML = date2;
document.getElementById("date3").innerHTML = date3;

// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
let get1 = basicDate.getFullYear();
let get2 = basicDate.getMonth();
let get3 = basicDate.getDate();
let get4 = basicDate.getDay();
document.getElementById("get1").innerHTML = get1;
document.getElementById("get2").innerHTML = get2;
document.getElementById("get3").innerHTML = get3;
document.getElementById("get4").innerHTML = get4;

// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
let set1 = basicDate.setFullYear(2022);
let set2 = basicDate.setMonth(9);
let set3 = basicDate.setDate(15);
let set4 = basicDate.setHours(10);
document.getElementById("set1").innerHTML = new Date(set1);
document.getElementById("set2").innerHTML = new Date(set2);
document.getElementById("set3").innerHTML = new Date(set3);
document.getElementById("set4").innerHTML = new Date(set4);
