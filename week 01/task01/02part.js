
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