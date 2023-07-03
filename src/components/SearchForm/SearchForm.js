import React, { useState, useEffect } from 'react';
import Toggle from '../Toggle/Toggle';
import './SearchForm.css';
import { useLocation } from 'react-router-dom';
import {
  SEARCH_MOVIES_BUTTON,
  SEARCH_MOVIES_ERROR_MESSAGE,
  SEARCH_MOVIES_PLACEHOLDER,
} from '../../constatns';

export default function SearchForm({
  onSearchMovies,
  onFilter,
  isShortMovies,
}) {
  const [isQueryError, setIsQueryError] = useState(false);
  const [query, setQuery] = useState('');
  const location = useLocation();

  function handleChangeQuery(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim().length === 0) {
      setIsQueryError(true);
    } else {
      setIsQueryError(false);
      onSearchMovies(query);
    }
  }

  useEffect(() => {
    if (
      location.pathname === '/movies' &&
      localStorage.getItem('movieSearch')
    ) {
      const localQuery = localStorage.getItem('movieSearch');
      setQuery(localQuery);
    }
  }, [location]);

  return (
    <>
      <section className="search">
        <form
          className="search__form"
          id="search-form"
          onSubmit={handleSubmit}
        >
          <input
            className="search__input"
            id="search-input"
            type="text"
            placeholder={SEARCH_MOVIES_PLACEHOLDER}
            onChange={handleChangeQuery}
            value={query || ''}
          ></input>
          <button
            className="search__btn"
            type="submit"
          >
            {SEARCH_MOVIES_BUTTON}
          </button>
        </form>
        <Toggle
          onFilter={onFilter}
          isShortMovies={isShortMovies}
        />
        {isQueryError && (
          <span className="form__error-text">
            {SEARCH_MOVIES_ERROR_MESSAGE}
          </span>
        )}
      </section>
    </>
  );
}
