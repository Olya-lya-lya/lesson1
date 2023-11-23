"use strict"


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }  
    },
    rememberFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", "").trim();
            const b = prompt("На сколько его оцените?", "").trim();
        
        
            if (a != null && b != null && a !='' && b !='' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("done")
            } else {
                i--;
                console.log('error')
            }
            }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenre: function() {
        for (let i = 1; i < 4; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`,""); 
            if (genre === '' || genre == null) {
                console.log('error');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
            // personalMovieDB.genres[i - 1] = const genre = prompt(`Ваш любимый жанр под номером ${i}`,""); 

            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i+1} - это ${item}`);
            });
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat == false;
        } else {
            personalMovieDB.privat == true;
        }
},

};

personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();



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
