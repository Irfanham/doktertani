import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUsers();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        {/* <Sidebar /> */}
        <div className="profileRight">
          <div className="prightTop">
            <div className="profileCover">
              <div className="profileResp">
                <img
                  className="coverImg"
                  src={user.coverPict || PF + "profile/noCover.png"}
                  alt=""
                />
                <img
                  className="userImg"
                  src={PF + user.profilePict || PF + "profile/noAvatar.png"}
                  alt=""
                />
              </div>
            </div>
            <div className="profileInfo">
              <h4 className="infoName">{user.username}</h4>
              <span className="infoDesc">{user.bio}</span>
            </div>
          </div>
          <div className="prightBot">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
