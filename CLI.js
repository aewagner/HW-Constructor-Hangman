var inquirer = require("inquirer");
var Word = require("./word.js");

var numGuesses = 0;
var correctLetters = [];
var currentWord = "";

var randWord = "";

var wordBank = ["rick", "morty", "birdperson", "gerry", "beth", "summer"];

function startGame (){
    randWord = new Word();

    // console.log(randWord);

    numGuesses = 3;

    // console.log(numGuesses);

    correctLetters = randWord.lettersArr;

    console.log(correctLetters.length);
    // console.log(correctLetters.keys(letter).length);
    currentWord = randWord.wordInPlay;
    console.log("New Game Started");
    randWord.rebuildWordView();
    guessLetter();
}

function guessLetter() {
    if(numGuesses > 0){
        inquirer.prompt([
            {
                type: "input",
                message: "Guess a letter!",
                name: "letGuessed"
            }
        ]).then(function(answer){
        var letterGuessed = answer.letGuessed;
        for(i=0;i<correctLetters.length;i++){
            if(letterGuessed === correctLetters[i].letter){
                correctLetters[i].matchedLetter = true;
            };
        }
        if(currentWord.indexOf(letterGuessed) === -1){
            console.log("incorrect");
            numGuesses--
        }
        randWord.rebuildWordView();
        console.log("\nGuesses remaining " + numGuesses);
        guessLetter();
        })
    } else {
        console.log("You lose " + randWord.wordInPlay);
        inquirer.prompt([
            {
                type:"confirm",
                message:"GAME OVER, play again?",
                name: "newGame",
                default: false,
            }
        ]).then(function(answer){
            if(answer.newGame === true){
                startGame();
            } else {
                process.exit();
            }
        })
    }
}

startGame();