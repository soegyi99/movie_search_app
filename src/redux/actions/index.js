export const fetchMovies = (movies) => {
    return {
        type : 'FETCH_MOVIES',
        payload : movies
    }
}

export const selectMovie = (movie) => {
    return {
        type : 'SELECT_MOVIE',
        payload :  movie
    }
}

export const removeSelectedNovie = (movie) => {
    return {
        type : 'REMOVE_MOVIE',
        payload : null
    }
}