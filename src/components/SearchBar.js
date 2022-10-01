import axios from "axios";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

function SearchBar() {
  const [APIdata, setAPIdata] = useState(null);
  const [name, setName] = useState("");
  console.log(name, "name");
  useEffect(() => {
    const movie_trending_API = async () => {
      try {
        const apiResponse = await axios.get(
          `https://api.themoviedb.org/3/search/multi?api_key=bbeda772f02e59d1308c33d70a96e1ae&language=en-US&query=${name}&page=1&include_adult=false`
        );
        console.log(apiResponse);
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
          fullWidth
          sx={{ backgroundColor: "white" }}
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={name}
          autoComplete="on"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></TextField>
        {APIdata
          ? APIdata.data.results.slice(0, 10).map((singleResult) => {
              if (name !== "") {
                console.log(singleResult.name);
                return (
                  <MenuItem key={singleResult.name} value={singleResult.name}>
                    {singleResult.name}
                  </MenuItem>
                );
              }
            })
          : console.log("fail")}
      </div>
    </>
  );
}

export default SearchBar;
