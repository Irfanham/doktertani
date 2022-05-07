import "./sidebar.css";
import {
  Group,
  Assistant,
  Bookmark,
  HelpOutline,
  Today,
} from "@material-ui/icons";
import CloseFriend from "../closeFriend/CloseFriend";
import { Users } from "../../dummyData";

export default function Sidebar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="sideContainer">
      <div className="sideWrapper">
        <ul className="sideList">
          <li className="sideListItem">
            <div className="avaCircl">
              <img className="ItemAva" alt="mami" src={`${PF}profile/2.jpeg`} />
            </div>
            <span className="ItemText">Irfan Hamami</span>
          </li>
          <li className="sideListItem">
            <Group className="ItemIcon" />
            <span className="ItemText">Grup</span>
          </li>
          <li className="sideListItem">
            <Assistant className="ItemIcon" />
            <span className="ItemText">Konsultasi</span>
          </li>
          <li className="sideListItem">
            <Bookmark className="ItemIcon" />
            <span className="ItemText">Tersimpan</span>
          </li>
          <li className="sideListItem">
            <HelpOutline className="ItemIcon" />
            <span className="ItemText">Pertanyaan</span>
          </li>
          <li className="sideListItem">
            <Today className="ItemIcon" />
            <span className="ItemText">Acara</span>
          </li>
        </ul>
        <button className="sideButton">Tampilkan Lebih</button>
        <hr className="sideHr" />
        <ul className="FriendList">
          {Users.map((i) => (
            <CloseFriend key={i.id} user={i} />
          ))}
        </ul>
      </div>
    </div>
  );
}
