import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/circle-logo.svg";
import menu from "../../images/nav-btn.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

export default function Header({ isLogged, isDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isDark ? "header_dark page__content" : ""}`} id="header">
      <div className={`header__inner page__content`}>
      <Link to="/" className="header__logo">
        <img src={logo} alt="Логотип приложения" />
      </Link>
      <div
        className={`header__btn-container ${
          isLogged ? "header__btn-container_blok" : ""
        }`}
      >
        {isLogged ? (
          <>
            <Navigation isOpen={isMenuOpen} onClose={toggleMenu} />
            <button
              className="header__btn header__btn_burger"
              onClick={toggleMenu}
            >
              <img src={menu} alt="Меню" />
            </button>
          </>
        ) : (
          <>
            <Link to="/signup" className="header__btn header__btn-link">
              Регистрация
            </Link>
            <Link to="/signin" className="header__btn header__btn_signin">
              Войти
            </Link>
          </>
        )}
      </div>
      </div>
    </header>
  );
}
