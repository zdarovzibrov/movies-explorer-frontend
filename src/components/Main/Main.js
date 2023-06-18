import React from "react";
import Header from "../Header/Header";
import Techs from "../Techs/Techs";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";

export default function Main() {
  return (
    <main>
      <Header />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </main>
  );
}
