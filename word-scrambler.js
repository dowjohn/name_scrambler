'use strict'
const prompt = require('prompt')
prompt.start()

const scramble = (arrayOfLetters) => {
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

const concatMultipleStringsIntoArray = (...args) => {
  return [...args].reduce(
    (previous, current) => {
      const splitted = current.split('')
      splitted.forEach((letter) => {
        previous.push(letter)
      })
      return previous
    }, [])
  // const concat = (a, b) => [...a, ...b]
  // return newArray.reduce((concat, []))
}

const promptForInput = (callback) => {
  prompt.get(['myString'], function (err, result) {
    if (err !== null) {
      console.log(err)
    } else {
      console.log(callback(concatMultipleStringsIntoArray(result.myString.trim())))
    }
  })
}

promptForInput(scramble)
