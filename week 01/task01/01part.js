"use strict";
//-----------------Data Types and Operators
// Cash flow ratio 

const cash = 1000;
const currentliabilities =500;
console.log(cash / currentliabilities);


// Net income 

const revenues = 1000;
const expenses =500;
console.log(revenues - expenses);

//Total assets 
const liabilities = 1000;
const equity =500;
console.log(revenues + expenses);

//Net income 
const profit = 1000;
const sales =500;
console.log(profit * expenses);



 //Average
const numbers  = [7,9,2];
console.log(numbers.reduce((acc, num) => acc + num, 0) / numbers.length);

//Discount
const price = 150;
const discount = 0.30;
console.log(price  - (price* discount));

//Age limit
const Age = 20;
console.log(Age>18 && Age<30);


//Exponential
const number1 = 2;
const number2 = 3;
console.log(Math.pow(number1, number2)); 


//Remainder
const number3 = 10;
const number4 =43;
console.log(number1 % number2); 

//---------------------Question 2----------------------
console.log(typeof(100)); // Output: "number"
console.log(typeof(73.9)); // Output: "number"
console.log(typeof(NaN)); // Output: "number"
console.log(typeof("Water")); // Output: "string"
console.log(typeof(false)); // Output: "boolean"
console.log(typeof(9 != 11)); // Output: "boolean"

console.log("Orang" + "e"); // Output: "Orange"
console.log("Orange" - "s"); // Output: NaN
console.log("4" + "8"); // Output: "48"
console.log("4" - "8"); // Output: -4
console.log("name" + 3); // Output: "name3"
console.log("name" - 3); // Output: NaN
console.log(82 * "word"); // Output: NaN
console.log(1 + "hello"); // Output: "1hello"
console.log("hello" + 1); // Output: "hello1"
console.log(1 + true); // Output: 2
console.log("hello" + true); // Output: "hellotrue"
console.log(typeof(Infinity)); // Output: "number"
console.log(1 == '1'); // Output: true
console.log(1 === '1'); // Output: false
  

//---------------------Strings----------------------
//A
const str="hello orange";
console.log(str.toUpperCase());

const str1="Hello Orange";
console.log(str1);

const str2="HELLO ORANGE";
console.log(str.toLowerCase());

const str3="Hello “ Orange  “";
console.log(str3);

const str4="Hello Orange";
console.log(str4);

//B
const strr = "cactus";
const Char = strr.charAt(2);

console.log( strr.split(Char).join('*').replace('*', Char));

//--------------------Arrays                                       ---------------------

//A
let arr = ["Coding", "Academy", "By", "Orange"];
arr.push("Jordan");
console.log(arr); 

let arr2 = arr.slice(0, 2);
console.log(arr2);

let arr3 = ["Welcome", "To"].concat(arr);
console.log(arr3);

let strb= arr.join(" ");
console.log(strb); 

console.log(arr[2]);

//B
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
vegetables.pop();
console.log(vegetables);

vegetables.shift();
console.log(vegetables);

var index = vegetables.indexOf("pepper");
console.log(index);


vegetables.push(index);
console.log(vegetables);

var vegetables = ["carrot", "tomato", "pepper"];

vegetables.push(index);
console.log(vegetables);

var food = vegetables.concat(vegetables);
console.log(food);


food.splice(4, 2);
console.log(food);

food.reverse();
console.log(food);

var foodString = food.join(" ");
console.log(foodString);
//--------------------Question 5----------------------function checkEligibility(yearOfBirth) {
// 1  
function checkEligibility(yearOfBirth) {    
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearOfBirth;

    if (age > 60) {
        console.log("You may join the seniors’ program.");
    } else if (age > 30) {
        console.log("You are not eligible. You may join other programs.");
    } else if (age >= 18) {
        console.log("You are eligible. Start your application.");
    } else {
        console.log("You may join the kids' program.");
    }
}

checkEligibility(1990);
checkEligibility(2005);
checkEligibility(1950);
checkEligibility(1980); 

//2
function switchCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}
const input = "OrAnGe";
const output = switchCase(input);
console.log(output);

//3
function toCamelCase(str) {
    return str
        .split(' ') 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // تحويل الحرف الأول من كل كلمة إلى حرف كبير وبقية الأحرف إلى حروف صغيرة
        .join(''); 
}


const inp = "Coding Academy by Orange";
const outp = toCamelCase(inp);
console.log(outp); 

//4
function removeElement(arr, element) {
    return arr.filter(item => item !== element);
}

const inputArray = ["Coding", "Academy", "By", "Orange"];
const elementToRemove = "By";
const result = removeElement(inputArray, elementToRemove);
console.log(result); 


//5
function isOddOrEven(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

console.log(isOddOrEven(4)); 
console.log(isOddOrEven(7)); 


//6 
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}


console.log(isNumber(123));
console.log(isNumber("123"));
console.log(isNumber(NaN)); 


//7
function findLargestNumber(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(findLargestNumber(10, 20)); 
console.log(findLargestNumber(30, 15)); 
  
//8
function checkTriangleType(a, b, c) {
    if (a === b && b === c) {
        return "Equilateral";
    } else if (a === b || b === c || a === c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}

console.log(checkTriangleType(3, 3, 3)); 
console.log(checkTriangleType(3, 3, 4));
console.log(checkTriangleType(3, 4, 5)); 


//9
function isIng(num,min ,max) {
    return num >= min && num <= max;
}
console.log(isIng(10, 5, 15)); 
console.log(isIng(20, 5, 15));

//10
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2020)); 
console.log(isLeapYear(2021)); 

