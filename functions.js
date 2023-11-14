"use strict"
//Функции
// function declaration
function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage("Hello World");

function calc(a, b) {
    return (a + b);
}

console.log(calc(3, 6));
console.log(calc(11, 6));
console.log(calc(3, 4));
console.log(calc(2, 5));

function ret() {
    let num = 50;

    //

    return num;
}


const anotherNum = ret();
console.log(anotherNum);


// function expression
const logger = function () {
    console.log("Hello!")
};

logger();


// =>
const calc = (a, b) => a + b;
const calc2 = (a, b) => {
    return a + b
};

// аргументы функций
const usdCurse = 28;
const eurCurse = 32;
const discount = 0.9;

function convert (amount, curr) {
    console.log(curr * amount);
    return curr * amount;
}

convert(5000, usdCurse);
convert(5000, eurCurse);

function promotion (result) {
    console.log(result * discount);
}

promotion(convert(500, usdCurse));