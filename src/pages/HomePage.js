import React, { useState } from "react";
import { Link } from "react-router-dom";
import FilmCarousel from "../components/FilmCarousel";
import SearchBar from "../components/SearchBar";
import TvCarousel from "../components/TvCarousel";
import ActorPage from "./ActorPage";
import DetailPage from "./DetailPage";
import "./pageStyles.css";
import SearchPage from "./SearchPage";
import Box from "@mui/material/Box";
import LoginPage from "./LoginPage";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import MoviePage from "./MoviePage";
import LoginModal from "../components/LoginModal";
import FavouriteFilm from "./FavouriteFilm";
function HomePage() {
  return (
    <>
      <Link to="movie/:id" element={<DetailPage />}>
        movie
      </Link>{" "}
      <br></br>
      <Link to="favouritefilm" element={<FavouriteFilm />}>
        FavouriteFilm
      </Link>{" "}
      <br></br>
      <LoginModal />

      <Link to="movie" element={<MoviePage />}>
        moviepage
      </Link>{" "}
      <Link to="search/:id" element={<SearchPage />}>
        search
      </Link>{" "}
      / /
      <Link to="actor/:id" element={<ActorPage />}>
        actor
      </Link>
      <Link to="login" element={<LoginPage />}>
        Login
      </Link>
      <Box sx={{ padding: "1rem", backgroundColor: "blue" }}>
        <SearchBar />
      </Box>
      <div className="MainPage_Wrapper">
        <div 
        // className="carousel_Wrapper"
        >
          <TvCarousel />
        </div>
        <div 
        // className="carousel_Wrapper"
        >
          <FilmCarousel />
        </div>
      </div>
    </>
  );
}

export default HomePage;
