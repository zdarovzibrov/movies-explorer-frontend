import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <h5 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h5>
        <div className="footer__container">
          <p className="footer__author">© {new Date().getFullYear()} Зибров Михаил</p>
          <a
            href="https://practicum.yandex.ru"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/zdarovzibrov"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </footer>
    </>
  );
}
