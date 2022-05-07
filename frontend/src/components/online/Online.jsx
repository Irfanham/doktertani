import "./online.css";

export default function Online({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="friend">
      <div className="profileContainer">
        <div className="avaOnline">
          <img className="profileImg" src={PF + user.profilePicture} alt="" />
          <span className="friendOnline"></span>
        </div>
      </div>
      <span className="friendUsername">{user.username}</span>
    </li>
  );
}
