import { RiMusic2Fill } from "react-icons/ri";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        className="logo"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <Link to={"/"} style={{textDecoration:"none", color:"white"}}>
          <RiMusic2Fill />
          Lyrics Finder
        </Link>
      </div>
      <div
        className="email"
        style={{
          paddingRight: "1rem",
          fontSize: "1.2rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>agravatsmit@gmail.com</p>
      </div>
    </nav>
  );
}
