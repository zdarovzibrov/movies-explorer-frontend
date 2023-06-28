import React, { useState } from "react";
import "./Toggle.css";

export default function Toggle() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <form className="toggle-box">
      <input
        className="toggle-box__input"
        type="checkbox"
        onChange={handleChange}
        checked={checked}
      />
      <span className="toggle-box__subtitle">Короткометражки</span>
    </form>
  );
}
