import React from "react";
import { Link } from "react-router-dom";
import FormValidation from "../../hooks/FormValidation";
import "./Register.css";
import logo from "../../images/circle-logo.svg";

export default function Register() {
  const { isErrors, isValues, isValid, handleChangeInput } = FormValidation();

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
                isErrors.name ? "register__input-invalid" : ""
              }`}
              id="input-userName"
              name="name"
              type="text"
              autoComplete="off"
              value={isValues.name || ""}
              onChange={handleChangeInput}
              required
            />
            {isErrors.name && (
              <span className="register__error">{isErrors.name}</span>
            )}
          </label>

          <label className="user-form__field">
            E-mail
            <input
              className={`form__input form__input_type_email user-form__input ${
                isErrors.email ? "register__input-invalid" : ""
              }`}
              id="input-userEmail"
              name="email"
              type="email"
              autoComplete="off"
              value={isValues.email || ""}
              onChange={handleChangeInput}
              required
            />
            {isErrors.email && (
              <span className="register__error">{isErrors.email}</span>
            )}
          </label>

          <label className="user-form__field">
            Пароль
            <input
              className={`form__input form__input_type_password user-form__input ${
                isErrors.password ? "register__input-invalid" : ""
              }`}
              id="input-password"
              name="password"
              type="password"
              value={isValues.password || ""}
              onChange={handleChangeInput}
              required
              minLength={5}
            />
            {isErrors.password && (
              <span className="register__error">{isErrors.password}</span>
            )}
          </label>

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
