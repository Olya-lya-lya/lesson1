"use strict";

//To string

//1)
console.log(typeof(String(null))); //string

//2)
console.log(typeof(5 + '')); // string

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

//To number
console.log(typeof(Number('4'))); //number

console.log(typeof((+ '4')));

console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("Hello", "");

//To boolean

0, '', null, undefined, NaN; //false
//остальное true

// 1)
let switcher = null;

if (switcher) {
    console.log("Working...");
}

switcher = 1;

if (switcher) {
    console.log("Working...");
}

//2)
console.log(typeof(Boolean('4')));

//3)
console.log(typeof(!!'4')); // boolean
