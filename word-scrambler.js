const prompt = require('prompt')
prompt.start()

prompt.get(['Word'], function (err, result) {
  const charactersString = result.Word.trim().toLowerCase()
  console.log(scramble(concatMultipleStringsIntoArray(charactersString)))
  if (err != null) {
    console.log(err)
  }
})

function scramble (arrayOfLetters) {
  let lettersArray = arrayOfLetters
  let outArray = new Array(lettersArray.length)
  for (let i = 0; i < outArray.length; i++) {
    let letterInt = numGen(lettersArray)
    outArray[i] = lettersArray[letterInt]
    lettersArray.splice(letterInt, 1)
  }
  outArray.splice(Math.floor(Math.random() * outArray.length), 0, ' ')
  return outArray.join('').trim()
}

const numGen = (letters) => Math.floor(Math.random() * letters.length)

// takes as many strings as inputted
function concatMultipleStringsIntoArray (/**/) {
  const args = arguments
  let arrayOfCharacters = []
  for (let i = 0; i < args.length; i++) {
    let wordSplit = args[i].split('')
    wordSplit.forEach(function (letter) {
      arrayOfCharacters.push(letter)
    })
  }
  return arrayOfCharacters
}
