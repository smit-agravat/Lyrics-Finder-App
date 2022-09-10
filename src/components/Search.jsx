import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  getDataStart,
  getDataSuccess,
  getDataFaild,
} from "../Redux/tracksSlice";
import Card from '@mui/material/Card';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import '../css/Search.css'

const Search = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const GetData = async () => {
    try {
      dispatch(getDataStart());
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${input}&page_size=10&page=1&s_track_rating=desc&apikey=1cc475299754dbb28050474a0f66d46c`
      );
      dispatch(getDataSuccess(res.data.message.body.track_list));
    } catch (err) {
      dispatch(getDataFaild());
      console.log(err);
    }
  };

  return (
    <div className="container col-6 bg-transparent">
      <Card
        style={{
          marginTop: "5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: "0.9",
        }}
      >
        <h3 style={{ marginTop: "1rem" }}>
          Get Lyrics for your favorite songs
        </h3>
        <FormControl
          style={{
            marginTop: "2rem",
            width: "100%",
            padding: "1rem",
          }}
        >
          <InputLabel htmlFor="song" style={{ width: "100%" }}>
            Name of song
          </InputLabel>
          <Input
            onChange={(e) => {
              setInput(e.target.value);
            }}
            id="song"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <Button
          onClick={GetData}
          variant="contained"
          color="primary"
          style={{ margin: "1rem" }}
        >
          {" "}
          Search{" "}
        </Button>
      </Card>
    </div>
  );
};

export default Search;
