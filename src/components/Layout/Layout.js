import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ banner, isMain, isLogged, showFooter }) {
  const location = useLocation();
  const isProfilePage = location.pathname === "/profile";

  return (
    <div className="container__main">
      <Header isDark={isMain} isLogged={isLogged} />
      {banner && banner}
      <div className="page">
        <div className="page__content">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
      {!isProfilePage && showFooter && <Footer />}
    </div>
  );
}
