const prompt = require('prompt')
prompt.start()

prompt.get(['myString'], function (err, result) {
  const charactersString = result.myString.trim().toLowerCase()
  console.log(scramble(concatMultipleStringsIntoArray(charactersString, 'hello world')))
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

const numGen = (letters) =>
  Math.floor(Math.random() * letters.length)

// takes as many strings as inputted
const concatMultipleStringsIntoArray = (...args) => {
  const newArray = [...args]
  return newArray.reduce(
    (previous, current) => {
      const splitted = current.split('')
      splitted.forEach((letter) => {
        previous.push(letter)
      })
      return previous
    }, [])
}
