import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function Recommendation({ refGoto, movieId, idType }) {
  const [APIdata, setAPIdata] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const recommendation_list_API = async () => {
      try {
        const apiResponse = await axios.get(
          `https://api.themoviedb.org/3/${idType}/${movieId}/recommendations?api_key=bbeda772f02e59d1308c33d70a96e1ae&language=en-US&page=1`
        );
        console.log(apiResponse);

        setAPIdata(apiResponse);
      } catch (error) {
        console.log({ error });
      }
    };
    recommendation_list_API();
  }, []);

  console.log("data recommendation", APIdata);

  if (APIdata) {
    return (
      <>
        {APIdata.data.results.map((singleRecommendation) => {
          console.log({ singleRecommendation });
          return (
            // <Link to={`/movie/${singleRecommendation.id}`}>
              <Card sx={{ maxWidth: "20vw" }}>
                <CardActionArea>
                  <CardMedia
                    onClick={() => {
                      localStorage.setItem(
                        "type",
                        JSON.stringify(`${singleRecommendation.media_type}`)
                      );
                      // window.scrollTo({
                      //   top: 0,
                      //   left: 0,
                      //   behavior: "smooth",
                      // });
                      // navigate(`/movie/${singleRecommendation.id}`);
                    }}
                    component="img"
                    height="100"
                    image={`https://image.tmdb.org/t/p/w500/${singleRecommendation.backdrop_path}`}
                    alt="recommendation"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h10" component="div">
                      {singleRecommendation.title
                        ? singleRecommendation.title
                        : singleRecommendation.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    ></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            // </Link>
          );
        })}
      </>
    );
  }
}

export default Recommendation;
