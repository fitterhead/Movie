import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function KeywordResultPage() {
  const param = useParams();
  const navigate = useNavigate();
  console.log(param, "param");

  const [APIdata, setAPIdata] = useState(null);

  useEffect(() => {
    const callAPIFunction = async (param) => {
      try {
        const fetchAPI_fx = await axios.get(
          `https://api.themoviedb.org/3/keyword/${param.id}/movies?api_key=bbeda772f02e59d1308c33d70a96e1ae&language=en-US&include_adult=false`
        );
        setAPIdata(fetchAPI_fx);
      } catch (error) {
        console.log(error);
      }
    };
    callAPIFunction(param);
  }, [param]);

  console.log(APIdata, "tagdata");

  if (APIdata) {
    return (
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Card>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              Results from tag {JSON.parse(localStorage.getItem("tag"))}
            </Typography>
          </CardContent>
        </Card>
        <Grid
          container
          direction="row"
          spacing={{
            xs: 2,
            md: 3,
          }}
          columns={{
            md: 12,
          }}
          sx={{ padding: "2rem" }}
        >
          {APIdata.data.results.map((item) => (
            <Grid key={item.id} item xs={3}>
              <Card
                sx={{
                  maxWidth: 400,
                  height: 300,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <CardMedia
                  component="img"
                  height="100"
                  image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt="green iguana"
                  sx={{ margin: "1rem", height: "100%" }}
                />
                <CardContent sx={{ width: 300 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography gutterBottom variant="body" component="div">
                    {item.release_date}
                  </Typography>
                  <CardActions sx={{ padding: "0px" }}>
                    <Button
                      onClick={() => {
                        localStorage.setItem("type", JSON.stringify(`movie`));
                        navigate(`/movie/${item.id}`);
                      }}
                      sx={{ padding: "1rem 0rem 0rem 0rem" }}
                      size="small"
                    >
                      More details
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
}

export default KeywordResultPage;
