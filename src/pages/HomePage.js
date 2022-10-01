import React from "react";
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
import MoviePage from "./MoviePage";
import LoginModal from "../components/LoginModal";
import FavouriteFilm from "./FavouriteFilm";
function HomePage() {
  return (
    <>
      {/* <Link to="movie/:id" element={<DetailPage />}>
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
      </Link> */}
      <Box sx={{ padding: "1rem", 
      // backgroundColor: "blue" 
      }}>
        <SearchBar />
      </Box>
      <div className="MainPage_Wrapper">
        <div>
          <TvCarousel />
        </div>
        <div>
          <FilmCarousel />
        </div>
      </div>
    </>
  );
}

export default HomePage;
