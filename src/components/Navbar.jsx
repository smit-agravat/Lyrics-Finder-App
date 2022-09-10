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
        gap: "1rem",
      }}
    >
      <div
        className="logo"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          to={"/"}
          style={{ 
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.3rem",
            textDecoration: "none",
            color: "white" }}
        >
          <RiMusic2Fill />
          <p style={{marginTop:"1rem"}}>Lyrics Finder</p>
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
        <p style={{marginTop:"1rem"}}>agravatsmit@gmail.com</p>
      </div>
    </nav>
  );
}
