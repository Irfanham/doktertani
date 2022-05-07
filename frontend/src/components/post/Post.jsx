import "./post.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

export default function Post() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="avaProvf">
            <img className="postProfile" src={`${PF}profile/2.jpeg`} alt="" />
          </div>
          <input
            placeholder="Apa yang anda pikirkan, Hams ?"
            type="text"
            className="postInput"
          />
        </div>
        <div className="postBottom">
          <div className="postOptions">
            <div className="postOption">
              <PermMedia htmlColor="green" className="optionIcon" />
              <span className="optionText">Foto/Video</span>
            </div>
            <div className="postOption">
              <Label htmlColor="blue" className="optionIcon" />
              <span className="optionText">Tandai</span>
            </div>
            <div className="postOption">
              <Room htmlColor="tomato" className="optionIcon" />
              <span className="optionText">Singgah</span>
            </div>
            <div className="postOption">
              <EmojiEmotions htmlColor="goldenrod" className="optionIcon" />
              <span className="optionText">Perasaan/Aktivitas</span>
            </div>
          </div>
          <button className="postButton">Kirim</button>
        </div>
      </div>
    </div>
  );
}
