// import "./styles.css";
import React, { useEffect, useState } from "react";
import apiService from "../app/apiService";
import { API_KEY } from "../app/config";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import SingleCard from "./SingleCard";
// import Button from "@mui/material/Button";
// import CardActions from "@mui/material/CardActions";

function FilmCarousel() {
  const [APIdata, setAPIdata] = useState(null);
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();

  useEffect(() => {
    const movie_trending_API = async () => {
      try {
        const apiResponse = await apiService.get(
          `/trending/movie/week?api_key=${API_KEY}`
        );
        console.log(apiResponse);

        // console.log(apiResponse.data.results[1]);
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
      <div 
      className="carousel_wrapper"
      >
        {APIdata.data.results.map((singleFilm) => {
          return <SingleCard prop={singleFilm} />;
        })}
      </div>
    );
  }
}

export default FilmCarousel;
