function start() {
    document.getElementById("name").innerHTML = "Your Name Here";

    // Task 1: Adding a number and a string
    let number = 10;
    let string = "20";
    let result = number + string;
    document.getElementById("add").innerHTML = `${number} + "${string}" = ${result}`;

    // Task 2: Using toString()
    let num = 42;
    let numString = num.toString();
    document.getElementById("to-string").innerHTML = `Number: ${num}, String: ${numString}`;

    // Task 3: Using toExponential()
    let exponentialNum = 123.456;
    let exponentialString = exponentialNum.toExponential(2);
    document.getElementById("exponent").innerHTML = `Number: ${exponentialNum}, Exponential: ${exponentialString}`;

    // Task 4: Using toFixed()
    let fixedNum = 5.6789;
    let fixedString = fixedNum.toFixed(2);
    document.getElementById("fixed").innerHTML = `Number: ${fixedNum}, Fixed: ${fixedString}`;

    // Task 5: Using toPrecision()
    let preciseNum = 9.87654;
    let preciseString = preciseNum.toPrecision(3);
    document.getElementById("precision").innerHTML = `Number: ${preciseNum}, Precision: ${preciseString}`;

    // Task 6: Using parseFloat()
    let floatString = "3.14";
    let floatNum = parseFloat(floatString);
    document.getElementById("float").innerHTML = `String: "${floatString}", Float: ${floatNum}`;

    // Task 7: Using parseInt()
    let intString = "42";
    let intNum = parseInt(intString);
    document.getElementById("int").innerHTML = `String: "${intString}", Integer: ${intNum}`;

    // Task 8: Difference between == and ===
    document.getElementById("equals").innerHTML = "The '==' operator compares values, performing type coercion if necessary. The '===' operator compares both values and types strictly without coercion.";

    // Task 9: Order of precedence for and / or operators
    document.getElementById("logic").innerHTML = "The 'and' operator (&&) has higher precedence than the 'or' operator (||). This means that expressions with 'and' are evaluated before expressions with 'or' within a larger expression.";

    // Task 10: Using the switch statement
    let day = "Monday";
    let dayMessage;

    switch (day) {
        case "Monday":
            dayMessage = "It's Monday!";
            break;
        case "Tuesday":
            dayMessage = "It's Tuesday!";
            break;
        case "Wednesday":
            dayMessage = "It's Wednesday!";
            break;
        default:
            dayMessage = "It's another day!";
    }

    document.getElementById("switch").innerHTML = dayMessage;

    // Task 11: Using the ternary operator
    let condition = true;
    let message = condition ? "Condition is true" : "Condition is false";
    document.getElementById("ternary").innerHTML = message;
}
