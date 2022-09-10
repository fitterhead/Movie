import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";
import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";
// import Card from "@mui/material/Card";
// // import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";

const handleClick = () => {
  console.info("You clicked the Chip.");
};

function Tag({ movieId, idType }) {
  const [TagAPIData, setTagAPIData] = useState(null);

  useEffect(() => {
    const movie_keywords_API = async () => {
      try {
        const apiResponse = await axios.get(
          `https://api.themoviedb.org/3/${idType}/${movieId}/keywords?api_key=bbeda772f02e59d1308c33d70a96e1ae`
        );
        console.log(apiResponse);
        // console.log(apiResponse.data.results[1]);
        setTagAPIData(apiResponse);
      } catch (error) {
        console.log({ error });
      }
    };
    movie_keywords_API();
  }, []);

  console.log(TagAPIData, "data");

  if (TagAPIData)
    return (
      <div className="DetailPage_Tag">
        <div className="keyWords_info">
          <p>Status</p>
          <p>language</p>
          <p>budget</p>
          <p>Revenue</p>
        </div>
        <div className="keyWords_list">
          {
          idType==="tv"
          ?TagAPIData.data.results.map((singleKeyword) => {
            return (
              <Chip
                label={singleKeyword.name}
                onClick={handleClick}
                key={Math.random()}
              ></Chip>
            );
          })
          :TagAPIData.data.keywords.map((singleKeyword) => {
            return (
              <Chip
                label={singleKeyword.name}
                onClick={handleClick}
                key={Math.random()}
              ></Chip>
            );
          })
          
          
          }
        </div>
      </div>
      // </div>
    );
}

export default Tag;
