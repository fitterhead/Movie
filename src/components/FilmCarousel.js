import "./styles.css";
import React, { useEffect, useState } from "react";
import apiService from "../app/apiService";
import { API_KEY } from "../app/config";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
// import Button from "@mui/material/Button";
// import CardActions from "@mui/material/CardActions";
function FilmCarousel() {

 
  const [APIdata, setAPIdata] = useState(null);
  const location = useLocation();
  const state = location.state
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
      <div className="movie_carousel_wrapper">
        {APIdata.data.results.map((singleFilm) => {
          return (
            <CardActionArea
              sx={{
                height: "fit-content",
                textAlign: "center",
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.15)",
                  // boxShadow: `0 6px 12px 0
                  //   .rotate(-12)
                  //   .darken(1)
                  //   .fade(0.5)}`
                },
              }}
              key={Math.random()}
              // onClick={() => console.log(singleFilm.id)}
              // onClick={() => navigate(`/movie/${singleFilm.id}`)}
              onClick={() => {
                navigate(`/movie/${singleFilm.id}`);
                localStorage.setItem("type", JSON.stringify(`movie`));
                

              }}
            >
              <Card sx={{ maxWidth: "10rem", Height: "max-content" }}>
                <CardMedia
                  sx={{ borderRadius: "0.7rem" }}
                  component="img"
                  alt="film"
                  height="100"
                  image={`https://image.tmdb.org/t/p/w500/${singleFilm.poster_path}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h10" component="div">
                    {singleFilm.original_title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {singleFilm.release_date}
                  </Typography>
                </CardContent>
                {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions> */}
              </Card>
            </CardActionArea>
          );
        })}
      </div>
    );
  }
}

export default FilmCarousel;
