//init

const lifeList = {
  time: ['modern', 'medieval', 'near future', 'distant future'],
  occupation: ['soldier', 'teacher', 'pilot', 'police officer', 'student', 'dentist', 'doctor', 'janitor'],
  age: ['kid', 'teen', 'adult', 'middle aged', 'old'],
  gender: ['male', 'female']
}

const randomChoice = num => Math.floor(Math.random() * num)

console.log(randomChoice(12))
  
