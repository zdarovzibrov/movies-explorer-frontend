import React, { useState, useEffect } from 'react'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import {filterDuration, filterMovies} from "../../utils/utils";

export default function SavedMovies({ savedMovies, onCardDelete }) {
    const [filteredMovies, setFilteredMovies] = useState(savedMovies);
    const [isShortMovies, setIsShortMovies] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    function onSearchMovies(query) {
        setSearchQuery(query);
    }

    function handleShortMovies() {
        setIsShortMovies(!isShortMovies);
    }

    useEffect(() => {
        const moviesList = filterMovies(savedMovies, searchQuery);
        setFilteredMovies(isShortMovies ? filterDuration(moviesList) : moviesList);
    }, [savedMovies, isShortMovies, searchQuery]);

    useEffect(() => {
        if (filteredMovies.length === 0) {
            setIsNotFound(true);
        } else {
            setIsNotFound(false);
        }
    }, [filteredMovies]);

    return (
        <>
            <SearchForm
                onSearchMovies={onSearchMovies}
                onFilter={handleShortMovies}
                isShortMovies={isShortMovies}/>
            <MoviesCardList movies={filteredMovies}
                isSavedFilms={true}
                isNotFound={isNotFound}
                savedMovies={savedMovies}
                onCardDelete={onCardDelete} />
        </>
    )
}
