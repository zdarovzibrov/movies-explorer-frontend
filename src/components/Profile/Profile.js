import "./Profile.css";
import Header from "../Header/Header";
import FormValidation from "../../hooks/FormValidation";

export default function Profile() {
  const { isErrors, isValues, isValid, handleChangeInput } = FormValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Header />
      <div className="profile">
        <h2 className="profile__title">Привет, Михаил!</h2>

        <form className="profile__form" onSubmit={handleSubmit}>
          <label
            className={`profile__field profile__field_border ${
              isErrors.name ? "register__input-invalid" : ""
            }`}
          >
            Имя
            <input
              className={`profile__input ${
                isErrors.name ? "register__input-invalid" : ""
              }`}
              id="input-userName"
              name="name"
              type="text"
              autoComplete="off"
              value={isValues.name || "Виталий"}
              onChange={handleChangeInput}
            />
            {isErrors.name && (
              <span className="register__error">{isErrors.name}</span>
            )}
          </label>

          <label
            className={`profile__field ${
              isErrors.email ? "register__input-invalid" : ""
            }`}
          >
            E-mail
            <input
              className={`profile__input ${
                isErrors.email ? "register__input-invalid" : ""
              }`}
              id="input-userEmail"
              name="email"
              type="email"
              autoComplete="off"
              value={isValues.email || "pochta@yandex.ru"}
              onChange={handleChangeInput}
            />
            {isErrors.email && (
              <span className="register__error">{isErrors.email}</span>
            )}
          </label>
          <div className="profile__btn">
            <button
              className={`profile__edit ${
                !isValid ? "user-form__button_disabled" : ""
              }`}
              type="submit"
              disabled={!isValid}
            >
              Редактировать
            </button>
            <button className="profile__logout" type="button">
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
