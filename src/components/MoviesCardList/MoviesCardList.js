import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import { SEARCH_MORE_LABEL, SEARCH_REASULT_MESSAGE } from '../../constatns';

export default function MoviesCardList({
  movies,
  onCardDelete,
  isSavedFilms,
  isLoading,
  isReqErr,
  isNotFound,
  handleLikeClick,
  savedMovies,
}) {
  const [shownMovies, setShownMovies] = useState(0);

  function shownCount() {
    const display = window.innerWidth;
    if (display > 1180) {
      setShownMovies(16);
    } else if (display > 1023) {
      setShownMovies(12);
    } else if (display > 800) {
      setShownMovies(8);
    } else if (display < 800) {
      setShownMovies(5);
    }
  }

  useEffect(() => {
    shownCount();
  }, []);

  useEffect(() => {
    // setTimeout(() => {
    window.addEventListener('resize', shownCount);
    return () => window.removeEventListener('resize', shownCount);
    // }, 500);
  });

  function showMore() {
    const display = window.innerWidth;
    if (display > 1180) {
      setShownMovies(shownMovies + 4);
    } else if (display > 1023) {
      setShownMovies(shownMovies + 3);
    } else if (display < 1023) {
      setShownMovies(shownMovies + 2);
    }
  }

  function getSavedMovieCard(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  }

  const preloader = [...new Array(4)].map((element, index) => (
    <Preloader key={index} />
  ));

  return (
    <>
      <main className="film-card-list">
        <ul className="film-card-list__container">
          {isLoading && <Preloader />}
          {isNotFound && !isLoading && <span>{SEARCH_REASULT_MESSAGE}</span>}
          {!isLoading &&
            Array.isArray(movies) &&
            movies.slice(0, shownMovies).map((movie) => (
              <MoviesCard
                key={isSavedFilms ? movie._id : movie.id}
                saved={getSavedMovieCard(savedMovies, movie)}
                cards={movies}
                card={movie}
                isSavedFilms={isSavedFilms}
                handleLikeClick={handleLikeClick}
                onCardDelete={onCardDelete}
                savedMovies={savedMovies}
              />
            ))}
        </ul>
        {movies.length > shownMovies ? (
          <button
            className="film-card-list__btn"
            onClick={showMore}
          >
            {SEARCH_MORE_LABEL}
          </button>
        ) : (
          ''
        )}
      </main>
    </>
  );
}
