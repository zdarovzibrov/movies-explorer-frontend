import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

const MoviesCard = ({id, image, title, duration, isSelected, onSelect, onDelete}) => {

  const { pathname } = useLocation();

  return (
    <>
      <li className="film-card">
        <img className="film-card__element" src={image} alt="Изображение карты фильма" />
        <div className="film-card__element__container">
          <div className="film-card__desc">
            <h5 className="film-card__title">{title}</h5>
            <p className="film-card__duration">{duration}</p>
          </div>
          {pathname === "/movies" ? (
            <button
              type="button"
              className={`film-card__like-btn${
                  isSelected ? " film-card__like-btn_active" : ""
              }`}
              onClick={() => onSelect(id)}
            />
          ) : (
            <button
              type="button"
              className="film-card__trash-btn"
              onClick={() => onDelete(id)}
            />
          )}
        </div>
      </li>
    </>
  );
};

export default MoviesCard;
