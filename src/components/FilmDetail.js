import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";

function FilmDetail({ movieId, idType }) {
  const [movie_trending_API_data, setMovie_trending_API_data] = useState(null);
  useEffect(() => {
    const movie_trending_API = async () => {
      try {
        const apiResponse = await axios.get(
          `https://api.themoviedb.org/3/${idType}/${movieId}?api_key=bbeda772f02e59d1308c33d70a96e1ae&language=en-US&append_to_response=images`
        );
        console.log(apiResponse, "movie details");
        setMovie_trending_API_data(apiResponse.data);
      } catch (error) {
        console.log({ error });
      }
    };
    movie_trending_API();
  }, [movieId, idType]);

  console.log(movie_trending_API_data, "data");

  if (movie_trending_API_data) {
    return (
      <>
        <Card
          sx={{
            boxShadow: 0,
            maxHeight: "100vh",
            display: "flex",
            flexDirection: "row",
            padding: "1rem 4rem 1rem 4rem",
          }}
        >
          <CardMedia
            sx={{
              height: "100%",
              width: "auto",
            }}
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
            }}
          >
            <Paper
              sx={{
                padding: "0.5em",

                boxShadow: 0,
              }}
            >
              <Typography
                sx={{
                  boxShadow: 0,
                }}
                variant="h9"
                paragraph
              >
                {movie_trending_API_data.title
                  ? movie_trending_API_data.title
                  : movie_trending_API_data.original_name}
              </Typography>
              <Typography sx={{ marginBottom: "0" }} paragraph></Typography>

              <Typography variant="h7" paragraph>
                {movie_trending_API_data.release_date
                  ? movie_trending_API_data.release_date
                  : movie_trending_API_data.first_air_date}
              </Typography>
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
              <Typography paragraph></Typography>
            </Paper>
          </CardContent>
        </Card>
      </>
    );
  }
}

export default FilmDetail;
