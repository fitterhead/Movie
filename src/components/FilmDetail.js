import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";

function FilmDetail({ movieId, idType }) {
  const [movie_trending_API_data, setMovie_trending_API_data] = useState(null);

  useEffect(() => {
    const movie_trending_API = async () => {
      try {
        const apiResponse = await axios.get(
          `https://api.themoviedb.org/3/${idType}/${movieId}?api_key=bbeda772f02e59d1308c33d70a96e1ae&language=en-US&append_to_response=images`
        );
        console.log(apiResponse);
        setMovie_trending_API_data(apiResponse);
      } catch (error) {
        console.log({ error });
      }
    };
    movie_trending_API();
  }, []);

  console.log(movie_trending_API_data, "data");

  if (movie_trending_API_data) {
    return (
      <Card
        sx={{
          maxWidth: "100vw",
          maxHeight: "30vw",
          backgroundColor: "yellow",
          display: "flex",
          flexDirection: "row",
          padding: "1rem 5rem 1rem 5rem",
        }}
      >
        <CardMedia
          sx={{
            flexBasis: "20vw",
            // aspectRatio:"auto"
          }}
          // height="fit-content"
          component="img"
          image={`https://image.tmdb.org/t/p/w500${movie_trending_API_data.data.poster_path}`}
        alt={`${movie_trending_API_data.data.title}`}
        />
        <CardContent
          sx={{
            display: "flex",
            width: "70vw",
            flexDirection: "column",
            backgroundColor: "red",
          }}
        >
          <Typography paragraph>
            {movie_trending_API_data.data.title?movie_trending_API_data.data.title:movie_trending_API_data.data.original_name}
          </Typography>
          <Typography paragraph>
            {/* {movie_trending_API_data.data.genres} */}
          </Typography>
          <Typography paragraph>
            {movie_trending_API_data.data.release_date?movie_trending_API_data.data.release_date:movie_trending_API_data.data.first_air_date}
          </Typography>
          <Typography paragraph>
            {movie_trending_API_data.data.runtime?movie_trending_API_data.data.runtime:movie_trending_API_data.data.episode_run_time}
          </Typography>
          <Typography paragraph>
            {movie_trending_API_data.data.vote_average}
          </Typography>
          <Typography paragraph>
            {movie_trending_API_data.data.overview}
          </Typography>
          <Typography paragraph>
            {/* {movie_trending_API_data.data.cast and production} */}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default FilmDetail;
