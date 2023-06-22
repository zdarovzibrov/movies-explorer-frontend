import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormValidation from "../../hooks/FormValidation";
import "./Register.css";
import logo from "../../images/circle-logo.svg";

export default function Register() {
  const { isErrors, isValues, isValid, handleChangeInput } = FormValidation();
  const [focusedField, setFocusedField] = useState("");

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) {
      return;
    }

    const values = {
      name: isValues.name,
      email: isValues.email,
      password: isValues.password,
    };
    console.log(values);
  };

  return (
    <>
      <div className="register">
        <Link to="/" className="register__logo">
          <img src={logo} alt="Логотип" />
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>

        <form className="user-form" onSubmit={handleSubmit}>
          <label className="user-form__field">
            Имя
            <input
              className={`form__input form__input_type_name user-form__input ${
                isErrors.name || (focusedField === "name" && !isValues.name)
                  ? "register__input-invalid"
                  : ""
              }`}
              id="input-userName"
              name="name"
              type="text"
              autoComplete="off"
              value={isValues.name || ""}
              onChange={handleChangeInput}
              onFocus={() => handleFocus("name")}
              onBlur={() => handleFocus("")}
              required
              placeholder="Виталий"
            />
            {isErrors.name && (
              <span className="register__error">{isErrors.name}</span>
            )}
            {focusedField === "name" && !isValues.name && (
              <span className="register__error">
                Поле не должно быть пустым
              </span>
            )}
          </label>

          <label className="user-form__field">
            E-mail
            <input
              className={`form__input form__input_type_email user-form__input ${
                isErrors.email || (focusedField === "email" && !isValues.email)
                  ? "register__input-invalid"
                  : ""
              }`}
              id="input-userEmail"
              name="email"
              type="email"
              autoComplete="off"
              value={isValues.email || ""}
              onChange={handleChangeInput}
              onFocus={() => handleFocus("email")}
              onBlur={() => handleFocus("")}
              required
              placeholder="pochta@yandex.ru"
            />
            {isErrors.email && (
              <span className="register__error">{isErrors.email}</span>
            )}
            {focusedField === "email" && !isValues.email && (
              <span className="register__error">
                Поле не должно быть пустым
              </span>
            )}
          </label>

          <label className="user-form__field">
            Пароль
            <input
              className={`form__input form__input_type_password user-form__input ${
                isErrors.password ||
                (focusedField === "password" && !isValues.password)
                  ? "register__input-invalid"
                  : ""
              }`}
              id="input-password"
              name="password"
              type="password"
              value={isValues.password || ""}
              onChange={handleChangeInput}
              onFocus={() => handleFocus("password")}
              onBlur={() => handleFocus("")}
              required
              placeholder="Придумайте пароль"
              minLength={5}
            />
            {isErrors.password && (
              <span className="register__error">{isErrors.password}</span>
            )}
            {focusedField === "password" && !isValues.password && (
              <span className="register__error">
                Поле не должно быть пустым
              </span>

            )}
          </label>
          <p className="form__error-text">Что-то пошло не так...</p>

          <button className="user-form__button" type="submit">
            Зарегистрироваться
          </button>
          <p className="user-form__subtitle">
            Уже зарегистрированы?{" "}
            <Link to="/signin" className="user-form__link">
              Войти
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
