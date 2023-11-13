console.log( NaN || 2 || undefined );
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( !1 && 2 || !3 );
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);



//новая проверка
//const hamburger = 3;
//const fries = 3;
//const cola = 0;
//const nuggets = 2;


//if (hamburger === 3 && cola || fries === 3 && nuggets) {
//   console.log('Done!')
//}

// новая проверка 
//let hamburger;
//const fries = NaN;
//const cola = 0;
//const nuggets = 2;


//if (hamburger || cola || fries === 3 || nuggets) {
//  console.log('Done!')
//}

//новая проверка
let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

// new program, циклы

//let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num < 55);

let num = 50;
for (let i = 1; i < 8; i++) {
    if (i === 6) {
        //break;
        continue;
    }
    console.log(i);
}

for (let i = 0; i < 3; i++) {
    console.log(i);
    for(let j = 0; j < 3; j++) {
        console.log(j); 
    }
}

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result+= '*';
    }

    result+= '\n';
}
console.log(result);