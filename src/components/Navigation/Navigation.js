import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation({ isDark, isOpen, onClose }) {
  // const

  return (
    <>
      <div className="navi__btn-container navi__btn-container_films">
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive
              ? 'navi__btn navi__btn-link navi__btn_big'
              : 'navi__btn navi__btn-link'
          }
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={({ isActive }) =>
            isActive
              ? 'navi__btn navi__btn-link navi__btn_big'
              : 'navi__btn navi__btn-link'
          }
        >
          Сохраненные фильмы
        </NavLink>
      </div>
      <div className="navi__btn-container">
        <Link
          to="/profile"
          className="navi__btn navi__btn_account"
        >
          Аккаунт
        </Link>
      </div>
      {isOpen && (
        <div className="navi__overlay">
          <div className="navi__container-box"></div>
          <div className="navi__list">
            <button
              className="navi__close-button"
              onClick={onClose}
            ></button>
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
              <Link
                to="/profile"
                className="navi__btn navi__btn_account navi__btn_end"
              >
                Аккаунт
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
