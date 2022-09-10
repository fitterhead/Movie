import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

function MainCast({ movieId, idType }) {
  const [CastListData, setCastListData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const actor_list_API = async () => {
      try {
        const apiResponse = await axios.get(
          `https://api.themoviedb.org/3/${idType}/${movieId}/credits?api_key=bbeda772f02e59d1308c33d70a96e1ae&language=en-USappend_to_response=images`
        );
        console.log(apiResponse);
        // console.log(apiResponse.data.results[1]);
        setCastListData(apiResponse);
      } catch (error) {
        console.log({ error });
      }
    };
    actor_list_API();
  }, []);

  console.log(CastListData, "data");

  if (CastListData)
    return (
      <div className="DetailPage_Cast">
        <div className="DetailPage_CastCarousel_Wrapper">
          {CastListData.data.cast.slice(0, 12).map((singleActor) => {
            return (
              <Card key={Math.random()} sx={{ maxWidth: "10vw" }}>
                <CardActionArea
                  onClick={() => navigate(`/actor/${singleActor.id}`)}
                >
                  <CardMedia
                    component="img"
                    height="100"
                    image={`https://image.tmdb.org/t/p/w500/${singleActor.profile_path}`}
                    alt="green iguana"
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography gutterBottom variant="h7" component="div">
                      {singleActor.original_name}
                    </Typography>
                    <Typography variant="body4" color="text.secondary">
                      {singleActor.character}{" "}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </div>
      </div>
    );
}

export default MainCast;
