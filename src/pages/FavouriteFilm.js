import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";

function FavouriteFilm() {
  const [favouriteList, setFavouriteList] = useState(null);
  const [removedBookId, setRemovedBookId] = useState(null);
  useEffect(() => {
    if (removedBookId) return;
    const actor_list_API = async () => {
      try {
        const apiResponse = await axios.get(`http://localhost:5000/favourite`);
        console.log(apiResponse, "favouriteList");
        setFavouriteList(apiResponse);
      } catch (error) {
        console.log({ error });
      }
    };
    actor_list_API();
  }, [removedBookId]);

  useEffect(() => {
    if (!removedBookId) return;
    const actor_list_API = async () => {
      try {
        const apiResponse = await axios.delete(
          `http://localhost:5000/favourite/${removedBookId}`
        );
        console.log(apiResponse, "favouriteList");
        setRemovedBookId("");
      } catch (error) {
        console.log({ error });
      }
    };
    actor_list_API();
  }, [removedBookId, favouriteList]);

  console.log(favouriteList, "dasdsdsdsdta");

  if (favouriteList) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "yellow",
          height: "70vh",
          padding: "1rem",
        }}
      >
        {favouriteList.data.map((singleFilm) => {
          return (
            <Card
              key={Math.random()}
              sx={{ maxWidth: "100vw", maxHeight: "20vh" }}
            >
              <CardActionArea>
                <CardContent>
                  <Button
                    onClick={() => {
                      setRemovedBookId(singleFilm.id);
                      console.log(removedBookId, "removed id");
                    }}
                  >
                    Remove
                  </Button>
                  <Typography gutterBottom variant="h5" component="div">
                    {singleFilm.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default FavouriteFilm;
