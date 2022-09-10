import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

function FilmResultList({ genresList }) {
  const [APIdata, setAPIdata] = useState(null);

  useEffect(() => {
    const genres_list_API = async () => {
      try {
        const apiResponse = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=bbeda772f02e59d1308c33d70a96e1ae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genresList}&with_watch_monetization_types=flatrate`
        );
        setAPIdata(apiResponse);
      } catch (error) {
        console.log({ error });
      }
    };
    genres_list_API();
  }, [genresList]);

  console.log(APIdata);
  console.log(genresList, "persoNameFilter");

  if (APIdata) {
    return (
      <>
        {APIdata.data.results.slice(0, 4).map((singleFilm) => {
          return (
            <Card
            key = {Math.random()}
            sx={{ flexBasis: "25vw", height: "fit-content" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="fit-content"
                  image={`https://image.tmdb.org/t/p/w500/${singleFilm.poster_path}`}
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
          );
        })}
      </>
    );
  }
}

export default FilmResultList;
