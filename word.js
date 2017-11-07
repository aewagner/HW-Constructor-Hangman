var Letter = require("./letterJS.js");

var wordBank = ["rick", "morty", "bird person", "gerry", "beth", "summer"];

// wordBank[Math.floor(Math.random() * wordBank.length)]



function Word () {
   this.wordInPlay = wordBank[Math.floor(Math.random() * wordBank.length)];
    this.lettersArr = [];
    for(i=0;i<this.wordInPlay.length;i++){
        var letters = new Letter(this.wordInPlay[i]);
        this.lettersArr.push(letters);
        console.log(this.lettersArr);
    }

    // console.log(this.lettersArr)
    
    this.rebuildWordView = function(){
        var blankspace = "";
        for(j=0;j<this.lettersArr.length;j++){
            blankspace += this.lettersArr[j].rebuildLetterView();
        }
        console.log(blankspace);
    }
}


module.exports = Word;

