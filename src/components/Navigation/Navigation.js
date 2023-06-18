import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  const width = document.documentElement.clientWidth;
  return width > 768 ? (
    <>
      <div className="navi__btn-container navi__btn-container_films">
        <Link to="/movies" className="navi__btn navi__btn_big">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="navi__btn">
          Сохраненные фильмы
        </Link>
      </div>
      <div className="navi__btn-container">
        <Link to="/profile" className="navi__btn navi__btn_account">
          Аккаунт
        </Link>
      </div>
    </>
  ) : (
    <>
      <div className="navi__overlay">
        <div className="navi__container-box"></div>
        <div className="navi__list">
          <button className="navi__close-button"></button>
          <nav className="navi__link">
            <NavLink
              exact
              to="/"
              className="navi__item"
              activeClassName="navi__item_active"
            >
              Главная
            </NavLink>
            <NavLink
              to="/movies"
              className="navi__item"
              activeClassName="navi__item_active"
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="navi__item"
              activeClassName="navi__item_active"
            >
              Сохранённые фильмы
            </NavLink>
            <NavLink
              to="/profile"
              className="navi__item"
              activeClassName="navi__item_active"
            >
              Аккаунт
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}
