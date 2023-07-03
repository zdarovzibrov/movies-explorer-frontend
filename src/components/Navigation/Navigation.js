import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';
import {
  HEADER_FILM_LABEL,
  HEADER_MAIN_LABEL,
  HEADER_SAVE_FILM_LABEL,
  HEADER_USER_LABEL,
} from '../../constatns';

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
          {HEADER_FILM_LABEL}
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={({ isActive }) =>
            isActive
              ? 'navi__btn navi__btn-link navi__btn_big'
              : 'navi__btn navi__btn-link'
          }
        >
          {HEADER_SAVE_FILM_LABEL}
        </NavLink>
      </div>
      <div className="navi__btn-container">
        <Link
          to="/profile"
          className="navi__btn navi__btn_account"
        >
          {HEADER_USER_LABEL}
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
                {HEADER_MAIN_LABEL}
              </NavLink>
              <NavLink
                to="/movies"
                className="navi__item"
                activeClassName="navi__item_active"
              >
                {HEADER_FILM_LABEL}
              </NavLink>
              <NavLink
                to="/saved-movies"
                className="navi__item"
                activeClassName="navi__item_active"
              >
                {HEADER_SAVE_FILM_LABEL}
              </NavLink>
              <Link
                to="/profile"
                className="navi__btn navi__btn_account navi__btn_end"
              >
                {HEADER_USER_LABEL}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
