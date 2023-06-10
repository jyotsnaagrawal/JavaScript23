// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Jyotsna";

const taxRate = .07; // This is a constant
// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {

    //fix the errors
    var firstName = "jyotsna",
        lastName = "Singhal";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Sona";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    //fix the errors
    var firstName = "jyotsna",
        lastName = "Singhal";
    const taxRate = .07;
    document.getElementById("global").innerHTML = name1;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    //taxRate = .08
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    dog2 = "Nessie";
    //dog2 = "Nessie";
    var dog3 = "Paisley";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Ory"
    document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("new-doggos").innerHTML = dogs;
    const breed = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breeds").innerHTML = breed;
}

function myMath() {
    // create statements demonstrating the use of each operator
    // Addition
    let x = 105 + 250;
    document.getElementById("addition").innerHTML = "let x = 105 + 250 = "
        + x;
    // Subtracting
    let a = 5;
    let b = 2;
    let c = a - b;
    document.getElementById("subtraction").innerHTML = "let a = 5" + "<br></br>" + "let b = 2" +
        "<br></br>" + "let c = a - b" + " = " + c;
    //Multiplying
    let x1 = 5;
    let y1 = 2;
    let z1 = x1 * y1;
document.getElementById("multiplication").innerHTML = "let x1 = 5" + "<br></br>" + "let y1 = 2" +
        "<br></br>" + "let z1 = x1 * y1" + " = " + z1;
    //Exponentiation
    let x2 = 5;
    document.getElementById("exponent").innerHTML = "let x2 = 5" + "<br></br>" + " x2 ** 2 = " + x2 ** 2;
    //Dividing
    let x3 = 5;
let y3 = 2;
let z3 = x3 / y3;
document.getElementById("division").innerHTML = "let x3 = 5" + "<br></br>" + "let y3 = 2" +
        "<br></br>" + "let z3 = x3 / y3" + " = " + z3;
    //Remainder( OR modulus)
    let x4 = 5;
let y4 = 2;
let z4 = x4 % y4;
document.getElementById("modulus").innerHTML = "let x4 = 5" + "<br></br>" + "let y4 = 2" +
        "<br></br>" + "let z4 = x4 % y4" + " = " + z4;
    //Incrementing
    let a1 = 5;
a1++;
let c1 = a1;
document.getElementById("increment").innerHTML ="let a1 = 5" +  "<br></br>" + "a1++;" + "<br></br>"

        + "let c1 = a1" + "<br></br>" + "c1 = " + c1;
    //Decrementing
    let a2 = 5;
a2--;
let c2 = a2;
document.getElementById("decrement").innerHTML ="let a2 = 5" +  "<br></br>" + "a2--;" + "<br></br>"

+ "let c2 = a2" + "<br></br>" +"c2 = "+ c2;
}

function assignments() {
    // create statements demonstrating the use of each assignment type
    x = 10
    document.getElementById("equals").innerHTML = "x = 10" + " = " + x;
    //Addition Assignment
     x = 10
    x += 5;
    document.getElementById("plus-equals").innerHTML = "x = 10" + " x += 5"+ " = " + x;
    //Subtraction Assignment
     x = 10
    x -= 5;
    document.getElementById("minus-equals").innerHTML = "x = 10" + " x -= 5"+ " = " + x;
    //Multiply Assignment
     x = 10
    x *= 5;
    document.getElementById("times-equals").innerHTML = "x = 10" + " x *= 5"+ " = " + x;
    //Division Assignment Operator
    x = 10
    x /= 5;
    document.getElementById("divide-equals").innerHTML = "x = 10" + " x /= 5"+ " = " + x;
    //Remainder Assignment Operator 
    x = 10
    x %= 5;
    document.getElementById("modulus-equals").innerHTML = "x = 10" + " x %= 5"+ " = " + x;
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    //Array
    const cars = ["Audi","Cameri","BMW"];

    document.getElementById("array").innerHTML = cars;
    //Object
    const person = {
  firstName : "Jyo",
  lastName  : "Argawal",
  age     : 34,
  eyeColor  : "blue"
};

document.getElementById("object").innerHTML =
person.firstName + " is " + person.age + " years old.";

}
