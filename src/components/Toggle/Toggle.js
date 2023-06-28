import React, { useState } from "react";
import "./Toggle.css";

export default function Toggle({ onFilter, isShortMovies }) {

  return (
    <form className="toggle-box">
      <input
        className="toggle-box__input"
        type="checkbox"
        onChange={onFilter}
        checked={isShortMovies}

      />
      <span className="toggle-box__subtitle">Короткометражки</span>
    </form>
  );
}
