import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <nav className="portfolio__list">
        <a
          className="portfolio__link"
          href=" https://zdarovzibrov.github.io/how-to-learn/"
          target="_blank"
          rel="noreferrer"
        >
          <h4 className="portfolio__desc">Статичный сайт</h4>
          <p className="portfolio__link_icon">↗</p>
        </a>
        <a
          className="portfolio__link"
          href="https://zdarovzibrov.github.io/russian-travel/"
          target="_blank"
          rel="noreferrer"
        >
          <h4 className="portfolio__desc">Адаптивный сайт</h4>
          <p className="portfolio__link_icon">↗</p>
        </a>
        <a
          className="portfolio__link"
          href="https://zdarovzibrov.github.io/russian-travel/"
          target="_blank"
          rel="noreferrer"
        >
          <h4 className="portfolio__desc">Одностраничное приложение</h4>
          <p className="portfolio__link_icon">↗</p>
        </a>
      </nav>
    </section>
  );
}
