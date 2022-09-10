import React from "react";
import "./pageStyles.css";
import MainCast from "../components/MainCast";
import FilmDetail from "../components/FilmDetail";
import Tag from "../components/Tag";
import Recommendation from "../components/Recommendation";
import { useParams } from "react-router-dom";

function DetailPage() {
  let params = useParams();
  const itemType = JSON.parse(localStorage.getItem("type"))
  console.log(typeof(itemType))
  // const itemType = JSON.parse(localStorage.getItem("type"))
  return (
    <div className="DetailPage_wrapper">
      <div className="DetailPage_FilmDetail_Wrapper">
      <p> id: {params.id}</p>
      <p> type: {itemType}</p>
        <FilmDetail movieId ={params.id} idType = {itemType} />
      </div>
      <div className="DetailPage_AdditionalDetails_Wrapper">
        <div className="DetailPage_CastAndTag_Wrapper">
          <div className="DetailPage_Cast">
              <MainCast movieId ={params.id} idType = {itemType} />
          </div>
            <Tag movieId ={params.id} idType = {itemType} />
        </div>
        <div className="DetailPage_Recommendation_Wrapper">
          <Recommendation movieId ={params.id} idType = {itemType} />
        </div>
      </div>
    </div>
  );
}
export default DetailPage;
