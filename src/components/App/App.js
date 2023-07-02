import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Movies from '../Movies/Movies';
import Main from '../Main/Main';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Layout from '../Layout/Layout';
import Promo from '../Promo/Promo';
import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    if (isLogged) {
      Promise.all([mainApi.getProfile(), mainApi.getInitialCards()])
        .then(([user, cards]) => {
          setCurrentUser(user);
          setSavedMovies(cards.reverse());
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [isLogged]);

  useEffect(() => {
    mainApi
      .checkToken()
      .then((res) => {
        setCurrentUser(res);
        setIsLogged(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [navigate]);

  function handleRegister(obj, errorCallback) {
    if (!obj.email || !obj.password || !obj.name) {
      return;
    }

    mainApi
      .register(obj)
      .then(() => {
        handleLogin(obj);
      })
      .catch((err) => {
        console.error(err);
        errorCallback(err);
      });
  }

  function handleLogin(obj, errorCallback) {
    if (!obj.email || !obj.password) {
      return;
    }
    mainApi
      .login(obj)
      .then((data) => {
        if (data.token) {
          setIsLogged(true);
          localStorage.setItem('token', data.token);
          navigate('/movies');
        }
      })
      .catch((err) => {
        console.error(err);
        errorCallback(err);
      });
  }

  function handleUpdateUser(user, errorCallback) {
    mainApi
      .setProfile(user)
      .then(() => {
        setCurrentUser({ ...currentUser, name: user.name, email: user.email });
      })
      .catch((err) => {
        console.error(err);
        errorCallback(err);
      });
  }

  function handleLogout() {
    mainApi.removeToken();
    setIsLogged(false);
    navigate('/');
    setCurrentUser({});
  }

  function handleCardDelete(card) {
    mainApi
      .deleteCard(card._id)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((item) => item._id !== card._id)
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleCardLike(card) {
    console.log(card);
    mainApi
      .addNewCard(card)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          element={
            <Layout
              isMain={true}
              isLogged={isLogged}
              banner={<Promo />}
              showFooter={true}
            />
          }
        >
          <Route
            path="/"
            element={<Main />}
          />
        </Route>
        <Route element={<ProtectedRoute isLogged={isLogged} />}>
          <Route
            element={
              <Layout
                isLogged={isLogged}
                showFooter={true}
              />
            }
          >
            <Route
              path="/movies"
              element={
                <Movies
                  savedMovies={savedMovies}
                  onCardDelete={handleCardDelete}
                  handleLikeClick={handleCardLike}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <SavedMovies
                  savedMovies={savedMovies}
                  onCardDelete={handleCardDelete}
                  handleLikeClick={handleCardLike}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  showFooter={false}
                  handleProfile={handleUpdateUser}
                  onLogout={handleLogout}
                />
              }
            />
          </Route>
        </Route>
        <Route
          path="/signin"
          element={<Login onLogin={handleLogin} />}
        />
        <Route
          path="/signup"
          element={<Register onRegister={handleRegister} />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
