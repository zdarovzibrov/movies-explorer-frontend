import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../images/circle-logo.svg";
import FormValidation from "../../hooks/FormValidation";

function Login() {
  const { isErrors, isValues, isValid, handleChangeInput } = FormValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = {
      email: isValues.email,
      password: isValues.password,
    };
    console.log(values);
  };

  return (
    <div className="container__main">
      <div className="login">
        <Link to="/" className="login__logo">
          <img src={logo} alt="Логотип" />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>

        <form className="user-form" onSubmit={handleSubmit}>
          <label className="user-form__field">
            E-mail
            <input
              className={`form__input form__input_type_email user-form__input logform__input ${
                isErrors.email ? "register__input-invalid" : ""
              }`}
              id="input-userEmail"
              name="email"
              type="email"
              autoComplete="off"
              value={isValues.email || ""}
              onChange={handleChangeInput}
              required
              placeholder="pochta@yandex.ru"
            />
            <span className="register__error">{isErrors.email}</span>
          </label>

          <label className="user-form__field">
            Пароль
            <input
              className={`form__input form__input_type user-form__input logform__input ${
                isErrors.password ? "register__input-invalid" : ""
              }`}
              id="input-password"
              name="password"
              type="password"
              value={isValues.password || ""}
              onChange={handleChangeInput}
              required
              placeholder="Введите пароль"
            />
            {isErrors.password && (
              <span className="register__error">{isErrors.password}</span>
            )}
          </label>
          <button
            className={`user-form__button ${
              !isValid ? "user-form__button_disabled" : ""
            }`}
            type="submit"
            disabled={!isValid}
          >
            Войти
          </button>
          <p className="user-form__subtitle">
            Ещё не зарегистрированы?{" "}
            <Link to="/signup" className="user-form__link">
              Регистрация
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
