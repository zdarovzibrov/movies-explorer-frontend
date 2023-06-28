import React from "react";
import "./AboutProject.css";

export default function AboutProject() {
  return (
    <>
      <section className="about-project">
        <h2 className="about-project__big-title">О проекте</h2>
        <div className="about-project__info">
          <div className="about-project__stages">
            <h3 className="about-project__title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__subtitle">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__stages">
            <h3 className="about-project__title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__subtitle">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__status">
          <h4 className="about-project__status-header about-project__status-header_color">
            1 неделя
          </h4>
          <h4 className="about-project__status-header">4 недели</h4>
          <p className="about-project__status-desc">Back-end</p>
          <p className="about-project__status-desc">Front-end</p>
        </div>
      </section>
    </>
  );
}
