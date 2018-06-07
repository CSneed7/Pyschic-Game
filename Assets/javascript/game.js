var words = ["amazing","incredible","disaster","hugs"];
var guessesRemaining = 10;
var randomWord = words[Math.floor(Math.random()* words.length)];
var wordLength = randomWord.length;

var answerArray = [];

function gameTime() {
    for(i = 0; i < words.length; i++){
        answerArray[i] = "_";
    }
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
    if (guessesRemaining < 1) {
        alert ("Game over!");
    }
    document.getElementById("lettersinWord").innerHTML = wordLength;
}

gameTime();