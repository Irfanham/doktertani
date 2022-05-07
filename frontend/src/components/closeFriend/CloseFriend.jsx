import "./closeFriend.css";

export default function CloseFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div>
      <li className="Friend">
        <div className="avaFrien">
          <img src={PF + user.profilePicture} alt="" className="friendImg" />
        </div>
        <span className="friendName">{user.username}</span>
      </li>
    </div>
  );
}
