import React, { useEffect, useState } from "react";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const preloader = [...new Array(4)].map(() => (
    <Preloader key={Math.random()} />
  ));

  return (
    <div className="film-card-list">
      <ul className="film-card-list__container">
        {loading ? preloader : <MoviesCard key={Math.random()} />}
      </ul>
      <button className="film-card-list__btn">Ещё</button>
    </div>
  );
}