//--------------------Loops----------------------
//1
let resul = '';
for(let i = 0; i < 50; i++) {
    if (i % 2 === 0) {
        resul += + i + ' ';
    
    }
     }  
 console.log(resul.trim());
    
 //2
 let resut = '';
 let j = 0;
 while (j <= 50) {
     if (j % 2 !== 0) {
         resut += j + ' ';
     }
     j++;
 }
 console.log(resut.trim());

 //3
 let esult = '';
 for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        esult += "FizzBuzz, " ;
    } else if (i % 3 === 0) {
        esult += "Fizz, " ;
    
    } else if (i % 5 === 0) {
        esult += 'Buzz, ';
        } else {
            esult += i + ', ';  
          }
}
 console.log(esult.trim().slice(0, -2));
 //4
 function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else {
        return number;
    }
}

//6
function burgerBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "BurgerBuzz";
    } else if (num % 3 === 0) {
        return "Burger";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return num;
    }
}

console.log(burgerBuzz(1));  
console.log(burgerBuzz(15)); 
console.log(burgerBuzz(9));  
console.log(burgerBuzz(10));
 //7 Try it
 function convertToBanknotes(amount, banknotes) {
    let resultmon = [];
    for (let i = 0; i < banknotes.length; i++) {
        while (amount >= banknotes[i]) {
            amount -= banknotes[i];
            resultmon.push(banknotes[i]);
        }
    }
    return resultmon;
}


console.log(convertToBanknotes(57, [25, 10, 5, 1]));

//8
function countCharacter(str, char) {
    let count = 0;
    let lowerStr = str.toLowerCase();
    let lowerChar = char.toLowerCase();
    for (let i = 0; i < lowerStr.length; i++) {
        if (lowerStr[i] === lowerChar) {
            count++;
        }
    }
    return count;
}

console.log(countCharacter("Coding Academy by Orange", "o")); // Output: 2

//9
// a
let resultA = '';
for (let i = 0; i <= 20; i++) {
    resultA += i + ' ';
}
console.log(resultA.trim());

// b
let resultB = '';
for (let i = 3; i <= 29; i++) {
    if (i % 2 !== 0) {
        resultB += i + ' ';
    }
}
console.log(resultB.trim());
//c
let resultC = '';
for (let i = 12; i >= -14; i -= 2) {
    resultC += i + ' ';
}
console.log(resultC.trim());

// d
let resultD = '';
for (let i = 50; i >= 20; i--) {
    if (i % 3 === 0) {
        resultD += i + ' ';
    }
}
console.log(resultD.trim());

//10
let myString = 'CodingAcademy';
let myArray = [7, 500, 'KH404', 'black', 36];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
for (let i = myString.length - 1; i >= 0; i--) {
    console.log(myString[i]);
}

//11
let numberss = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
let evens = [];
let odds = [];

for (let i = 0; i < numberss.length; i++) {
    if (numberss[i] % 2 === 0) {
        evens.push(numberss[i]);
    } else {
        odds.push(numberss[i]);
    }
}

console.log("Even numbers:", evens);
console.log("Odd numbers:", odds);

//12
let proteinOptions = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grainOptions = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetableOptions = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverageOptions = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessertOptions = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];
function createMeals(numMeals) {
    let meals = [];
    let usedCombinations = new Set();

    while (meals.length < numMeals) {
        let protein = proteinOptions[Math.floor(Math.random() * proteinOptions.length)];
        let grain = grainOptions[Math.floor(Math.random() * grainOptions.length)];
        let vegetable = vegetableOptions[Math.floor(Math.random() * vegetableOptions.length)];
        let beverage = beverageOptions[Math.floor(Math.random() * beverageOptions.length)];
        let dessert = dessertOptions[Math.floor(Math.random() * dessertOptions.length)];

        let meal = `${protein}, ${grain}, ${vegetable}, ${beverage}, ${dessert}`;

        if (!usedCombinations.has(meal)) {
            meals.push(meal);
            usedCombinations.add(meal);
        }
    }

    return meals;
}

let numberOfMeals = 5;
console.log(createMeals(numberOfMeals));

//--------------Objects--------------
//1
function getObjectProperties(obj) {
    return Object.keys(obj);
}
let exampleObject = {
    name: 'John',
    age: 30,
    city: 'New York'
};

console.log(getObjectProperties(exampleObject)); 

//2
function getNumberOfProperties(obj) {
    return Object.keys(obj).length;
}

let exampleObject1 = {
    name: 'John',
    age: 30,
    city: 'New York'
};

console.log(getNumberOfProperties(exampleObject1)); 

//3
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

let object1 = {
    name: 'John',
    age: 30
};

let object2 = {
    city: 'New York',
    country: 'USA'
};

let mergedObject = mergeObjects(object1, object2);
console.log(mergedObject);

//4
function convertPropertiesToUppercase(obj) {
    let newObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key].toString().toUpperCase();
        }
    }
    return newObj;
}

let exampleObject2 = {
    name: 'John',
    age: 30,
    city: 'New York'
};

let uppercasedObject = convertPropertiesToUppercase(exampleObject2);
console.log(uppercasedObject);

//5
function filterNonNullProperties(obj) {
    let newObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] !== null) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

let exampleObject3 = {
    name: 'John',
    age: 30,
    city: null,
    country: 'USA'
};

let filteredObject = filterNonNullProperties(exampleObject3);
console.log(filteredObject); 

//6
function getSortedPropertyNames(obj) {
    return Object.keys(obj).sort();
}

let exampleObject4 = {
    name: 'John',
    age: 30,
    city: 'New York'
};

console.log(getSortedPropertyNames(exampleObject4));