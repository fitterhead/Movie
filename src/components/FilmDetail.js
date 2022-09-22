import axios from "axios";
import React, { useEffect, useState } from "react";
// import "./styles.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";

function FilmDetail({ movieId, idType }) {
  const [movie_trending_API_data, setMovie_trending_API_data] = useState(null);
  // const [addToFavourite, setAddToFavourite] = useState();

  const addToFavourite = async (data) => {
    try {
      console.log(data, "received");
      await axios.post(`http://localhost:5000/favourite`, data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const movie_trending_API = async () => {
      try {
        const apiResponse = await axios.get(
          `https://api.themoviedb.org/3/${idType}/${movieId}?api_key=bbeda772f02e59d1308c33d70a96e1ae&language=en-US&append_to_response=images`
        );
        console.log(apiResponse, "movie details");
        setMovie_trending_API_data(apiResponse.data);
        console.log(movie_trending_API_data.data, "datdsdsdsda");
      } catch (error) {
        console.log({ error });
      }
    };
    movie_trending_API();
  }, []);

  console.log(movie_trending_API_data, "data");

  if (movie_trending_API_data) {
    return (
      <>
      <Card
        sx={{
          boxShadow: 0,
          // width: "100vw",
          // height: "60vh",
          maxHeight: "100vh",
          // backgroundColor: "yellow",
          display: "flex",
          flexDirection: "row",
          padding: "1rem 4rem 1rem 4rem",
        }}
      >
        <CardMedia
          sx={{
            // flexBasis: "30vw",
            height: "100%",
            width: "auto",
            // maxHeight:"40vh"
            // aspectRatio:"auto"
          }}
          // height="fit-content"
          component="img"
          image={`https://image.tmdb.org/t/p/w500${movie_trending_API_data.poster_path}`}
          alt={`${movie_trending_API_data.title}`}
        />
        <CardContent
          sx={{
            display: "flex",
            boxShadow: 0,
            width: "30vw",
            height: "max-content",
            flexDirection: "column",
            // backgroundColor: "red",
          }}
        >
          {/* <Button
            onClick={() => {
              addToFavourite(movie_trending_API_data);
            }}
          >
            add to favourite
          </Button> */}

          <Paper
            sx={{
              padding: "0.5em",

              boxShadow: 0,
            }}
          >
            <Typography
              sx={{
                boxShadow: 0,

                padding: "0.5em 0.5em 0.2em 0.1em",
              }}
              variant="h9"
              paragraph
            >
              {movie_trending_API_data.title
                ? movie_trending_API_data.title
                : movie_trending_API_data.original_name}
            </Typography>
            <Typography sx={{ marginBottom: "0" }} paragraph>
              {/* {movie_trending_API_data.data.genres} */}
            </Typography>

            <Typography variant="h7" paragraph>
              {movie_trending_API_data.release_date
                ? movie_trending_API_data.release_date
                : movie_trending_API_data.first_air_date}
            </Typography>
            {/* <Typography paragraph sx={{ marginBottom: "0" }}>
              {movie_trending_API_data.runtime
                ? movie_trending_API_data.runtime
                : movie_trending_API_data.episode_run_time}
            </Typography> */}
            <Typography variant="h6">Rating</Typography>

            <Typography variant="body1" paragraph>
              {movie_trending_API_data.vote_average}
            </Typography>
            <Typography variant="h6">Overview</Typography>
            <Typography
              color="text.secondary"
              variant="body1"
              paragraph
              sx={{
                marginBottom: "0",
                padding: "0.5em 0.7em 0em 0em",
              }}
            >
              {movie_trending_API_data.overview}
            </Typography>
            <Typography paragraph>
              {/* {movie_trending_API_data.data.cast and production} */}
            </Typography>
          </Paper>
        </CardContent>
      </Card>
      </>
    );
  }
}

export default FilmDetail;
