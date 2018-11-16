//
// const main = async () => {
//     const httpResponse = await fetch(`${ API_URL }/trending/movie/week?api_key=${ API_KEY }`);
//     const jsonContent = await httpResponse.json();
//
//     const bodyElem = document.querySelector('body');
//
//     if (jsonContent.results) {
//         console.log(jsonContent.results);
//         bodyElem.innerHTML = `<h1 class="succes">Ça fonctionne!</h1>`;
//     } else {
//         bodyElem.innerHTML = `<h1 class="echec">Ça ne fonctionne pas...</h1>`;
//     }
// };
//
// document.addEventListener('DOMContentLoaded', main);

"use strict";
//IMPORT

//CONSTANTES
const api = {
    key: "ef39282f7c14259b9b3517f461b88510",
    url: 'https://api.themoviedb.org/3',
    imgUrl: 'https://image.tmdb.org/t/p/w200'
};
const url = {
    TRENDING_FILM: `${api.url}/trending/move/week?api_key=${api.key}`,
    SEARCH_FILM: `${api.url}/search/movie?api_key=${api.key}`,
    DETAILS_FILM: `${api.url}/movie/movieId?api_key=${api.key}`,
    REVIEW_FILM: `${api.url}/movie/movieId/reviews?api_key=${api.key}`
};

//CLASS
class Film {
    constructor(id, title, voteAvg, popularity, voteCount, poster, overview) {
        this.id = id;
        this.title = title;
        this.voteAvg = voteAvg;
        this.popularity = popularity;
        this.voteCount = voteCount;
        this.poster = `${api.imgUrl}${poster}`;
        this.overview = overview;
    }
}

//FUNCTIONS
const addItemHtmlDoc = (attribute, item) => document.querySelector(attribute).innerHTML = item;
const creationListeFilms = trending => {
    const films = [];
    trending.results.forEach(
        f => films.push(
            new Film(
                f.id,
                f.title,
                f.vote_average * 10,
                Math.round(f.popularity),
                f.vote_count,
                f.poster_path,
                f.overview
            )
        )
    );
    return films;
};
const affichageListFilms = films => {
    let liste = '';
    films.forEach(f => {
        liste = liste.concat(
            `<li class="film">${f.title}<br>${f.voteAvg}% ${f.popularity} ${f.voteCount}</li></>`);
    });
    addItemHtmlDoc('main',
        `<h1>Rotten Potatoes</h1><input type="text" placeholder="Search..."><ul>${liste}</ul>`);
};
const affichageDetailFilm = films => {
    let liste = '';
    films.forEach(f => {
        liste = liste.concat(
            `<p>
                <img src=${f.poster}>
                <h1>${f.title}</h1>
                <hr>
                Potatometer
                ${f.voteAvg}%
                Popularity
                ${f.popularity}
                <br>
                Overview
                <br>
                ${f.overview}
             </p>`);
   });
    addItemHtmlDoc('main', liste);
};
//MAIN
const main = async () => {

    const httpRespTrending = await fetch(url.TRENDING_FILM);
    const trending = await httpRespTrending.json();
    const films = creationListeFilms(trending);
    console.log(films);
    affichageListFilms(films);
    const li = document.querySelector('li').addEventListener('click', () => affichageDetailFilm(films));
    // affichageDetailFilm(films);

};

document.addEventListener('DOMContentLoaded', main);
