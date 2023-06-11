function start() {
  // Math: https://www.w3schools.com/js/js_math.asp
  // Demonstrate the use of round, ceil, floor, trunc, sign
  // pow, min, and random and display to the appropriate paragraphs
  let num = 3.7;
  document.getElementById("round").innerHTML = Math.round(num);
  document.getElementById("ceil").innerHTML = Math.ceil(num);
  document.getElementById("floor").innerHTML = Math.floor(num);
  document.getElementById("trunc").innerHTML = Math.trunc(num);
  document.getElementById("sign").innerHTML = Math.sign(num);

  let base = 2;
  let exponent = 3;
  document.getElementById("pow").innerHTML = Math.pow(base, exponent);

  let numbers = [10, 5, 8, 2, 3];
  document.getElementById("min").innerHTML = Math.min(...numbers);

  document.getElementById("random").innerHTML = Math.random();

  // Random: https://www.w3schools.com/js/js_random.asp
  // create a random integer between 1 and 100 and display in the random2 paragraph
  let randomInt = Math.floor(Math.random() * 100) + 1;
  document.getElementById("random2").innerHTML = randomInt;

  // Booleans: https://www.w3schools.com/js/js_booleans.asp
  // read the reference
  let booleanValue = true;
  document.getElementById("boolean").innerHTML = booleanValue;

  // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
  // demonstrate and explain the difference between == and === in the
  // comparisons paragraph
  let x = 10;
  let y = "10";
  let comparison1 = x == y;
  let comparison2 = x === y;
document.getElementById("comparisons").innerHTML = "x == y: " + comparison1 + "<br>x === y: " + comparison2;

  // Conditions: https://www.w3schools.com/js/js_if_else.asp
  // Read the conditions page
}
