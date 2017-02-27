var prompt = require('prompt')
var resultWord1
prompt.start()

prompt.get(['word1'], function (err, result) {
  resultWord1 = result.word1.trim().toLowerCase()
  console.log(scramble(concatMultipleStringsIntoArray(resultWord1)))
  if (err != null) {
    console.log(err)
  }
})

function scramble (arrayOfLetters) {
  var lettersArray = arrayOfLetters
  var outArray = new Array(lettersArray.length)
  var i
  for (i = 0; i < outArray.length; i++) {
    var letterInt = numGen(lettersArray)
    outArray[i] = lettersArray[letterInt]
    lettersArray.splice(letterInt, 1)
  }
  outArray.splice(Math.floor(Math.random() * outArray.length), 0, ' ')
  return outArray.join('').trim()
}

function numGen (letters) {
  return Math.floor(Math.random() * letters.length)
}

// takes as many strings as inputted
function concatMultipleStringsIntoArray (/**/) {
  var args = arguments
  var arrayOfCharacters = []
  for (var i = 0; i < args.length; i++) {
    var wordSplit = args[i].split('')
    wordSplit.forEach(function (letter) {
      arrayOfCharacters.push(letter)
    })
  }
  return arrayOfCharacters
}
