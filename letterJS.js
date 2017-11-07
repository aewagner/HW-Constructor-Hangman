function Letter (letter){
    this.letter = letter;
    this.matchedLetter = false;

    this.rebuildLetterView = function(){
        if(this.matchedLetter === true){
            return this.letter;
        } else {
            return " _ ";
        }
    }

    }


    module.exports = Letter;