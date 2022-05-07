import { TextField } from "@material-ui/core";
import { useRef } from "react";
import "./login.css";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="loginLogo">
            {/* <img src="assets/others/loginlogo.png" alt="" className="logoImg" /> */}
            <h3 className="logoText">doktertani</h3>
            <span className="loginDesc">
              Temukan solusi permasalahan pertanian bersama doktertani.
            </span>
          </div>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              className="loginInput"
              type="email"
              ref={email}
              required
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              className="loginInput"
              type="password"
              minLength="8"
              ref={password}
              required
            />
            <button className="loginButton">Masuk</button>
            <span className="loginForget">Lupa Kata Sandi?</span>
            <button className="registerButton">Buat Akun Baru</button>
          </form>
        </div>
      </div>
    </div>
  );
}
