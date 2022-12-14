import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

import React from "react";
import "./pageStyles.css";
import MainCast from "../components/MainCast";
import FilmDetail from "../components/FilmDetail";
import Tag from "../components/Tag";
import Recommendation from "../components/Recommendation";
import { useParams } from "react-router-dom";
function DetailPage() {
  let params = useParams();
  const itemType = JSON.parse(localStorage.getItem("type"));
  console.log(typeof itemType);
  console.log(itemType, "type id");
  console.log(params.id, "param id");
  return (
    <div>
      <div className="DetailPage_FilmDetail_Wrapper">
        <FilmDetail movieId={params.id} idType={itemType} />
      </div>

      <div className="DetailPage_AdditionalDetails_Wrapper">
        <div sx={{ backgroundColor: "red" }}>
          <Typography sx={{ padding: "3rem 0rem 0rem 1.1rem" }} variant="h6">
            Main Cast
          </Typography>
        </div>
        <div className="DetailPage_CastAndTag_Wrapper">
          <div className="DetailPage_Cast">
            <MainCast movieId={params.id} idType={itemType} />
          </div>
          <Tag movieId={params.id} idType={itemType} />
        </div>
        <Typography sx={{ padding: "3rem 0rem 0rem 1.1rem" }} variant="h6">
          Recommendation
        </Typography>
        <div>
          <div className="carousel_wrapper">
            <Recommendation movieId={params.id} idType={itemType} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailPage;
