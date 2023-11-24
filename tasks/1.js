// Найти сумму всех четных чисел в массиве.

//const arr = [1, 4, 7, 9, 10, 12, 18];
//let sum = 0;

//for (i = 0; i < arr.length; i++) {
//    if (arr[i] % 2 == 0) {
//        sum +=arr[i];
//    }
//}
//console.log(`Сумма четных чисел в массиве равна ${sum}`);

// Посчитать количество положительных чисел в массиве.

//const arr = [1, 5, 6, 7, -1, -5];
//let counter = 0;

//for (i = 0; i < arr.length; i++) {
//    if (arr[i] > 0) {
//        counter++;
//    }
//}
//console.log(`Количество четных чисел в массиве: ${counter}`);

//Найти наименьшее число в массиве.

/*const arr = [2, 19, 1, 6, -1, 9];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
    if(arr[i] < min){
        min = arr[i];
    }
}
console.log(`Наименьшее число в массиве: ${min}`);
*/

//Отсортировать массив по возрастанию.

/*const arr = [1, 4, 7, 8, 5, 11, 12];
let sort = arr.sort((a, b) => a - b);
console.log(`Отсортированный массив по возрастанию ${sort}`);
*/

//Проверить, содержит ли массив заданное число.

/*const number = 5;
const arr = [1, 3, 5, 8, 10];
const isContains = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == number) {
        isContains == true;
}

}
if (!isContains){
    console.log("Массив содержит заданное число");
} else {
    console.log("Массив не содержит заданное число");
}
*/

//Вычислить факториал числа.
/*let number = 7;
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log(`Факториал числа ${number} равен ${factorial}`);
*/

//Посчитать сумму чисел от 1 до N.

/*let sum = 0;
let n = 10;

for (let i = 1; i < n; i++) {
    sum += i;
}
console.log(`сумма чисел от 1 до n - ${sum}`);
*/

// Найти среднее арифметическое чисел в массиве.

/* let sum = 0;
const arr = [1, 4, 5, 7, 9, 12];
let length = arr.length;

for (let i = 0; i < arr.length; i++) {
    sum +=arr[i];
}

let sr = sum / length;

console.log(`Среднее арифмитическое чисел в массиве - ${sr}`);
*/

//Проверить, является ли число простым.

/* const number = 15;
let isPrime = true;
for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log("Является простым числом");
} else {
    console.log("Не является простым числом");
}
*/

//Поменять местами значения двух переменных

/*let a = 6;
let b = 7;

let temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);
*/

//Напишите программу, которая выводит все числа от 1 до 100. 
//При этом, если число делится на 3 без остатка, вместо числа выведите "Fizz", если делится на 5 - выведите "Buzz", 
//а если делится на 3 и 5 одновременно - выведите "FizzBuzz".

/* for (let i = 1; i < 100; i++) {
    if ((i % 3 == 0 ) && (i % 5 == 0)) {
        console.log("FizzBuzz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}
*/

//Создайте программу, которая находит сумму всех элементов числового массива.

/* let sum = 0;
const arr = [1, 2, 5, 7, 8];

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(`Сумма элементов массива - ${sum}`);
*/

//Напишите функцию, которая принимает на вход строку и возвращает перевернутую версию этой строки. Например, "hello" должно стать "olleh".

/*let str = 'hello';

function reverseStr (string) {
   return string.split("").reverse().join("");
}

console.log(reverseStr(str));
*/

// Реализуйте функцию, которая принимает на вход массив чисел и возвращает новый массив, содержащий только четные числа.

/* const oldArr = [1, 4, 7, 8, 4, 10];
const newArr = [];

for (let i = 0; i < oldArr.length; i++) {
    if (oldArr[i] % 2 == 0) {
        newArr.push(oldArr[i]);
    }
}
console.log(newArr);
*/

// Создайте программу, которая проверяет, является ли введенное пользователем число простым (делится только на 1 и само себя).

/* const num = 17;
let isPrime = true;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime);
*/

//Напишите программу, которая находит сумму всех чисел в диапазоне от a до b, где a и b - целые числа (b >= a

/* const a = 7;
const b = 20;
let sum = 0;

for (let i = a; i < b; i++) {
    sum += i;
}

console.log(`Сумма чисел от ${a} до ${b} равна ${sum}`);
*/
 
// Реализуйте функцию, которая принимает на вход два массива чисел одинаковой длины и возвращает новый массив, содержащий сумму элементов с одинаковыми индексами.

/* const arr1 = [1, 4, 7, 8];
const arr2 = [2, 5, 7, 8];
const newArr = [];

function newArray(firstArr, secondArr) {
    for (let i = 0; i < 4; i++) {
        newArr[i] = firstArr[i] + secondArr[i];
    }
    return newArr;
}

console.log(newArray(arr1, arr2));
*/

//Создайте программу, которая находит максимальный и минимальный элементы в числовом массиве и выводит их на экран.

/* const arr = [1, 4, 6, 12, 7, 8];
let min = arr[0];
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(`Минимальный элемент в массиве: ${min}`);
console.log(`Максимальный элемент в массиве: ${max}`);
*/


