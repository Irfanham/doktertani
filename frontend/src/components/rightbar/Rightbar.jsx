import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { Room } from "@material-ui/icons";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return (
      <>
        <div className="bdContainer">
          <img src={`${PF}gift.png`} alt="" className="bdImg" />
          <span className="bdText">
            <b>Mawar Melati</b> dan <b>3 teman lainnya</b> ulang tahun hari ini
          </span>
        </div>
        <img className="sponsor" src={`${PF}ad.png`} alt="" />
        <h4 className="rightTitle">Kontak</h4>
        <ul className="friendList">
          {Users.map((i) => (
            <Online key={i.id} user={i} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <div className="profileRightBar">
          <div className="profileWrapperRight">
            <h4 className="rightbarTitle">Data</h4>
            <div className="rightbarInfo">
              <div className="infoItem">
                <Room className="infoIcon" />
                <span className="infoKey">Tinggal di</span>
                <span className="infoValue">{user.city}</span>
              </div>
            </div>
            <h4 className="rightbarTitle">Teman</h4>
            <div className="rightbarFollowings">
              <div className="following">
                <img
                  src={`${PF}profile/1.jpeg`}
                  alt=""
                  className="followingImg"
                />
                <span className="followingName">Mawar Melati</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightContainer">
      <div className="rightWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
