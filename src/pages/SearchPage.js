import axios from "axios";
import React, { useEffect, useState} from "react";
import "./pageStyles.css";
import TextField from "@mui/material/TextField";
// import Stack from "@mui/material/Stack";
// import Autocomplete from "@mui/material/Autocomplete";

function SearchPage() {
  const [APIdata, setAPIdata] = useState(null);
  const [name, setName] = useState("");
  console.log(name, "name");
  // const [query, setQuery] = useState("");
  useEffect(() => {
    const movie_trending_API = async () => {
      try {
        const apiResponse = await axios.get(
          `https://api.themoviedb.org/3/search/multi?api_key=bbeda772f02e59d1308c33d70a96e1ae&language=en-US&query=${name}&page=1&include_adult=false`
        );
        console.log(apiResponse);
        // console.log(apiResponse.data.results[1]);
        setAPIdata(apiResponse);
      } catch (error) {
        console.log({ error });
      }
    };
    movie_trending_API();
  }, [name]);

  console.log(APIdata, "data");

  return (

    <>
      <div className="MainPage_SearchBar">
     
        <TextField
        sx ={{fullWidth:"100vw"
      }}
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={name}
          autoComplete="on"
          // defaultValue=""
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      {APIdata
        // eslint-disable-next-line array-callback-return
        ? APIdata.data.results.slice(0,10).map((singleResult) => 
          {if(name !== "" )
          {return (
              <>
                <p>{singleResult.name}
                {singleResult.known_for_department}</p>
              </>
            );}}
          )
        : console.log("fail")}
    </>
  );
}

export default SearchPage;
