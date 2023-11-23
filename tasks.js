//Создайте программу, которая находит сумму всех четных чисел в заданном диапазоне.

/*const a = 7;
const b = 20;
let sum = 0;

for (let i = a; i < b; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}
console.log(`Сумма чертных чисел в диапазоне от ${a} до ${b} равна ${sum}`);
*/

// Реализуйте функцию, которая проверяет, является ли заданное слово палиндромом (читается одинаково слева направо и справа налево).

/* const word = 'lol';
let isPalindrom = false;

function palindrom (str) {
    if (str.split('').reverse().join('') == str) {
        isPalindrom = true;
        console.log(`${str} является палиндромом`);
    } else {
        isPalindrom = false;
        console.log(`${str} не является палиндромом`);
    }

}
palindrom(word);
console.log(isPalindrom);
*/

//Напишите программу, которая отображает все простые числа в заданном диапазоне.

/* const b = 44;
let isPrime = true;

for (let i = 2; i < b; i++ ) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        } else {
            isPrime = true;
        }
    }
   if (isPrime) {
    console.log(i);
   } 
}
*/

// Создайте функцию, которая принимает на вход строку и возвращает количество гласных букв в ней.

const string = 'Хочу кушать';
 function counter (str) {
    let count = 0;
    let countList = 'аеёиоуэюя';
    let countListArr = countList.split();
    let strArr = str.split();
    for (let i = 0; i < strArr.length; i++) {
        if (countListArr.indexOf(strArr[i]) !== -1) {
            return count++;
        } else {
            console.log('Sosi zhopy');
        }
    }

 }
 counter(string);

 // Реализуйте программу, которая находит наиболее часто встречающийся элемент в числовом массиве.

/* const array = [1, 2, 4, 6, 7, 6, 6, 6];
let dublicate = [];
 for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++ ) {
        if (array[i] == array[j] && !dublicate.includes(array[i])) {
            dublicate.push(array[i]);
        }
    }
    }
console.log(dublicate);
*/
