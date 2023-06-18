import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/circle-logo.svg";
import menu from "../../images/nav-btn.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

export default function Header({ isLogged }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isLogged ? "header__main" : ""}`} id="header">
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
            <Navigation isOpen={isMenuOpen} />
            <button
              className="header__btn header__btn_burger"
              onClick={toggleMenu}
            >
              <img src={menu} alt="Меню" />
            </button>
          </>
        ) : (
          <>
            <Link to="/signup" className="header__btn header__btn_white">
              Регистрация
            </Link>
            <Link to="/signin" className="header__btn header__btn_signin">
              Войти
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
