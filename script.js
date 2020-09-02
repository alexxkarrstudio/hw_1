"use strict";

const numberOfFilms = +prompt('How many movies did you watch?', '');
 
const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

 const a = prompt('Last movie?', ''),
     b = +prompt('Your score', ''),
     c = prompt('Last movie?', ''),
     d = +prompt('Your score?', '');


        //  Teper nam nuzhno obratitsya k nashej baze dannyh--personalMovieDB i konkretno k 'movies'

     personalMovieDB.movies[a] = b; /* v [] my pomeshyaem otvet na vopros peremennoj 'a', stavim = i zdes vyvedestsya otvet na vopros 'b'*/
     personalMovieDB.movies[c] = d; /* pishem put',kuda polozhit otvet: snchala const,a v nej {movies} */
     
     console.log(personalMovieDB);

    