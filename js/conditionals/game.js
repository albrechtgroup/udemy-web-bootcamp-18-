// alert("Hello WORLD!!!");

// Create secretNumber
var secretNumber = 7;

// Ask user for guess
var stringGuess = prompt("Guess a Number");
var guess = Number(stringGuess);

// Check if user's guess is right
if (guess === secretNumber) {
	alert("YOU GOT IT RIGHT!!!");
}
// Check if guess is Higher
else if(guess > secretNumber) {
	alert("Too High, guess again");
}
// The nhmber is obviousely too Low at this point
else {
	alert("Sorry, the number is too Low");
}