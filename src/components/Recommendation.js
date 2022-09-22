import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


// import "./styles.css";
function Recommendation({ movieId, idType }) {
  const [APIdata, setAPIdata] = useState(null);

  useEffect(() => {
    const recommendation_list_API = async () => {
      try {
        const apiResponse = await axios.get(
          `https://api.themoviedb.org/3/${idType}/${movieId}/recommendations?api_key=bbeda772f02e59d1308c33d70a96e1ae&language=en-US&page=1`
        );
        console.log(apiResponse);
        // console.log(apiResponse.data.results[1]);
        setAPIdata(apiResponse);
      } catch (error) {
        console.log({ error });
      }
    };
    recommendation_list_API();
  }, []);

  console.log(APIdata, "data");

  if (APIdata) {
    return (
      <>
        {APIdata.data.results.map((singleRecommendation) => {
        console.log({singleRecommendation})
          return (
<Card sx={{ maxWidth: "30vw" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`https://image.tmdb.org/t/p/w500/${singleRecommendation.backdrop_path}`}
          alt="recommendation"
        />
        <CardContent>
          <Typography gutterBottom variant="h10" component="div">
          {singleRecommendation.name}
          </Typography>
          <Typography variant="body2" color="text.secondary"
          // sx={{overflow:"hidden"}}
          >
          {/* {singleRecommendation.overview} */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>





            // <div className="recommendation_singleCard"

            // key={Math.random()}>
            //   <div className="recommendation_singleCard_poster">
            //     <img
            //       src={`https://image.tmdb.org/t/p/w500/${singleRecommendation.backdrop_path}`}
            //       alt="nope"
            //     ></img>
            //   </div>
            //   <div className="recommendation_singleCard_info">
            //     Name:{singleRecommendation.original_title}
            //     <br />
            //     Release:{singleRecommendation.release_date}
            //     <br />
            //   </div>
            // </div>
          );
        })}
      </>
    );
  }
}

export default Recommendation;
