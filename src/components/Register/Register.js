import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormValidation from '../../hooks/FormValidation';
import './Register.css';
import logo from '../../images/circle-logo.svg';

export default function Register({ onRegister }) {
  const { errors, values, isValid, handleChangeInput } = FormValidation();
  const [error, setError] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    onRegister(values, setError);
    if (!isValid) {
      return;
    }
  };
  const isDisable =
    !values.name ||
    !values.email ||
    !values.password ||
    !!errors?.name ||
    !!errors?.email ||
    !!errors?.password;

  return (
    <>
      <div className="container__main">
        <div className="register">
          <Link
            to="/"
            className="register__logo"
          >
            <img
              src={logo}
              alt="Логотип"
            />
          </Link>
          <h2 className="register__title">Добро пожаловать!</h2>

          <form
            className="user-form"
            onSubmit={handleSubmit}
          >
            <label className="user-form__field">
              Имя
              <input
                className={`form__input form__input_type_name user-form__input ${
                  errors.name ? 'register__input-invalid' : ''
                }`}
                id="input-userName"
                name="name"
                type="text"
                autoComplete="off"
                value={values.name || ''}
                onChange={handleChangeInput}
                required
                placeholder="Имя"
              />
              {errors.name && (
                <span className="register__error">{errors.name}</span>
              )}
            </label>

            <label className="user-form__field">
              E-mail
              <input
                className={`form__input form__input_type_email user-form__input ${
                  errors.email ? 'register__input-invalid' : ''
                }`}
                id="input-userEmail"
                name="email"
                type="email"
                autoComplete="off"
                value={values.email || ''}
                onChange={handleChangeInput}
                required
                placeholder="E-mail"
              />
              {errors.email && (
                <span className="register__error">{errors.email}</span>
              )}
            </label>

            <label className="user-form__field">
              Пароль
              <input
                className={`form__input form__input_type_password user-form__input ${
                  errors.password ? 'register__input-invalid' : ''
                }`}
                id="input-password"
                name="password"
                type="password"
                value={values.password || ''}
                onChange={handleChangeInput}
                required
                placeholder="Придумайте пароль"
                minLength={5}
              />
              {errors.password && (
                <span className="register__error">{errors.password}</span>
              )}
            </label>
            {error && <p className="form__error-text">{error}</p>}
            <button
              disabled={isDisable}
              className="user-form__button"
              type="submit"
            >
              Зарегистрироваться
            </button>
            <p className="user-form__subtitle">
              Уже зарегистрированы?{' '}
              <Link
                to="/signin"
                className="user-form__link"
              >
                Войти
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
