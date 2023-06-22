import React, { useEffect, useState } from "react";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({movies, onDeleteMovie}) {
  const [selectedMovies, setSelectedMovies] = useState(new Set());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  function handleFavoriteToggle(id) {
    setSelectedMovies((prevSelectedMovies) => {
      const updatedSet = new Set(prevSelectedMovies);
      if (updatedSet.has(id)) {
        updatedSet.delete(id);
      } else {
        updatedSet.add(id);
      }
      return updatedSet;
    });
  }

  function handleDelete(id) {
    onDeleteMovie && onDeleteMovie(id)
  }

  const preloader = [...new Array(4)].map((element, index) => (
    <Preloader key={index} />
  ));

  return (
    <div className="film-card-list">
      <ul className="film-card-list__container">
        {loading && preloader}
        {!loading &&
            Array.isArray(movies) &&
            movies.map((movie) => (
                <MoviesCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    image={movie.image}
                    duration={movie.duration}
                    onSelect={() => handleFavoriteToggle(movie.id)}
                    onDelete={(id) => handleDelete(movie.id)}
                    isSelected={selectedMovies.has(movie.id)}
                />
            )
        )}
      </ul>
      <button className="film-card-list__btn">Ещё</button>
    </div>
  );
}
