import "./pageStyles.css";
import React from "react";
import FilmResultList from "../components/FilmResultList";
import FilterBar from "../components/FilterBar";
function MoviePage() {
  const [genresList, setGenresList] = React.useState([]);
  const [yearList, setYearList] = React.useState([]);
  const [ratingList, setRatingList] = React.useState([]);

  const handleChange = (event) => {
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
        setYearList(value);
        break;
      case "ratings":
        setRatingList(value);
        break;
      default:
        console.log(event);
    }
  };
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
