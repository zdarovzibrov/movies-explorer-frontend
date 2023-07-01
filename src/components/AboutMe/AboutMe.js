import React from "react";
import Portfolio from "../Portfolio/Portfolio";
import photoMy from "../../images/my_photo.jpg";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <>
      <section className="about-me">
        <h2 className="about-me__big-title">Студент</h2>
        <div className="about-me__info">
          <div className="about-me__desc">
            <div className="about-me__name-info">
              <h3 className="about-me__title">Михаил</h3>
              <p className="about-me__details">Студент ЯП, 44 года</p>
              <p className="about-me__text">
                Родился и вырос городе Симферополе где и проживаю по сей день.
                В 2003 году закончил строительный факультет
                МГУПС. У меня есть жена и две дочери. Я люблю слушать музыку, а
                ещё увлекаюсь спортом. С момента поступления на курс
                "Веб-разработки от Яндекс Практикума" у меня появилось новое,
                серьезное увлечение кодом. На данный момент я самозанятый. В
                дальнейшем на перспективу мне хотелось бы уделять больше своего
                времени на изучение программирования на JS, а так же понемногу
                знакомить своих детей с этим увлекательным путешествием в магию
                кода!
              </p>
            </div>
            <a
              href="https://github.com/zdarovzibrov"
              className="about-me__link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <img className="about-me__photo" src={photoMy} alt="my photo" />
        </div>
      </section>
      <Portfolio />
    </>
  );
}
