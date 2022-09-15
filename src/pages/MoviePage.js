import "./pageStyles.css";
import React, { useEffect, useState } from "react";
import FilmResultList from "../components/FilmResultList";
import FilterBar from "../components/FilterBar";
function MoviePage() {
  const [genresList, setGenresList] = React.useState([]);
  const [yearList, setYearList] = React.useState([]);
  const [ratingList, setRatingList] = React.useState([]);

  //step 1
  // create useState of year list and rating list
  //all of them need initial value

  const handleChange = (event) => {
    // console.log(event, "event")

    //STEP 2
    // create a filter of handleChange:
    // if name =genre  => setGenresList
    // if name =year  => setYearList
    // if name = rating  => setRatingList

    const name = event.target.name;
    const {
      target: { value },
    } = event;
    console.log({ value });
    switch (name) {
      case "genres":
        setGenresList(typeof value === "string" ? value.split(",") : value);
        break;
      case "years":
        // setYearList(typeof value === "string" ? value.split(",") : value);
        setYearList(value);
        break;
      case "ratings":
        // setRatingList(typeof value === "string" ? value.split(",") : value);
        setRatingList(value);
        break;
      default:
        console.log(event);
    }

    // setGenresList(typeof value === "string" ? value.split(",") : value);
    // console.log({ value });
    // console.log(name, "name");
  };
  // STEP 3
  // send genreList, yearList and ratingList to FilmResultList
  return (
    <>
      <div className="film_filterBar">
        <FilterBar
          genresList={genresList}
          yearList={yearList}
          ratingList={ratingList}
          handleChange={handleChange}
        />
      </div>
      <div className="film_resultList">
        <FilmResultList
          genresList={genresList}
          yearList={yearList}
          ratingList={ratingList}
        />
      </div>
    </>
  );
}

export default MoviePage;
