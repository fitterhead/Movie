import React, { useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

const ratings = ["5", "6", "7", "8"];
const years = ["1990", "2000", "2010", "2020"];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

function FilterBar({ genresList, yearList, ratingList, handleChange }) {
  const [genres, setGenres] = useState();

  useEffect(() => {
    const genres_list_API = async () => {
      try {
        const apiResponse_genre = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=bbeda772f02e59d1308c33d70a96e1ae&language=en-US"
        );
        setGenres(apiResponse_genre.data.genres);
      } catch (error) {
        console.log({ error });
      }
    };
    genres_list_API();
  }, []);

  if (genres) {
    return (
      <div>
        <FormControl sx={{ m: 1, width: 1 / 5 }}>
          <InputLabel id="demo-multiple-genres-label">Genres</InputLabel>
          <Select
            labelId="demo-multiple-genres-label"
            id="demo-multiple-genres"
            name="genres"
            multiple
            value={genresList}
            onChange={handleChange}
            input={<OutlinedInput />}
            MenuProps={MenuProps}
          >
            {genres.map((tagItem) => (
              <MenuItem key={tagItem.name} value={tagItem.id}>
                {tagItem.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: 1 / 5 }}>
          <InputLabel id="demo-multiple-years-label">Years</InputLabel>
          <Select
            labelId="demo-multiple-years-label"
            id="demo-multiple-years"
            multiple
            name="years"
            value={yearList}
            onChange={handleChange}
            input={<OutlinedInput />}
            MenuProps={MenuProps}
          >
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: 1 / 5 }}>
          <InputLabel id="demo-multiple-years-label">Ratings</InputLabel>
          <Select
            labelId="demo-multiple-Ratings-label"
            id="demo-multiple-Ratings"
            multiple
            name="ratings"
            value={ratingList}
            onChange={handleChange}
            input={<OutlinedInput />}
            MenuProps={MenuProps}
          >
            {ratings.map((rating) => (
              <MenuItem key={rating} value={rating}>
                {rating}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default FilterBar;
