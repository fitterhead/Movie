import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import { CardActionArea, ListItem, ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";
// import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";

function Filmography({ actorId }) {
  const [Filmography_Data, setFilmography_Data] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const actorDetail_Filmography_API = async () => {
      try {
        const apiResponse = await axios.get(
          `https://api.themoviedb.org/3/person/${actorId}/combined_credits?api_key=bbeda772f02e59d1308c33d70a96e1ae&language=en-US&append_to_response=images`
        );
        console.log(apiResponse);
        // console.log(apiResponse.data.results[1]);
        setFilmography_Data(apiResponse);
      } catch (error) {
        console.log({ error });
      }
    };
    actorDetail_Filmography_API();
  }, []);

  console.log(Filmography_Data, "data");

  if (Filmography_Data) {
    return (
      <div className="ActorPage_Filmography">
        <div className="ActorPage_Filmography_Carousel">
          <div className="ActorPage_Filmography_Carousel_Wrapper">
            {Filmography_Data.data.cast.map((singleFilm) => {
              return (
                // <> <div className="test_box"></div></>
                <CardActionArea
                key={Math.random()}
                  onClick={() => {
                    singleFilm.media_type === "tv"
                      ? localStorage.setItem("type", JSON.stringify(`tv`))
                      : localStorage.setItem("type", JSON.stringify(`movie`));
                    navigate(`/movie/${singleFilm.id}`);
                  }}
                >
                  <Card sx={{ width: 200 }}>
                    <CardMedia
                      component="img"
                      height="80%"
                      image={`https://image.tmdb.org/t/p/w500/${singleFilm.poster_path}`}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h7" component="div">
                        Name:
                        {singleFilm.title ? singleFilm.title : singleFilm.name}
                        <br />
                        Release:
                        {singleFilm.first_air_date
                          ? singleFilm.first_air_date
                          : singleFilm.release_date}
                      </Typography>
                    </CardContent>
                  </Card>
                </CardActionArea>
              );
            })}
          </div>
        </div>
        <div className="ActorPage_Filmography_List">
          {Filmography_Data.data.cast.map((singleFilm) => {
            return (
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    singleFilm.media_type === "tv"
                      ? localStorage.setItem("type", JSON.stringify(`tv`))
                      : localStorage.setItem("type", JSON.stringify(`movie`));
                    navigate(`/movie/${singleFilm.id}`);
                  }}
                >
                  <ListItemText
                    primary={
                      singleFilm.title ? singleFilm.title : singleFilm.name
                    }
                    secondary={singleFilm.character}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </div>
      </div>
      // </div>
    );
  }
}

export default Filmography;
