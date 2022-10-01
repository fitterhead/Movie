import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
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
          //   `https://api.themoviedb.org/3/discover/movie?api_key=bbeda772f02e59d1308c33d70a96e1ae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_keywords=${param}&with_watch_monetization_types=flatrate`
          `https://api.themoviedb.org/3/keyword/${param.id}/movies?api_key=bbeda772f02e59d1308c33d70a96e1ae&language=en-US&include_adult=false`
        );
        setAPIdata(fetchAPI_fx);
        // console.log({ fetchAPI_fx });
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
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
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
            // <Grid key={item.id}>
            //   <img
            //     src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            //     alt={item.title}
            //     loading="lazy"
            //   />
            //   <ImageListItemBar
            //     title={item.title}
            //     subtitle={item.author}
            //     actionIcon={
            //       <IconButton
            //         sx={{ color: "rgba(255, 255, 255, 0.54)" }}
            //         aria-label={`info about ${item.title}`}
            //       >
            //         <InfoIcon />
            //       </IconButton>
            //     }
            //   />
            // </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
}

export default KeywordResultPage;

// export default function MediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image="/static/images/cards/contemplative-reptile.jpg"
//         alt="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }

{
  /* <ImageList sx={{ width: 500, height: 450 }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">December</ListSubheader>
        </ImageListItem>
        {APIdata.data.results.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList> */
}
