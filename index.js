'use strict';

let movieList;

const Movie = ({title, url, posterUrl, genres, year}) => {
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

const showMovies = (movies) => {
    document.querySelector('#movies').innerHTML = movies.map((movie) => {
        return Movie(movie);
    }).join('');
}

const sortFromNewest = (e) => {
    console.log('jsem tady');
    e.preventDefault();
    movieList.sort((filmA, filmB) => filmB.year - filmA.year);
    console.log(movieList);
    showMovies(movieList);
};

const sortFromOldest = (e) => {
    console.log('jsem v newest');
    e.preventDefault();
    movieList.sort((filmA, filmB) => filmA.year - filmB0.year);
    console.log(movieList);
    showMovies(movieList);
};

document.querySelector('#fromNewest').addEventListener('click', sortFromNewest);
document.querySelector('#fromOldest').addEventListener('click', sortFromOldest);

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
    .then((resp) => resp.json())
    .then((data) => {
        movieList = data;
        movieList.sort((filmA, filmB) => (filmA.title > filmB.title) ? 1 : ((filmB.title > filmA.title) ? -1 : 0));
        showMovies(movieList);
    });
