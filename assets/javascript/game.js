var letter = thinkOfLetter();
var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessedLetters = [];

function thinkOfLetter() {
    alphabet = "abcdefghijklmnopqrstuvwxyz";
    choice = Math.floor(Math.random()*26);
    letter = alphabet[choice];
    return letter;
}

function newGame() {
    letter = thinkOfLetter();
    // console.log(letter);
    numGuesses = 9;
    guessedLetters = [];
    // console.log(guessedLetters);
}

function update() {
    document.getElementById("win").textContent = "Wins: " + wins;
    document.getElementById("lose").textContent = "Losses: " + losses;
    document.getElementById("left").textContent = "Guesses Left: " + numGuesses;
    
    //extracting previously guessed letters
    var guessedSoFar = "";
    for (i=0; i<guessedLetters.length; i++) {
        guessedSoFar += guessedLetters[i];
        if (i < guessedLetters.length - 1) {
            guessedSoFar += ",";
        }
    }
    document.getElementById("guesses").textContent = "Your Guesses so far: " + guessedSoFar;
}

document.onkeyup = function(event) {
    var key = event.key; 
    // console.log("Pressed!");
    //making sure user pressed letter key
    if ("a" <= key && key <= "z" && numGuesses > 0) {
        //user guessed correctly
        if (key === letter) {
            wins++;
            newGame();
            update();
        }
        //user guessed wrong
        else {
            numGuesses--;
            guessedLetters.push(key);
            //no more lives
            if (numGuesses === 0) {
                losses++;
                newGame();
            } 
            update();
        }
    }
}

//starting webpage
newGame();
update();








