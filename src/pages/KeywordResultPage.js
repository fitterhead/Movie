import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

function KeywordResultPage() {
  const param = useParams();
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

  console.log(APIdata, "data");

  if (APIdata) {
    return (
      <ImageList sx={{ width: 500, height: 450 }}>
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
      </ImageList>
    );
  }
}

export default KeywordResultPage;
