window.onload = setBackground;

var alphabet =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerChoices =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



var randomLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var guessesRemaining = 9;

var wins = 0;

var losses = 0;

var guessesSoFar = document.getElementById("guessesInPlay");

var playedLetters = [];


var mainImage = ["assets/images/psychic.jpg"];

var images = ["assets/images/psychic.jpg", "assets/images/psychic2.jpg", "assets/images/psychic3.jpg", "assets/images/psychic4.jpg"];
var correctImage = ["assets/images/psychicCorrect.jpg"];
var imageHead = document.getElementById("image-head");
var oh = 0;
var minus1 = 1;
var suh = 0;

var background = imageHead.style.backgroundImage;

// var imagesFunction = function() {
// imageHead.style.backgroundImage = "url(" + images[suh] + ")";
// suh = suh + 1;
// if (suh == images.length) {
// 	suh = 0;
// 	}

// } 

// setInterval(imagesFunction, 1000);

// All of this ^^^^ works in cycling images for the background, 
//but it's really choppy when it first loads. I'm going to leave it here for future reference

 var timer = ["one","two","three","four"];
 function customTimer() {
 	oh = oh +1;
 	if (oh = timer.length) {
		imageHead.style.backgroundImage = "url(" + mainImage + ")";
	}
 }

 function setBackground() {
 	imageHead.style.backgroundImage = "url(" + mainImage + ")";
 }

setBackground();

if (imageHead.style.backgroundImage = "url(" + correctImage + ")"){
setInterval(customTimer, 2000);
}


document.onkeyup = function(event) {

	var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
	// var userChoice = event.key;
	var isLetter = false;
	
	function hopefullyReset() {
		playedLetters = [];
		guessesRemaining = 9;
		guessesSoFar.innerHTML = [" "]
		randomLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	}




	
	//If userChoice is a letter in the alphabet...
if (alphabet.indexOf(userChoice) > -1) {
// 		//the variable isLetter = true
isLetter = true;
		}

for (var i = 0; i < playedLetters.length; i++) {
		//if isLetter=true and userChoice has already been played, then isLetter=false
	if (playedLetters[i] === userChoice) {
				
				isLetter = false;
			}
		}



if (!isLetter) {
		return;
	}



playedLetters.push(userChoice);
playedLetters.sort();		
	


//If userChoice isn't correct & 

if (userChoice !== randomLetter && guessesRemaining > 0) {
			guessesRemaining = guessesRemaining - 1;

			guessesSoFar.innerHTML = playedLetters;

			}
if (userChoice === randomLetter && guessesRemaining > 8) {
	alert("You guessed it on the first try...Are you cheating?");
}
	
if (userChoice === randomLetter && guessesRemaining > 0) {
	wins++;
	imageHead.style.backgroundImage = "url(" + correctImage + ")";
	hopefullyReset();

}

if (userChoice !== randomLetter && guessesRemaining <= 0) {
	losses++;
	hopefullyReset();
}







	var html = 
		"<p>Wins: " + wins + "</p>" +
		"<p> Losses: " + losses + "</p>" +
		"<p> Guesses remaining: " + guessesRemaining + "</p>";
		// "<p> Your guesses so far: " + guessesSoFar + "</p>";

	document.querySelector("#game").innerHTML = html ;
}
