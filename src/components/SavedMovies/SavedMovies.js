import React, { useState } from 'react'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'

const movieData = [
    { id: 1, image: '/images/movies/picture_1.png', title: "33 слова о дизайне", duration: "1ч42м" },
    { id: 2, image: '/images/movies/picture_2.png', title: "34 слова о дизайне", duration: "1ч42м" },
    { id: 4, image: '/images/movies/picture_4.png', title: "36 слов о дизайне", duration: "1ч42м" },
];

export default function SavedMovies() {
    const [movies, setMovies] = useState(movieData);

    function handleDelete(id) {
        setMovies((prevState) => {
            return prevState.filter((movie) => movie.id !== id)
        })
    }

    return (
        <>
            <SearchForm />
            <MoviesCardList movies={movies} onDeleteMovie={(id) => handleDelete(id)} />
        </>
    )
}
