// creates an array with given values and console logs it in the console
ages = [3, 9, 23, 64, 2, 8 , 28, 93]
console.log("Ages:", ages);
//created a new variable and made it subtract the first element from thr last value in thr array
let subtractAge = ages[ages.length - 1] -ages[0];
console.log("subtractAge:", subtractAge);
//adding a new age to the array and testing to make sure it still works
ages.push(99)
console.log("Ages after adding age:", ages);
let subtractAge1 = ages[ages.length - 1] -ages[0];
console.log("subtractAge:", subtractAge1);
//using a loop to calculate average age
let sumAges = 0;

for(let i = 0; i  < ages.length; i++){
    console.log("Total after each loop")
sumAges += ages[i];
console.log("index:", i, "sumAges:", sumAges);
}
let average = sumAges / ages.length;
console.log("Average age:", average);

//adding names array and using a loop to calculate the average number of letters
names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]

let nameLength = 0;

for(let i = 0; i < names.length; i++){
    console.log("Total after each loop");
nameLength += names[i].length;
console.log("index", i, "name:", names[i], "Sum of names lengths:", nameLength);
}
let averageNameLength = nameLength / names.length
console.log("Average name length:", averageNameLength);

//another loop to concatenate names
let conNames = "";

for(let i = 0; i < names.length; i++){
    conNames = conNames.concat(names[i] + " ");
    console.log("Concatenated Names:", conNames);
}

//how to access the last element of array? length of array - 1 because they start at index 0
console.log(ages[ages.length - 1]);

//How do you access the first element of any array? just console log the array at the 0 index
console.log(ages[0]);

//Create a new array called nameLengths. Write a loop to iterate over the previously created names array
//add the length of each name to the nameLengths array.

let nameLengths = [];

for(let i = 0; i < names.length; i++){
nameLengths.push(names[i].length)
console.log("length of names:", nameLengths);
}

//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let totalChar = 0;
for(let i = 0; i < nameLengths.length; i++){
    totalChar += nameLengths[i];
    console.log("Total Characters:", totalChar);
}

//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to 
//itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function concatWord(word, n){
console.log("Word:", word, "Number:", n);
let concat = word.repeat(n);
console.log(concat);
}
concatWord("Hello", 3);

//Write a function that takes two parameters, firstName and lastName, and returns a full name. 
//The full name should be the first and the last name separated by a space.

function fullName(firstName, lastName){
    let fullName = firstName + " " + lastName
    console.log(fullName);
}
fullName("Derek", "Freeman");

//Write a function that takes an array of numbers and returns true if
// the sum of all the numbers in the array is greater than 100.

let numbers1 = [1, 5, 8, 20, 75]
let numbers2 = [1, 5, 6, 7, 8]

function bigger100(array){
    let total = 0;

    for(let i = 0; i < array.length; i++){
        total += array[i]
        console.log("Total:", total);
    }

if (total > 100){
    console.log (true)
    return true
} else {
    console.log(false);
    return false
}
    }
//tested both if else statements
bigger100(numbers1);

bigger100(numbers2);

//Write a function that takes an array of numbers and returns the average of all the elements in the array.

function averageOfNumbers(array){
    let total = 0;

    for(let i = 0; i < array.length; i++){
        total += array[i];
        console.log("Average of number, total:", total)
    }

    let average = total / array.length
    console.log("Average of numbers:", average);
}
averageOfNumbers(numbers1);

//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first 
//array is greater than the average of the elements in the second array.

function arrayOneGreater(array1, array2){
    let total1 = 0;
    let total2 = 0;
for (const number of array1){
    total1 += number
    console.log("The current number is:", number, "Total1:", total1);
}
for (const number of array2){
    total2 += number
    console.log("The current number is:", number, "Total2:", total2);
}
let average1 = total1 / array1.length
let average2 = total2 / array2.length
console.log("Averages:", average1, "&", average2);

if(average1 > average2){
    console.log(true);
    return true
} else if(average1 < average2){
    console.log(false);
    return false
} else {
    console.log("The numbers are equal.")
}
}
arrayOneGreater(numbers1,numbers2);

//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
//and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket){
    console.log("paramaters:", isHotOutside, moneyInPocket);
    let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
    console.log("Buy drink?", buyDrink);
    return buyDrink;
}
willBuyDrink(true, 11)

//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// This function takes an array and returns 100 each time you received a perfect grade

function showPerfectGrades(grades) {
    return grades.filter(grade => grade === 100);
}


const grades = [100, 99, 100, 60, 76];
const perfectGrades = showPerfectGrades(grades);
console.log(perfectGrades);