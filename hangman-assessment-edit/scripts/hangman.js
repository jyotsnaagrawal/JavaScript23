// declare and initialize array
let game = ["JUMBUCK", "BEDROOM", "ADVISER", "ADVANCE", "ALCOHOL", "AIRLINE", "BROTHER",
"BEATING", "ACCUSED", "CAREFUL"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 7;
let output = '';
let userLetter = '';

// game setup works fine --steffen
function setup() {
  alert(answer);
  for (let i = 0; i < answer.length; i++) {
    display[i] = "_ ";
    output = output + display[i];
  }
  document.getElementById("word").innerHTML = output;
}

document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault();
  output = '';
  userLetter = document.getElementById("guess").value;
  document.getElementById("guess").value = '';

  if (userLetter.length === 1) { // Check if the input is a single letter
    let foundLetter = false;

    for (let c = 0; c < answer.length; c++) {
      if (userLetter.toUpperCase() === letters[c]) {
        display[c] = userLetter.toUpperCase();
        win--;
        foundLetter = true;
      }
      output = output + display[c] + ' ';
    }

    if (!foundLetter) {
      attemptsLeft--;
      document.getElementById("hangman").src = `images/hangman${attemptsLeft}.png`;
    }
  }

  document.getElementById("word").innerHTML = output;
  output = '';

  if (win < 1) {
    document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
  } else if (attemptsLeft < 1) {
    document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
  } else {
    document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
  }
});
