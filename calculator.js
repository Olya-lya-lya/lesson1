"use strict";

let square,
    perimeter,
    side;

side = prompt(+"Введите сторону квадрата, см", "");

perimeter = side * 4;

square = side * side;
console.log(`Периметр квадрата ${perimeter}`);
console.log(`Площадь квадрата ${square}`);

const str = prompt(+"Введите сторону", "");
function perimeter (side) {
    return side * 4;
}

function square (side) {
    return Math.pow(side, 2);
}

console.log(square(str));
console.log(perimeter(str));
    