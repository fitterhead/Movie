import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import BlankLayout from "../layouts/BlankLayout";
import MainLayout from "../layouts/MainLayout";
import ActorPage from "../pages/ActorPage";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import KeywordResultPage from "../pages/KeywordResultPage";
import LoginPage from "../pages/LoginPage";
import MoviePage from "../pages/MoviePage";
import NotFoundPage from "../pages/NotFoundPage";
import SearchPage from "../pages/SearchPage";
// import ModalPage from "../pages/ModalPage";
import AuthRequired from "./AuthRequired";
import FavouriteFilm from "../pages/FavouriteFilm";
import LoginModal from "../components/LoginModal";
// import AuthRequired from './AuthRequired'
import LoginModalMain from "../components/LoginModalMain";
import barba from '@barba/core';


function Router() {
  let location = useLocation();
  console.log(location, "location status");
  const state = location.state;
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movie/:id" element={<DetailPage />} />
          <Route path="movie" element={<MoviePage />} />
          <Route path="favouritefilm" element={<FavouriteFilm />} />
          <Route path="search/:id" element={<SearchPage />} />
          <Route path="keyword/:id" element={<KeywordResultPage />} />
          {/* <Route path="login" element={<LoginModal />} /> */}
          <Route path="login" element={<LoginModalMain />} />
          {/* <Route path="actor/:id" element={<AuthRequired><ActorPage /></AuthRequired>} /> */}
          <Route path="actor/:id" element={<ActorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
