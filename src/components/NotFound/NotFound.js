import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="container__main">
      <section className="pagenot-found">
        <h2 className="pagenot-found__title">404</h2>
        <p className="pagenot-found__subtitle">Страница не найдена.</p>
        <Link to="/" className="pagenot-found__btn">
          Назад
        </Link>
      </section>
    </div>
  );
}

export default NotFound;
