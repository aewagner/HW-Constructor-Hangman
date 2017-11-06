

var wordBank = ["Rick", "Morty", "Bird Person", "Gerry", "Beth", "Summer"];



var Letter = require("./letterJS.js");

function Word(wordInPlay) {
    this.wordInPlay = wordInPlay;
    this.lettersOfTheWord = [];
    for(i=0;i<this.wordInPlay.length;i++){
        var letters = new Letter(this.wordInPlay[i].letter);
        this.lettersOfTheWord.push(letters);
    }

    console.log(this.lettersOfTheWord)
    
    this.wordRender = function(){
        var blankspace = "";
        for(j=0;j<this.lettersOfTheWord.length;j++){
            blankspace += this.lettersOfTheWord[j].rebuildWordView();
        }
        console.log(blankspace);
    }
}

// var Test = new Word ("morty")

// console.log(Test.lettersOfTheWord);

module.exports = Word;

// // function Word () {
// // 	this.wordInPlay = wordInPlay;
// // 	this.setupGame = function () {

// // 		 this.wordInPlay = wordBank[Math.floor(Math.random() * wordBank.length)];
// // 		 console.log(this.wordInPlay);

// // 	};
	

// // }

// // var Test = new Word();

// // Test.setupGame();

// // Word.prototype.setupGame =function() {
// // 	wordInPlay = wordBank[Math.floor(Math.random() * wordBank.length)];
// // };



// // The setupGame method is called when the page first loads.
// function setupGame() {
//     // Here we pick a random word.
//     // var objKeys = Object.keys(wordBank);
//     wordInPlay = wordBank[Math.floor(Math.random() * wordBank.length)];

//     // console.log(objKeys);
//     console.log(wordInPlay);

//     lettersOfTheWord = wordInPlay.split("");

//     console.log(lettersOfTheWord);

//     //   // Split the chosen word up into its individual letters.
//     //   this.lettersOfTheWord = this.wordInPlay.split("");
//     //   // Builds the representation of the word we are trying to guess and displays it on the page.
//     //   // At the start it will be all underscores since we haven't guessed any letters ("_ _ _ _").
//     rebuildWordView();
//     //   // This function sets the number of guesses the user gets, and renders it to the HTML.
//     processUpdateTotalGuesses();
// };


// function rebuildWordView() {
//     // We start with an empty string.
//     var wordView = "";

//     // Loop through the letters of the word we are trying to guess..
//     for (var i = 0; i < lettersOfTheWord.length; i++) {
//         // If the current letter has been guessed, display that letter.
//         if (matchedLetters.indexOf(lettersOfTheWord[i]) !== -1) {

//         	console.log(wordView);
//             wordView += lettersOfTheWord[i];
//         }
//         // If it hasn't been guessed, display a "_" instead.
//         else {
//             wordView += " _ ";
//             console.log(wordView);
//         }
//     }

//     // Update the page with the new string we built.
//     console.log(wordView);
// };

// // This function sets the initial guesses the user gets.
// function processUpdateTotalGuesses() {
//     // The user will get more guesses the longer the word is.
//     totalGuesses = lettersOfTheWord.length + 5;
//     guessesLeft = totalGuesses;

//     // Render the guesses left to the page.
//     console.log(guessesLeft);
// };

// // This function is run whenever the user guesses a letter..
//  function updatePage(letter) {
//     // If the user has no guesses left, restart the game.
//     if (guessesLeft === 0) {
//       console.log("restartGame()");
//     }
//     // Otherwise...
//     else {
//       // Check for and handle incorrect guesses.
//       updateGuesses(letter);

//       // Check for and handle correct guesses.
//       updateMatchedLetters(letter);

//       // Rebuild the view of the word. Guessed letters are revealed, unguessed letters have a "_".
//       rebuildWordView();

//       // // If the user wins, restart the game.
//       // if (updateWins() === true) {
//       //   restartGame();
//       // }
//     }

//   };

//   // This function governs what happens when the user makes an incorrect guess (that they haven't guessed before).
//   function updateGuesses(letter) {
//     // If the letter is not in the guessedLetters array, and the letter is not in the lettersOfTheWord array..
//     if ((guessedLetters.indexOf(letter) === -1) && (lettersOfTheWord.indexOf(letter) === -1)) {

//       // Add the letter to the guessedLetters array.
//       guessedLetters.push(letter);

//       // Decrease guesses by one.
//       guessesLeft--;

//       // Update guesses remaining and guesses letters on the page.
//       console.log(guessesLeft);
//       console.log (guessedLetters.join(", "));
//     }
//   };

//   // This function governs what happens if the user makes a successful guess.
//   function updateMatchedLetters (letter) {
//     // Loop through the letters of the "solution".
//     for (var i = 0; i < lettersOfTheWord.length; i++) {
//       // If the guessed letter is in the solution, and we haven't guessed it already..
//       if ((letter === lettersOfTheWord[i]) && (matchedLetters.indexOf(letter) === -1)) {
//         // Push the newly guessed letter into the matchedLetters array.
//        matchedLetters.push(letter);
//       }
//     }
//   };

//   // This function builds the display of the word that is currently being guessed.
//   // For example, if we are trying to guess "blondie", it might display "bl_ndi_".
//   function rebuildWordView() {
//     // We start with an empty string.
//     var wordView = "";

//     // Loop through the letters of the word we are trying to guess..
//     for (var i = 0; i < lettersOfTheWord.length; i++) {
//       // If the current letter has been guessed, display that letter.
//       if (matchedLetters.indexOf(lettersOfTheWord[i]) !== -1) {
//         wordView += lettersOfTheWord[i];
//       }
//       // If it hasn't been guessed, display a "_" instead.
//       else {
//         wordView += " _ ";
//       }
//     }

//     // Update the page with the new string we built.
//     console.log(wordView);
//   };

// setupGame();
// updatePage("r");
// // module.exports = Word;