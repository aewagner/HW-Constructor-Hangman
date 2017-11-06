var inquirer = require("inquirer");
var Word = require("./word.js");

var numGuesses = 0;
var correctLetters = [];
var currentWord = "";

var randWord = "";

var wordBank = ["rick", "morty", "birdperson", "gerry", "beth", "summer"];

function startGame (){
    randWord = new Word(wordBank[Math.floor(Math.random() * wordBank.length)]);

    // console.log(randWord);

    numGuesses = 10;

    // console.log(numGuesses);

    correctLetters = randWord.lettersOfWord;

    console.log(correctLetters);
    // console.log(correctLetters.keys(letter).length);
    // currentWord = randWord.newWord;
    // console.log("New Game Started");
    // randWord.wordRender();
    // guessLetter();
}

// function guessLetter() {
//     if(numGuesses>0){
//         inquirer.prompt([
//             {
//                 type: "input",
//                 message: "Guess a letter!",
//                 name: "letGuessed"
//                 // validate: function(value){
//                 //     let regExp = /^[a-z\-']/i;
//                 //     if(regExp.test(value) === true && value.length === 1){
//                 //         return true;
//                 //     }
//                 //     return false;
//                 // }
//             }
//         ]).then(function(answer){
//         var letterGuessed = answer.letGuessed;
//         for(i=0;i<correctLetters.length;i++){
//             if(letterGuessed === correctLetters[i].letter){
//                 correctLetters[i].revealed = true;
//             };
//         }
//         if(currentWord.indexOf(letterGuessed) === -1){
//             console.log("incorrect");
//             numGuesses--
//         }
//         randWord.wordRender();
//         console.log("\nGuesses remaining " + numGuesses);
//         guessLetter();
//         })
//     } else {
//         console.log("You lose");
//         inquirer.prompt([
//             {
//                 type:"confirm",
//                 message:"GAME OVER, play again?",
//                 name: "newGame",
//                 default: false,
//             }
//         ]).then(function(answer){
//             if(answer.newGame === true){
//                 startGame();
//             } else {
//                 process.exit();
//             }
//         })
//     }
// }

startGame();