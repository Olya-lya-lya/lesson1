"use strict"

const text = "test";

console.log(text.length);

console.log(text.toUpperCase());
console.log(text.toLocaleLowerCase());
console.log(text);


const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("q"));

const logg = "Hello world";

console.log(logg.slice(6, 11));
console.log(logg.slice(6));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));

const example = "test   ";
console.log(example.trim());




