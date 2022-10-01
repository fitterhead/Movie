import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
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
        console.log(apiResponse, "cast");
        setCastListData(apiResponse);
      } catch (error) {
        console.log({ error });
      }
    };
    actor_list_API();
  }, [movieId, idType]);

  console.log(CastListData, "data");

  if (CastListData)
    return (
      <div className="DetailPage_Cast">
        <div className="DetailPage_CastCarousel_Wrapper">
          {CastListData.data.cast.slice(0, 12).map((singleActor) => {
            return (
              <CardActionArea
                sx={{
                  height: "100",
                  textAlign: "center",
                  transition: "0.2s",
                  "&:hover": {
                    transform: "scale(1.15)",
                  },
                }}
                key={Math.random()}
                onClick={() => navigate(`/actor/${singleActor.id}`)}
              >
                <Card
                  sx={{
                    boxShadow: 0,
                    width: "9rem",
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
