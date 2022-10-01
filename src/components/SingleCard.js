import React from "react";
// import apiService from "../app/apiService";
// import { API_KEY } from "../app/config";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SingleCard({ prop }) {
  console.log(prop, "aaa");
  const navigate = useNavigate();

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
        navigate(`/movie/${prop.id}`);
        localStorage.setItem("type", JSON.stringify(`movie`));
      }}
    >
      <Card sx={{ maxWidth: "10rem" }}>
        <CardMedia
          sx={{ borderRadius: "0.7rem" }}
          component="img"
          alt="film"
          height="100"
          image={`https://image.tmdb.org/t/p/w500/${prop.poster_path}`}
        />
        <CardContent>
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
      </Card>
    </CardActionArea>
  );
}

export default SingleCard;
