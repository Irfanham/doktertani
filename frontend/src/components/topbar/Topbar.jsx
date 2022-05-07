import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Topbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topContainer">
      <div className="topLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">doktertani</span>
        </Link>
      </div>
      <div className="topCenter">
        <div className="searchBar">
          <input placeholder="Telusuri" className="searchInput"></input>
          <Search className="searchIcon" />
        </div>
      </div>
      <div className="topRight">
        <div className="topLinks">
          <Link to="/" style={{ textDecoration: "none", color: "#ffff" }}>
            <span className="topLink">Home</span>
          </Link>
          <Link
            to="/profile/:username"
            style={{ textDecoration: "none", color: "#ffff" }}
          >
            <span className="topLink">Profile</span>
          </Link>
        </div>
        <div className="topIcon">
          <div className="topIconItem">
            <Person />
            <span className="topIconBadge">1</span>
          </div>
          <div className="topIconItem">
            <Chat />
            <span className="topIconBadge">1</span>
          </div>
          <div className="topIconItem">
            <Notifications />
            <span className="topIconBadge">1</span>
          </div>
        </div>
      </div>
      <div className="avatopCircle">
        <img src={`${PF}profile/2.jpeg`} alt="" className="topImg" />
      </div>
    </div>
  );
}
