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

function SingleCard({ prop }) {
  console.log(prop, "aaa");
  const navigate = useNavigate();

  // return (
  //   <p>AAA</p>
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
      // onClick={() => navigate(`/movie/${prop.id}`)}
      onClick={() => {
        navigate(`/movie/${prop.id}`);
        localStorage.setItem("type", JSON.stringify(`movie`));
      }}
    >
      {/* <p>{prop.id}</p> */}
      <Card sx={{ maxWidth: "10rem" }}>
        <CardMedia

          sx={{ borderRadius: "0.7rem" }}
          component="img"
          alt="film"
          height="100"
          image={`https://image.tmdb.org/t/p/w500/${prop.poster_path}`}
        />
        <CardContent

        //  sx ={{Height: ""}}
        >
          <Typography
            sx={{ padding: "0.1em" }}
            gutterBottom
            variant="h10"
            component="div"
          >
            {prop.original_title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {prop.release_date}
          </Typography>
        </CardContent>
        {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions> */}
      </Card>
    </CardActionArea>
  );
}

export default SingleCard;
