var lettersArray = new Array();
var prompt = require('prompt');
var resultWord1 = new String();
var resultWord2 = new String();
prompt.start();

prompt.get(['word1', 'word2'], function (err, result) {
  resultWord1 = result.word1;
  resultWord2 = result.word2;
  console.log(scramble(concatMultipleStringsIntoArray(resultWord1, resultWord2)));
});
// console.log (scramble(resultWord1, resultWord2));

function scramble(arrayOfLetters) {
  var lettersArray = arrayOfLetters;
  var outArray = new Array(lettersArray.length);
  for (i = 0; i < outArray.length; i++) {
    letterInt = numGen(lettersArray);
    outArray[i] = lettersArray[letterInt];
    lettersArray.splice(letterInt, 1);
  }
  outArray.splice(Math.floor(Math.random() * outArray.length), 1, " ");
  return outArray.join("");
}

function numGen(letters) {
  return Math.floor(Math.random() * letters.length);
}

// takes as many strings as inputted
function concatMultipleStringsIntoArray(/**/) {
  var args = arguments;
  var arrayOfCharacters = new Array();
  for(var i=0; i<args.length; i++){
    var wordSplit = args[i].split("")
    var word = args[i];
    wordSplit.forEach(function (letter) {
      arrayOfCharacters.push(letter);
    });
    // arrayOfCharacters.concat(word.split(""));
  }
  return arrayOfCharacters;
}
