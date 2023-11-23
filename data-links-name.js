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

const copy = obj; //не значения объекта , а ссылка!!!

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

//const newNumbers = copy2(numbers);

//newNumbers.a = 10;
//console.log(newNumbers);
//console.log(numbers);


const add = {
    d: 17,
    e: 20
};

//console.log(Object.assign(numbers, add));
const clone = Object.assign({}, add);

clone.d = 20;

//console.log(add);
//console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // позволяет скопировать массив 

newArray[1] = 'hihihih';
console.log(oldArray);
console.log(newArray);

//оператор разворота spread

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

console.log(...num);


const array = ['a', 'b'];

const newarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};