import './Profile.css';
import { useEffect, useContext, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import FormValidation from '../../hooks/FormValidation';

export default function Profile({ onLogout, handleProfile }) {
  const { errors, values, handleChangeInput, resetForm } =
    FormValidation();
  const currentUser = useContext(CurrentUserContext);
  const [error, setError] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleProfile(values, setError);
  };

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  const isDisable =
    !values.name || !values.email || !!errors?.name || !!errors?.email;

  return (
    <>
      <div className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>

        <form
          className="profile__form"
          onSubmit={handleSubmit}
        >
          <label
            className={`profile__field profile__field_border ${
              errors.name ? 'register__input-invalid' : ''
            }`}
          >
            Имя
            <input
              className={`profile__input ${
                errors.name ? 'register__input-invalid' : ''
              }`}
              id="input-userName"
              name="name"
              type="text"
              autoComplete="off"
              value={values.name || ''}
              onChange={handleChangeInput}
            />
            {errors.name && (
              <span className="register__error">{errors.name}</span>
            )}
          </label>

          <label
            className={`profile__field ${
              errors.email ? 'register__input-invalid' : ''
            }`}
          >
            E-mail
            <input
              className={`profile__input ${
                errors.email ? 'register__input-invalid' : ''
              }`}
              id="input-userEmail"
              name="email"
              type="email"
              autoComplete="off"
              value={values.email || ''}
              onChange={handleChangeInput}
            />
            {errors.email && (
              <span className="register__error">{errors.email}</span>
            )}
          </label>
          {error && <p className="form__error-text">{error}</p>}

          <div className="profile__btn">
            <button
              className="profile__edit"
              type="submit"
              disabled={isDisable}
            >
              Редактировать
            </button>
            <button
              className="profile__logout"
              type="button"
              onClick={onLogout}
              to={'/sign-in'}
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
