// import "./styles.css";
import React, { useEffect, useState } from "react";
import apiService from "../app/apiService";
import { API_KEY } from "../app/config";
import SingleCard from "./SingleCard";

function FilmCarousel() {
  const [APIdata, setAPIdata] = useState(null);

  useEffect(() => {
    const movie_trending_API = async () => {
      try {
        const apiResponse = await apiService.get(
          `/trending/movie/week?api_key=${API_KEY}`
        );
        console.log(apiResponse);

        setAPIdata(apiResponse);
      } catch (error) {
        console.log({ error });
      }
    };
    movie_trending_API();
  }, []);

  console.log(APIdata, "data");

  if (APIdata) {
    return (
      <div className="carousel_wrapper">
        {APIdata.data.results.map((singleFilm) => {
          return <SingleCard prop={singleFilm} />;
        })}
      </div>
    );
  }
}

export default FilmCarousel;
