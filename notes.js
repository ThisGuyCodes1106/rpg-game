//CONSTRUCTOR FUNCTION EXAMPLE

const hotel1 = {
	name: 'Safari View',
	rooms: 30,
	stars: '⭐⭐⭐⭐⭐',
	costPerNightAdult: 240,
}

const hotel2 = {
	name: 'Leopard Mansion',
	rooms: 96,
	stars: '⭐⭐⭐',
	costPerNightAdult: 120,
}
/*
Challenge:
1. Create a constructor function called NationalParkHotels.
2. Have it take in "data" as a parameter
3. Assign the data to "this"
4. Log out the result of creating an instance of 
   NationalParkHotels for each hotel.
*/

function NationalParkHotels(data) {
  this.name = data.name 
	this.rooms = data.rooms
	this.stars = data.stars
	this.costPerNightAdult = data.costPerNightAdult
}

const safariView = new NationalParkHotels(hotel1)
const leopardMansion = new NationalParkHotels(hotel2)

console.log(leopardMansion)
///////////////////////////////////////////////////////////////////

//METHODS ON CONSTRUCTOR FUNCTIONS
const animalForRelease1 = {
	name: 'Tilly',
	species: 'tiger',
	weightKg: 56,
	age: 2,
	dateOfRelease: '03-02-2022'
}
const animalForRelease2 = {
	name: 'Nelly',
	species: 'elephant',
	weightKg: 320,
	age: 16,
	dateOfRelease: '03-02-2022'
}

function Animal(data){
	this.name = data.name
	this.species = data.species
	this.weightKg = data.weightKg
	this.age = data.age
	this.dateOfRelease = data.dateOfRelease
  this.summariseAnimal = function(){
	console.log(`${this.name} is a ${this.age} year old 
	${this.species} which weighs ${this.weightKg}kg and was 
	released into the wild on ${this.dateOfRelease}`)
}
}

const tillyTheTiger = new Animal(animalForRelease1)
const nellyTheElephant = new Animal(animalForRelease2)

tillyTheTiger.summariseAnimal()
nellyTheElephant.summariseAnimal()
///////////////////////////////////////////////////////////////////

//OBJECT . ASSIGN
const studentDetails = {
	firstName: 'janaka',
	lastName: 'siriwardena',
	age: 28,
	country: 'sri lanka',
	email: 'j.siri@totalinternet.com',
	discordUsername: 'JS1',
}

function Student(data) {
	Object.assign(this, data)
	this.summariseStudent = function () {
			console.log(`${this.firstName} ${this.lastName} is ${this.age} years old 
			and comes from ${this.country}. Their email is ${this.email} and you can find them on discord as ${this.discordUsername}`)
	}
}

const newStudent = new Student(studentDetails)
newStudent.summariseStudent()

///////////////////////////////////////////////////////////////////
//ARRAY.REDUCE METHOD
const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73]

const totalGrades = grades.reduce(function(total, current) {
    return total + current
})

const averageGrade = totalGrades / grades.length

console.log(`The class average is ${averageGrade}`)

///////////////////////////////////////////////////////////////////
//TERNARY OPERATOR
const playerGuess = 8
const correctAnswer = 6

const message = playerGuess < correctAnswer ? 'Too low!' 
    : playerGuess > correctAnswer ? 'Too high!' 
    : 'Exactly right!'

console.log(message)
///////////////////////////////////////////////////////////////////
//ARROW FUNCTION
// 1 parameter then no brackets needed
// 0 or 2 or more params then do need the brackets
// 1 line of code - no curly braces needed
const speedWarning = speed => `You are going at ${speed} mph!`
console.log(speedWarning(40))

//multiple params
const speedWarning = (speedLimit, driverSpeed) => {
	if (driverSpeed > speedLimit) {
			return `You are going at ${driverSpeed} mph!`
		 }
	}
console.log(speedWarning(30, 40))

///////////////////////////////////////////////////////////////////
//Using .map with arrow function
const distanceTraveledMiles = [267, 345, 234, 190, 299]

const distanceTraveledKm = distanceTraveledMiles.map( distance => Math.round(distance * 1.6 ))

console.log(distanceTraveledKm)
///////////////////////////////////////////////////////////////////
//setTimeout()
const question = 'What is the capital of Peru?'
const answer = 'Lima!'

console.log(question)

setTimeout(()=> console.log(answer), 3000)
setTimeout(function(){
  console.log(answer)  
}, 3000)
///////////////////////////////////////////////////////////////////