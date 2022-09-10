import "./pageStyles.css";
import React, { useEffect, useState } from "react";
import FilmResultList from "../components/FilmResultList";
import FilterBar from "../components/FilterBar";
function MoviePage() {
  // call the genres list and pass it down to filter bar
  const [genresList, setGenresList] = React.useState([]);
  const handleChange = (event) => {
    // console.log(event, "event")
    const {
      target: { value },
    } = event;
    setGenresList(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    console.log({ value });
  };
  //render the amount of film based on filter bar chosen value

  //create an initial state list of films.

  return (
    <>
      <div className="film_filterBar">
        <FilterBar genresList={genresList} handleChange={handleChange} />
      </div>
      <div className="film_resultList">
        <FilmResultList genresList={genresList} />
      </div>
    </>
  );
}

export default MoviePage;
