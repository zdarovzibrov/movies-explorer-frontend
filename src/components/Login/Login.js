import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/circle-logo.svg';
import FormValidation from '../../hooks/FormValidation';

function Login({ onLogin }) {
  const { errors, values, handleChangeInput, setErrors } = FormValidation();
  const [error, setError] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(values, setError);
  };

  useEffect(() => {
    if (values.email && !values.email.includes('.')) {
      setErrors({ ...errors, email: 'Не корректный email' });
    }
  }, [values.email, setErrors]);

  const isDisable =
    !values.email || !values.password || !!errors?.email || !!errors?.password;

  return (
    <div className="container__main">
      <div className="login">
        <Link
          to="/"
          className="login__logo"
        >
          <img
            src={logo}
            alt="Логотип"
          />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>

        <form
          className="user-form"
          onSubmit={handleSubmit}
        >
          <label className="user-form__field">
            E-mail
            <input
              className={`form__input form__input_type_email user-form__input logform__input ${
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
            <span className="register__error">{errors.email}</span>
          </label>

          <label className="user-form__field">
            Пароль
            <input
              className={`form__input form__input_type user-form__input logform__input ${
                errors.password ? 'register__input-invalid' : ''
              }`}
              id="input-password"
              name="password"
              type="password"
              value={values.password || ''}
              onChange={handleChangeInput}
              required
              placeholder="Введите пароль"
            />
            {errors.password && (
              <span className="register__error">{errors.password}</span>
            )}
          </label>
          {error && <p className="form__error-text">{error}</p>}

          <button
            className="user-form__button"
            type="submit"
            disabled={isDisable}
          >
            Войти
          </button>
          <p className="user-form__subtitle">
            Ещё не зарегистрированы?{' '}
            <Link
              to="/signup"
              className="user-form__link"
            >
              Регистрация
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
