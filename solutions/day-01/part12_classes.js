console.log('-- Part 12: Classes --')

// ////////////////// //
// Exercises: Level 1 //
// ////////////////// //

console.log('- Exercises: Level 1 -')

// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
console.log('1. Animal class')
class Animal_p12 {
	constructor(name, age, color, legs) {
		this.name = name
		this.age = age
		this.color = color
		this.legs = legs
	}
	getInfo() {
		return `${this.name} is a ${this.age}-year-old ${this.color} animal with ${this.legs} legs`
	}
}
const animal_p12 = new Animal_p12('Uzi', 4, 'white', 4)
console.log(animal_p12)

// 2. Create a Dog and Cat child class from the Animal Class.
console.log('2. Dog and Cat children classes')
class Dog_p12 extends Animal_p12 {
	constructor(name, age, color, legs, breed) {
		super(name, age, color, legs)
		this.breed = breed
	}
	getInfo() {
		return `${this.name} is a ${this.age}-year-old ${this.color} ${this.breed} with ${this.legs} legs`
	}
}
class Cat_p12 extends Animal_p12 {
	constructor(name, age, color, legs, isIndoorCat) {
		super(name, age, color, legs)
		this.isIndoorCat = isIndoorCat
	}
	getInfo() {
		return `${this.name} is a ${this.isIndoorCat?'indoor':'outdoor'} ${this.age}-year-old ${this.color} cat with ${this.legs} legs`
	}
}
const dog_p12 = new Dog_p12('Uzi', 4, 'white', 4, "Yorkie")
console.log(dog_p12)
const cat_p12 = new Cat_p12('Rags', 8, 'orange', 4, true)
console.log(cat_p12)



// ////////////////// //
// Exercises: Level 2 //
// ////////////////// //

console.log('- Exercises: Level 2 -')

// Override the method you create in Animal class
console.log("Override methods in Animal class")
console.log(dog_p12.getInfo())
console.log(cat_p12.getInfo())



// ////////////////// //
// Exercises: Level 3 //
// ////////////////// //

console.log('- Exercises: Level 3 -')

// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) 
// and measure of variability(range, variance, standard deviation). In addition to those measures find the 
// min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics 
// and create all the functions which do statistical calculations as method for the Statistics class. Check the 
// output below.

// ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range()) // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

// you output should look like this
//console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]