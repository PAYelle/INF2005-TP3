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
//CONSTANTES
const api = {
    key: "ef39282f7c14259b9b3517f461b88510",
    url: 'https://api.themoviedb.org/3'
};
const url = {
    TRENDING_FILM: `${api.url}/trending/move/week?api_key=${api.key}`,
    SEARCH_FILM: 'https://developers.themoviedb.org/3/search/search-movies',
    DETAILS_FILM: 'https://developers.themoviedb.org/3/movies/get-movie-details',
    REVIEW_FILM: 'https://developers.themoviedb.org/3/movies/get-movie-reviews'
};

//FUNCTIONS
const addItemHtmlDoc = (attribute, item) => document.querySelector(attribute).innerHTML = item;
const formaterFilm = jsonFilmContent => [jsonFilmContent.title, jsonFilmContent.vote_average];
const main = async () => {
    const httpResp = await fetch(url.TRENDING_FILM);
    const jsonContent = await httpResp.json();
};

document.addEventListener('DOMContentLoaded', main);
