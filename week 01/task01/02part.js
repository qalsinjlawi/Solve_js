
"use strict";

//1
let numbers = [1, 2, 3, 4, 5];

let result = '';
numbers.forEach(function(element) {
    result += element + ' ';
});

console.log(result.trim());

//2
let number = [1, 2, 3, 4, 5];

let squaredNumbers = number.map(function(element) {
    return element * element;
});

console.log(squaredNumbers.join(' '));

//3
let evenNumbers = numbers.filter(function(element) {
    return element % 2 === 0;
});

console.log(evenNumbers);

//4

let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum);

//5
let fruits = ["apple", "banana", "cherry"];

let reversedFruits = fruits.reverse();

console.log(reversedFruits);


let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let combinedArray = array1.concat(array2);

console.log(combinedArray); 

//7
let numberss = [1, 2, 3, 4, 5, 6];

let slicedArray = numberss.slice(2, 4);

console.log(slicedArray);

//8
let numbes = [1, 2, 3, 4, 5];

let removedElements = numbes.splice(2, 1);

console.log(removedElements); 
console.log

//9
let numbs = [1, 2, 3, 4, 5];

let index = numbs.indexOf(3);

console.log(index);

//10
let nums = [1, 2, 3, 4, 5];

let joinedString = nums.join(',');

console.log(joinedString);

//11
let string = "1,2,3,4,5";

let array = string.split(',');

console.log(array);