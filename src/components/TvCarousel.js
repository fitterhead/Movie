import "./styles.css";
import React, { useEffect, useState } from "react";
import apiService from "../app/apiService";
import { API_KEY } from "../app/config";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

function TvCarousel() {
  const [APIdata, setAPIdata] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const movie_trending_API = async () => {
      try {
        const apiResponse = await apiService.get(
          `/trending/tv/week?api_key=${API_KEY}`
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
          return (
            <CardActionArea
              sx={{
                height: "fit-content",
                textAlign: "center",
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.15)",
                },
              }}
              key={Math.random()}
              onClick={() => {
                navigate(`/movie/${singleFilm.id}`);
                localStorage.setItem("type", JSON.stringify(`tv`));
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
                  <Typography
                    sx={{ padding: "0.1em" }}
                    gutterBottom
                    variant="h10"
                    component="div"
                  >
                    {singleFilm.original_name}{" "}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {singleFilm.first_air_date}
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          );
        })}
      </div>
    );
  }
}

export default TvCarousel;
