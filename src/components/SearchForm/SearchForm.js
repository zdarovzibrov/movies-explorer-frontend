import React from "react";
import Toggle from "../Toggle/Toggle";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <>
      <section className="search">
        <form
          className="search__form"
          id="search-form"
        >
          <input
            className="search__input"
            id="search-input"
            type="text"
            placeholder="Фильм"
          ></input>
          <button className="search__btn" type="submit">
            Найти
          </button>
        </form>
        <Toggle />
      </section>
    </>
  );
}
