import axios from "axios";
import React, { useEffect, useState } from "react";
// import "./styles.css";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea, Paper } from "@mui/material";
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
        console.log(apiResponse, "cast");
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
              <CardActionArea
                sx={{
                  // height: "fit-content",
                  height: "100",
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
                onClick={() => navigate(`/actor/${singleActor.id}`)}
              >
                <Card
                  // sx={{ width: 200 }}
                  sx={{
                    boxShadow: 0,
                    width: "9rem",
                    // overflow:"hidden",
                    Height: "80vh",
                    paddingBottom: 0,
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ borderRadius: "0.7rem", boxShadow: 4 }}
                    height="100"
                    image={`https://image.tmdb.org/t/p/w500/${singleActor.profile_path}`}
                    alt="green iguana"
                  />
                  <CardContent
                    sx={{
                      height: "14vh",
                      padding: "0.5rem ",
                    }}
                  >
                    <Typography
                      sx={{ padding: "0.1em" }}
                      // gutterBottom
                      variant="h10"
                      component="div"
                    >
                      {singleActor.original_name}
                    </Typography>
                    <Typography
                      sx={{ padding: "0.1em" }}
                      variant="body2"
                      color="text.secondary"
                    >
                      {singleActor.character}{" "}
                    </Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            );
          })}
        </div>
      </div>
    );
}

export default MainCast;
