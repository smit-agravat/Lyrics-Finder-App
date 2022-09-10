import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import '../css/Tracks.css'

export default function Tracks() {
  const currentTrack = useSelector((state) => state.tracks);

  if (currentTrack.currenttrack === null) {
    return <>{}</>;
  } else {
    return (
      <>
        {
          <div className="container col-10 bg-transparent">
            {currentTrack.currenttrack.map((item) => (
              <Card
                className="card"
                key={item.track.track_id}
              >
                <div
                  className="data"
                >
                  <p>
                    <strong>Title:-</strong>
                  </p>
                  <p>{item.track.track_name}</p>
                  <p>
                    <strong>Album Name:-</strong>
                  </p>
                  <p>{item.track.album_name}</p>
                  <p>
                    <strong>Artist Name:-</strong>
                  </p>
                  <p>{item.track.artist_name}</p>
                </div>
                <Link
                  to={`/lyrics/${item.track.commontrack_id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Button
                    variant="contained"
                    color="error"
                    style={{
                      margin: "1.5rem",
                    }}
                  >
                    Get Lyrics
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        }
      </>
    );
  }
}
