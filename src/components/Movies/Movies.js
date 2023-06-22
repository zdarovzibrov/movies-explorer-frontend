import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const movieData = [
    { id: 1, image: '/images/movies/picture_1.png', title: "33 слова о дизайне", duration: "1ч42м" },
    { id: 2, image: '/images/movies/picture_2.png', title: "33 слова о дизайне", duration: "1ч42м" },
    { id: 3, image: '/images/movies/picture_3.png', title: "33 слова о дизайне", duration: "1ч42м" },
    { id: 4, image: '/images/movies/picture_4.png', title: "33 слова о дизайне", duration: "1ч42м" },
    { id: 5, image: '/images/movies/picture_5.png', title: "33 слова о дизайне", duration: "1ч42м" },
    { id: 6, image: '/images/movies/picture_6.png', title: "33 слова о дизайне", duration: "1ч42м" },
    { id: 7, image: '/images/movies/picture_7.png', title: "33 слова о дизайне", duration: "1ч42м" },
    { id: 8, image: '/images/movies/picture_8.png', title: "33 слова о дизайне", duration: "1ч42м" },
    { id: 9, image: '/images/movies/picture_9.png', title: "33 слова о дизайне", duration: "1ч42м" },
    { id: 10, image: '/images/movies/picture_10.png', title: "33 слова о дизайне", duration: "1ч42м" },
    { id: 11, image: '/images/movies/picture_11.png', title: "33 слова о дизайне", duration: "1ч42м" },
    { id: 12, image: '/images/movies/picture_12.png', title: "33 слова о дизайне", duration: "1ч42м" },
    { id: 13, image: '/images/movies/picture_13.png', title: "33 слова о дизайне", duration: "1ч42м" },
    { id: 14, image: '/images/movies/picture_14.png', title: "33 слова о дизайне", duration: "1ч42м" },
    { id: 15, image: '/images/movies/picture_15.png', title: "33 слова о дизайне", duration: "1ч42м" },
    { id: 16, image: '/images/movies/picture_16.png', title: "33 слова о дизайне", duration: "1ч42м" },
];

export default function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList movies={movieData} />
    </>
  );
}
