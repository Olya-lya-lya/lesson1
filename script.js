"use strict"

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




function rememberFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", "");
        const b = prompt("На сколько его оцените?", "");
    
    
        if (a != null && b != null && a !='' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done")
        } else {
            i--;
            console.log('error')
        }
        }
}

rememberFilms();




function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();


function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenre () {
    for (let i = 1; i < 4; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`,""); 
        personalMovieDB.genres[i - 1] = genre;
        // personalMovieDB.genres[i - 1] = const genre = prompt(`Ваш любимый жанр под номером ${i}`,""); 
    }
}

writeYourGenre();

// while

//i = 0;
// (i < 2) {
//   i++;
//    const a = prompt("Один из последних просмотренных фильмов?", "");
//    const b = prompt("На сколько его оцените?", "");


//    if (a != null && b != null && a !='' && b !='' && a.length < 50) {
//        personalMovieDB.movies[a] = b;
//       console.log("done")
//    } else {
//       i--;
//     console.log('error')
//   }
//}

// do while
//i = 0;
//do {
//    i++;
//    const a = prompt("Один из последних просмотренных фильмов?", "");
//    const b = prompt("На сколько его оцените?", "");


//    if (a != null && b != null && a !='' && b !='' && a.length < 50) {
//        personalMovieDB.movies[a] = b;
//       console.log("done")
//    } else {
//       i--;
//        console.log('error')
//   }
//} 
//while (i < 2)

console.log(personalMovieDB);
