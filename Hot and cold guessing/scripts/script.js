function guess() {
    // Generate a random secret number between 1 and 1000
    var secretNumber = Math.floor(Math.random() * 1000) + 1;

    // Get the input element and result element from the HTML document
    var guessInput = document.getElementById("guessInput");
    var result = document.getElementById("result");

    // Parse the user's guess from the input element value
    var guess = parseInt(guessInput.value);

    // Check if the guess matches the secret number
    if (guess === secretNumber) {
        // If the guess is correct, display a congratulations message
        result.textContent = "Congratulations! You guessed the number " + secretNumber + " correctly!";
        result.style.color = "#008000"; // Set the text color to green
    } else {
        // If the guess is incorrect, calculate the difference between the guess and the secret number
        var difference = Math.abs(secretNumber - guess);
        var temperature;

        // Determine the temperature (hot, warm, cold, ice cold) based on the difference
        if (difference >= 100) {
            temperature = "Ice cold";
            result.style.color = "#0000FF"; // Set the text color to blue
        } else if (difference >= 50) {
            temperature = "Cold";
            result.style.color = "#00BFFF"; // Set the text color to deep sky blue
        } else if (difference >= 25) {
            temperature = "Warm";
            result.style.color = "#FFA500"; // Set the text color to orange
        } else {
            temperature = "Hot";
            result.style.color = "#FF4500"; // Set the text color to orange-red
        }

        // Display a message indicating the temperature and prompt the user to keep guessing
        result.textContent = "You're " + temperature + "! Keep guessing!";
    }
}
