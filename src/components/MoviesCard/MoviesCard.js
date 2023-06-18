import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import card1 from "../../images/picture_1.png";
import card2 from "../../images/picture_2.png";
import card3 from "../../images/picture_3.png";
import card4 from "../../images/picture_4.png";
import card5 from "../../images/picture_5.png";
import card6 from "../../images/picture_6.png";
import card7 from "../../images/picture_7.png";
import card8 from "../../images/picture_8.png";
import card9 from "../../images/picture_9.png";
import card10 from "../../images/picture_10.png";
import card11 from "../../images/picture_11.png";
import card12 from "../../images/picture_12.png";
import card13 from "../../images/picture_13.png";
import card14 from "../../images/picture_16.png";
import card15 from "../../images/picture_15.png";
import card16 from "../../images/picture_14.png";

const MoviesCard = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { pathname } = useLocation();

  function handleFavoriteToggle(index) {
    setSelectedMovie(index);
  }

  const movieData = [
    { image: card1, title: "33 слова о дизайне", duration: "1ч42м" },
    { image: card2, title: "33 слова о дизайне", duration: "1ч42м" },
    { image: card3, title: "33 слова о дизайне", duration: "1ч42м" },
    { image: card4, title: "33 слова о дизайне", duration: "1ч42м" },
    { image: card5, title: "33 слова о дизайне", duration: "1ч42м" },
    { image: card6, title: "33 слова о дизайне", duration: "1ч42м" },
    { image: card7, title: "33 слова о дизайне", duration: "1ч42м" },
    { image: card8, title: "33 слова о дизайне", duration: "1ч42м" },
    { image: card9, title: "33 слова о дизайне", duration: "1ч42м" },
    { image: card10, title: "33 слова о дизайне", duration: "1ч42м" },
    { image: card11, title: "33 слова о дизайне", duration: "1ч42м" },
    { image: card12, title: "33 слова о дизайне", duration: "1ч42м" },
    { image: card12, title: "33 слова о дизайне", duration: "1ч42м" },
    { image: card14, title: "33 слова о дизайне", duration: "1ч42м" },
    { image: card15, title: "33 слова о дизайне", duration: "1ч42м" },
    { image: card16, title: "33 слова о дизайне", duration: "1ч42м" },
  ];

  return (
    <>
      {movieData.map((movie, index) => (
        <li className="film-card" key={index}>
          <img className="film-card__element" src={movie.image} alt="Изображение карты фильма" />
          <div className="film-card__element__container">
            <div className="film-card__desc">
              <h5 className="film-card__title">{movie.title}</h5>
              <p className="film-card__duration">{movie.duration}</p>
            </div>
            {pathname === "/movies" ? (
              <button
                type="button"
                className={`film-card__like-btn${
                  selectedMovie === index ? " film-card__like-btn_active" : ""
                }`}
                onClick={() => handleFavoriteToggle(index)}
              />
            ) : (
              <button
                type="button"
                className="film-card__trash-btn"
                onClick={() => handleFavoriteToggle(index)}
              />
            )}
          </div>
        </li>
      ))}
    </>
  );
};

export default MoviesCard;
