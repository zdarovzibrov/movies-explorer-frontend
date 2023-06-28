import React from "react";
import {useLocation} from "react-router-dom";
import "./MoviesCard.css";
import {durationConverter} from "../../utils/utils";

const MoviesCard = ({card, isSavedFilms, savedMovies, onCardDelete, saved, handleLikeClick}) => {
  function onCardClick() {
    if (saved) {
      onCardDelete(savedMovies.filter((m) => m.movieId === card.id)[0]);
    } else {
      handleLikeClick(card);
    }
  }

  function onDelete() {
    onCardDelete(card);
  }

  return (
      <main>
        <li className="film-card">
          <a href={card.trailerLink} target="_blank" rel="noreferrer">
          <img
              className="film-card__element"
              alt={card.nameRU}
              src={isSavedFilms ? card.image : `https://api.nomoreparties.co/${card.image.url}`}
          />
          </a>

          <div className="film-card__element__container">
            <div className="film-card__desc">
              <h5 className="film-card__title">{card.nameRU}</h5>
              <p className="film-card__duration">{durationConverter(card.duration)}</p>
            </div>
            {isSavedFilms ? (
                <button type="button" className='film-card__trash-btn' onClick={onDelete}></button>
            ) : (
                <button type="button" className={`film-card__like-btn${saved ? " film-card__like-btn_active" : ""}`}
                        onClick={onCardClick}></button>
            )}
          </div>
        </li>
      </main>
  );
};

export default MoviesCard;
