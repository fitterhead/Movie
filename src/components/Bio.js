import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Bio({ actorId }) {
  const [movie_ActorDetail_API_data, setmovie_ActorDetail_API_data] =
    useState(null);

  useEffect(() => {
    const movie_ActorDetail_API = async () => {
      try {
        const apiResponse = await axios.get(
          `https://api.themoviedb.org/3/person/${actorId}?api_key=bbeda772f02e59d1308c33d70a96e1ae&language=en-US`
        );
        console.log(apiResponse, "actor Bio");
        setmovie_ActorDetail_API_data(apiResponse);
      } catch (error) {
        console.log({ error });
      }
    };
    movie_ActorDetail_API();
  }, []);

  if (movie_ActorDetail_API_data) {
    return (
      <Card
       elevation={0}
       sx={{padding:"0rem 1rem 1rem 1rem"}}
      >
        <CardMedia
          component="img"
          // height="140"
          image={`https://image.tmdb.org/t/p/w500/${movie_ActorDetail_API_data.data.profile_path}`}
          alt="green iguana"
        />
        <CardActions>
          <Button size="small">Insta</Button>
          <Button size="small">Website</Button>
        </CardActions>
        <CardContent>
          <Typography sx={{ overflow: "hidden" }} variant="h10" component="div">
            {movie_ActorDetail_API_data.data.name}
          </Typography>
          <Typography
            sx={{ overflow: "hidden" }}
            variant="body2"
            color="text.secondary"
          >
            Known For:{movie_ActorDetail_API_data.data.known_for_department}
            <br />
            Known Credits:{movie_ActorDetail_API_data.data.homepage}
            <br />
            Gender:{movie_ActorDetail_API_data.data.gender}
            <br />
            Birthdate:{movie_ActorDetail_API_data.data.birthday}
            <br />
            Place of Birth:{movie_ActorDetail_API_data.data.place_of_birth}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default Bio;
