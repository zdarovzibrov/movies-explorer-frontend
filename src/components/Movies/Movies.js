import React, {useEffect, useState} from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import {filterDuration, filterMovies} from "../../utils/utils";
import {moviesApi} from "../../utils/MoviesApi";


export default function Movies({ handleLikeClick, savedMovies, onCardDelete }) {
    const [isLoading, setIsLoading] = useState(false);
    const [initialMovies, setInitialMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [isShortMovies, setIsShortMovies] = useState(false);
    const [isReqErr, setIsReqErr] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false);

    function handleFilterMovies(movies, query, short) {
        const moviesList = filterMovies(movies, query, short);
        setInitialMovies(moviesList);
        setFilteredMovies(short ? filterDuration(moviesList) : moviesList);
        localStorage.setItem('movies', JSON.stringify(moviesList));
        localStorage.setItem('allMovies', JSON.stringify(movies));
    }

    function handleShortMovies() {
        setIsShortMovies(!isShortMovies);
        if (!isShortMovies) {
            if (filterDuration(initialMovies).length === 0) {
                setFilteredMovies(filterDuration(initialMovies));
            } else {
                setFilteredMovies(filterDuration(initialMovies));
            }
        } else {
            setFilteredMovies(initialMovies);
        }
        localStorage.setItem('shortMovies', !isShortMovies);
    }

    function onSearchMovies(query) {
        localStorage.setItem('movieSearch', query);
        localStorage.setItem('shortMovies', isShortMovies);

        if (localStorage.getItem('allMovies')) {
            const movies = JSON.parse(localStorage.getItem('allMovies'));
            handleFilterMovies(movies, query, isShortMovies);
        } else {
            setIsLoading(true);
            moviesApi
                .getAllMovies()
                .then((movies) => {
                    handleFilterMovies(movies, query, isShortMovies);
                    setIsReqErr(false);
                })
                .catch((err) => {
                    setIsReqErr(true);
                    console.log(err);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }

    }

    useEffect(() => {
        if (localStorage.getItem('shortMovies') === 'true') {
            setIsShortMovies(true);
        } else {
            setIsShortMovies(false);
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem('movies')) {
            const movies = JSON.parse(localStorage.getItem('movies'));
            setInitialMovies(movies);
            if (localStorage.getItem('shortMovies') === 'true') {
                setFilteredMovies(filterDuration(movies));
            } else {
                setFilteredMovies(movies);
            }
        } else {
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem('movieSearch')) {
            if (filteredMovies.length === 0) {
                setIsNotFound(true);
            } else {
                setIsNotFound(false);
            }
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

      <MoviesCardList savedMovies={savedMovies}
                      movies={filteredMovies}
                      isSavedFilms={false}
                      isLoading={isLoading}
                      isReqErr={isReqErr}
                      isNotFound={isNotFound}
                      handleLikeClick={handleLikeClick}
                      onCardDelete={onCardDelete}/>
    </>
  );
}
