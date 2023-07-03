/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
const moviesList = ["RRR", "HUM AAPKE HAIN KON", "RAMAYAN", "DUPLICATE", "HUM TUM"];
    const listParagraph = document.getElementById("list");
    listParagraph.textContent = "Movies: " + moviesList.join(", ");





/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/
const songSet = new Set(["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"]);
    const set1Paragraph = document.getElementById("set1");
    set1Paragraph.textContent = "Songs: " + [...songSet].join(", ");


// add two more songs to the set then display in the set2 paragraph
songSet.add("Song 6");
    songSet.add("Song 7");
    const set2Paragraph = document.getElementById("set2");
    set2Paragraph.textContent = "Songs (after adding two more): " + [...songSet].join(", ");





/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/  const emailMap = new Map([
      ["Jyoti", "Jyoti1@yahoo.com"],
      ["Swati", "Swati2@gmail.com"],
      ["Geeta", "Geeta3@yahoo.com"],
      ["Seeta", "Seeta4@gmail.com"],
      ["Meeta", "Meeta5@gmail.com"]
    ]);

    const map1Paragraph = document.getElementById("map1");
    map1Paragraph.textContent = "Map Content: ";
    emailMap.forEach((email, name) => {
      map1Paragraph.textContent += `${name} -> ${email}, `;
    });




// add two new names and emails and display in map2 use the forEach() method
emailMap.set("Ram", "ran6@gmail.com");
    emailMap.set("Gyan", "gyan7@yahoo.com");
    const map2Paragraph = document.getElementById("map2");
    map2Paragraph.textContent = "Map Content (after adding two more): ";
    emailMap.forEach((email, name) => {
      map2Paragraph.textContent += `${name} -> ${email}, `;
    });


// get and display the email of one person, display in map3
const map3Paragraph = document.getElementById("map3");
    const emailOfPerson = emailMap.get("Geeta");
    map3Paragraph.textContent = `Email of Geeta: ${emailOfPerson}`;