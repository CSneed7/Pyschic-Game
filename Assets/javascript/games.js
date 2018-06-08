var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var userGuesses = [];
var wins = 0;
var losses = 0;
var guesses = 10;

    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerChoice)
    document.getElementById('guesses').innerHTML = guesses;

    function gameStart() {
    document.onkeypress = function(event) {
        var userGuess = event.key;
    
        if(userGuess === computerChoice){
            wins++;
            guesses = 10;
            computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
            alert("You won!");
        }else{
            guesses--;
        }
    
        if(guesses === 0){
            losses++
            guesses = 10;
            computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
            alert("Guess again, loser");
        }

    
        document.getElementById('wins').innerHTML = wins;
        document.getElementById('losses').innerHTML = losses;
        document.getElementById("guesses").innerHTML = guesses;
    }
    }  

    gameStart();