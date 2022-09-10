// import axios from "axios";
import React from "react";
import Bio from "../components/Bio";
import Filmography from "../components/Filmography";
import "./pageStyles.css";
import { useParams } from "react-router-dom";


function ActorPage() {
  let params = useParams();
    return (
      <div className="ActorPage_Wrapper">
        <div className="ActorPage_Avatar_And_Bio">
          <Bio actorId = {params.id} />
        </div>
        {/* <div className="ActorPage_Filmography"> */}
          <Filmography actorId = {params.id} />
        {/* </div> */}
      </div>
    );
  }


export default ActorPage;
