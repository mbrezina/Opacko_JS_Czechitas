'use strict';

const Film = ({title, url, posterUrl, genres, year}) => {
    return ` 
            <div class="movie">
                <img class="movie__img" src=${posterUrl} alt=${title}>
                <h2 class="movie__title">${title}</h2>
                <p class="movie__year">${year}</p>
                <p class="movie__genre">${genres}</p>
                <a href=${url}>Recenze</a>
            </div>
        `;
};

const MovieList = (items) => {
    items.sort((filmA,filmB) => (filmA.title > filmB.title) ? 1 : ((filmB.title > filmA.title) ? -1 : 0))
    document.querySelector('#movies').innerHTML = items.map((item) => {
        return Film(item);
    }).join('');
}

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
    .then((resp) => resp.json())
    .then((data) => MovieList(data));

const sortFromNewest = (e) => {
    e.preventDefault();
    items.sort((filmA, filmB) => filmB.year - filmA.year);
};

document.querySelector('#fromNewest').addEventListener('submit', sortFromNewest);
document.querySelector('#fromOldest').addEventListener('submit', sortFromNewest.reverse());
