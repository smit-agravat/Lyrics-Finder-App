import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import "../css/Lyrics.css";

export default function Lyrics() {
  const { id } = useParams();
  const [info, setInfo] = useState([]);
  const [lyrics, setLyrics] = useState([]);

  useEffect(() => {
    const getLyrics = async () => {
      try {
        const res = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?commontrack_id=${id}&apikey=1cc475299754dbb28050474a0f66d46c`
        );
        setLyrics(res.data.message.body);
      } catch (err) {
        console.log(err);
      }
    };
    getLyrics();

    const getTrackInfo = async () => {
      try {
        const res = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?commontrack_id=${id}&apikey=1cc475299754dbb28050474a0f66d46c`
        );
        setInfo(res.data.message.body);
      } catch (err) {
        console.log(err);
      }
    };
    getTrackInfo();
  }, []);

  const Lyrics = Object.values(lyrics);

  const TrackInfo = Object.values(info);

  if (TrackInfo === null && Lyrics === null) {
    return <>{}</>;
  } else {
    return (
      <>
        {TrackInfo &&
          TrackInfo.map((item) => (
            <div key={item.track_id} className="container col-8 bg-transparent">
              <Card className="infocard">
                <div className="artistName">
                  <p>
                    <strong>Artist Name :-</strong>
                  </p>
                  <p>{item.artist_name}</p>
                </div>
                <div className="albumName">
                  <p>
                    <strong>Album Name :-</strong>
                  </p>
                  <p>{item.album_name}</p>
                </div>
                <div className="trackName">
                  <p>
                    <strong>Track Name :-</strong>
                  </p>
                  <p>{item.track_name}</p>
                </div>
              </Card>
            </div>
          ))}
        {Lyrics &&
          Lyrics.map((item) => (
            <div
              key={item.lyrics_id}
              className="container col-8 bg-transparent"
            >
              <Card
                style={{
                  marginTop: "2rem",
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: "1",
                }}
              >
                <CardHeader title="Lyrics......" />
                <p>{item.lyrics_body}</p>
                <Button variant="contained" color="primary" href="/">
                  Go Back
                </Button>
              </Card>
            </div>
          ))}
      </>
    );
  }
}
