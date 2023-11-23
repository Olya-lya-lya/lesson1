"use strict";

let str = 'some';
let  strObj = new String(str); // объект

console.log(typeof(str));

console.log(typeof(strObj));

console.dir([1, 2 ,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("hello!");
    }
};


const john = Object.create(soldier);
//const john = {
//    health: 100
//};

//john.__proto__ = soldier; //устаревшая версия, не использовать!

Object.setPrototypeOf(john, soldier);

//console.log(john.armor);
john.sayHello();