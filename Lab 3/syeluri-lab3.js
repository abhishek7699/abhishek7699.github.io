// Sai Abhishek
// ITMD 541-01 Graduate Student

// Exercise 1 - minMaxAverage
function minMaxAverage(arr) {
    let total = arr.length;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let avg = arr.reduce((sum, num) => sum + num, 0) / total;
    console.log(`Total Numbers: ${total}, Min Value: ${min}, Max Value: ${max}, Average: ${avg.toFixed(2)}`);
}

// Test Cases for exercise one
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);
minMaxAverage([10, 13, 2, 9, 51, 60]);

// Exercise 2 - countVowels
function countVowels(str) {
    let vowels = str.match(/[aeiou]/gi);
    let count = vowels ? vowels.length : 0;
    console.log(`${str}: ${count} vowels`);
}

// Test Cases for exercise 2
countVowels("Winter");
countVowels("is");
countVowels("Coming");

// Exercise 3 - sortNumbers
function sortNumbers(arr) {
    let sortedArr = [...arr].sort((a, b) => a - b);
    console.log(`Original Array: [${arr}]  Output Sorted Array: [${sortedArr}]`);
}

// Test Cases for exercise 3
sortNumbers([9, 4, 6, 2]);
sortNumbers([10, 1, 13, 8, 5]);
sortNumbers([100, 50, 25, 75, 17]);

// Exercise 4 - celsiusToFahrenheit
function celsiusToFahrenheit(celsius) {
    let celsiusNum = parseFloat(celsius); 
    let fahrenheit = (celsiusNum * 9/5) + 32;
    console.log(`${celsiusNum.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
}

// Test Cases test cases for exercise 4
celsiusToFahrenheit(30);
celsiusToFahrenheit(0);
celsiusToFahrenheit(100);
//Graduate requirement String Test cases
celsiusToFahrenheit("42"); 
celsiusToFahrenheit("54"); 

// Exercise 5 - Sort people object (Graduate requirement)
function sortPeople(peopleArray) {
    let sortedPeople = peopleArray.sort((a, b) => a.age - b.age);
    let introductions = sortedPeople.map(person => `${person.name} is ${person.age} and from ${person.city}`);
    console.log(introductions);
}

// Test Cases for exercise 5
let people0 = [
    { name: 'raj', age: 25, city: 'New York' },
    { name: 'Keshav', age: 22, city: 'Chicago' },
    { name: 'samayi', age: 30, city: 'Los Angeles' },
    { name: 'bonney', age: 27, city: 'Miami' },
    { name: 'suheel', age: 20, city: 'San Francisco' }
];

let peopleTest1 = [
    { name: 'roa', age: 35, city: 'Houston' },
    { name: 'Krishana', age: 28, city: 'Boston' },
    { name: 'satyarthi', age: 40, city: 'Seattle' },
    { name: 'lokesh', age: 22, city: 'Austin' },
    { name: 'teja', age: 30, city: 'Denver' }
];
let peopleTest2 = [
    { name: 'sasi', age: 45, city: 'San Diego' },
    { name: 'Karthik', age: 32, city: 'Portland' },
    { name: 'Mrudula', age: 27, city: 'Atlanta' },
    { name: 'sreeja', age: 50, city: 'Las Vegas' },
    { name: 'ananth', age: 37, city: 'Dallas' }
];
sortPeople(people0);
sortPeople(peopleTest1);
sortPeople(peopleTest2);
