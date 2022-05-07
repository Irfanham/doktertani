import "./content.css";
import { MoreHoriz, ThumbUp, ChatBubbleOutline } from "@material-ui/icons";
import { useState, useReducer } from "react";
import { useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

export default function Content({ content }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`/users?userId=${content.userId}`);
      setUser(res.data);
    };
    fetchUsers();
  }, [content.userId]);

  const initialState = {
    likes: content.likes.length,
  };

  const appReducer = (state, action) => {
    switch (action.type) {
      case "HANDLE_LIKE":
        return {
          ...state,
          likes: state.likes + action.payload,
        };
      case "HANDLE_DISLIKE":
        return {
          ...state,
          dislikes: state.dislikes + action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(appReducer, initialState);
  const { likes } = state;
  const [status, setStatus] = useState(null);

  const likeHandler = () => {
    if (status === "like") {
      setStatus(null);
      dispatch({
        type: "HANDLE_LIKE",
        payload: -1,
      });
    } else {
      setStatus("like");
      if (status === "dislike") {
        dispatch({
          type: "HANDLE_DISLIKE",
          payload: -1,
        });
      }
      dispatch({
        type: "HANDLE_LIKE",
        payload: 1,
      });
    }
  };

  return (
    <div className="contentContainer">
      <div className="contentWrapper">
        <div className="contentTop">
          <div className="contentLeft">
            <Link to={`profile/${user.username}`}>
              <img
                src={PF + user.profilePict || PF + "profile/noAvatar.png"}
                alt=""
                className="leftProfile"
              />
            </Link>
            <div className="contentCol">
              <span className="leftUser">{user.username}</span>
              <span className="leftDate">{format(content.createdAt)}</span>
            </div>
          </div>
          <div className="contentRight">
            <MoreHoriz className="moreIcon" htmlColor="black" />
          </div>
        </div>
        <div className="contentCenter">
          <span className="centerText">{content?.desc}</span>
          <img src={PF + content.img} alt="" className="centerImg" />
        </div>
        <div className="contentBottom">
          <div className="bottomLeft">
            <img className="likeIcon" src={`${PF}like.png`} alt="" />
            {/* <img className="likeIcon" src="/assets/heart.png" alt="" /> */}
            <span className="likeCounter">{likes}</span>
          </div>
          <div className="bottomRight">
            <span className="commentText">{content.comment} Komentar</span>
          </div>
        </div>
        <div className="contentAction">
          <div className="likeAction">
            <div className="lAction" onClick={likeHandler}>
              <ThumbUp className={status === "like" ? "btn active" : "btn"} />
              <span className={status === "like" ? "lText active" : "lText"}>
                Suka
              </span>
            </div>
          </div>
          <div className="commentAction">
            <div className="cAction">
              <ChatBubbleOutline className="cIcon" />
              <span className="cText">Komentar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
