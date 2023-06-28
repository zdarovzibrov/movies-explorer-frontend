import React from "react";
import worldlogo from "../../images/main-logo.svg";
import "./Promo.css";

export default function Promo() {
  return (
    <>
      <section className="promo page__content">
        <div className="promo__container">
          <div className="promo__info">
            <h1 className="promo__title">
              {" "}
              Учебный проект студента <br /> факультета
              <br /> Веб-разработки.
            </h1>
            <p className="promo__subtitle">
              Листайте ниже, чтобы узнать больше про этот проект и его создателя.
            </p>
            <a className="promo__link" href="#techs-section">Узнать больше</a>
          </div>
          <img className="promo__logo" src={worldlogo} alt="Логотип"/>
        </div>
      </section>
    </>
  );
}
