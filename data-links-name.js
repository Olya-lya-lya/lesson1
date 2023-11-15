"use strict";

let a = 5;
let b = a;

b = b + 5;
console.log(b);
console.log(a);


const obj = {
    a: 5,
    b: 1
};

const copy = obj; //ссылка

copy.a = 10;
console.log(copy);
console.log(obj);

function copy2(mainObj) {
    let objCopy = {};

    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy2(numbers);

newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers);