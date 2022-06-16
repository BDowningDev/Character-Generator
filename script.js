const lifeList = {
  time: ['modern', 'medieval', 'near future', 'distant future'],
  occupation: ['soldier', 'teacher', 'pilot', 'police officer', 'student', 'dentist', 'doctor', 'janitor'],
  age: ['kid', 'teen', 'adult', 'middle aged', 'old'],
  gender: ['male', 'female']
}
// random number for iterating between 0 and num
const randomChoice = num => Math.floor(Math.random() * num)
//console.log(randomChoice(12))

//empty array for newly generated character
let generatedCharacter = []

//iterate the object

for(let string in lifeList) {
  //listIndex is a random choice within the arrays
  let listIndex = randomChoice(lifeList[string].length)

  // add object properties to the original array to be displayed later
  switch(string) {
    case 'time':
      generatedCharacter.push(`The settings takes place in ${lifeList[string][listIndex]}`)
      break
    case 'occupation':
      generatedCharacter.push(`Your occupation is ${lifeList[string][listIndex]}`)
      break
    case 'age':
      generatedCharacter.push(`Your are a ${lifeList[string][listIndex]}`)
      break
    case 'gender':
      generatedCharacter.push(`You are ${lifeList[string][listIndex]}`)
      break
    default:
      generatedCharacter.push('Something went wrong please try again')
  }
}

