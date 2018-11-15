// const API_KEY = "ef39282f7c14259b9b3517f461b88510";
// const API_URL = 'https://api.themoviedb.org/3';
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