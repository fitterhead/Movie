import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

function FilmResultList({ genresList, yearList, ratingList }) {
  const [APIdata, setAPIdata] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const genres_list_API = async () => {
      try {
        const apiResponse = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=bbeda772f02e59d1308c33d70a96e1ae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&&year=${yearList}&vote_average.gte=${ratingList}&with_genres=${genresList}&with_watch_monetization_types=flatrate`
        );

        setAPIdata(apiResponse);
      } catch (error) {
        console.log({ error });
      }
    };
    genres_list_API();
  }, [genresList, yearList, ratingList]);

  console.log(APIdata, "APIdata");

  if (APIdata) {
    return (
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ padding: "2rem" }}
      >
        {APIdata.data.results.map((item) => (
          <Grid key={item.id} item xs={3}>
            <Card
              sx={{
                maxWidth: 400,
                height: 300,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <CardMedia
                component="img"
                height="100"
                image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt="green iguana"
                sx={{ margin: "1rem", height: "100%" }}
              />
              <CardContent sx={{ width: 300 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography gutterBottom variant="body" component="div">
                  {item.release_date}
                </Typography>
                <CardActions sx={{ padding: "0px" }}>
                  <Button
                    onClick={() => {
                      localStorage.setItem("type", JSON.stringify(`movie`));
                      navigate(`/movie/${item.id}`);
                    }}
                    sx={{ padding: "1rem 0rem 0rem 0rem" }}
                    size="small"
                  >
                    More details
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default FilmResultList;
