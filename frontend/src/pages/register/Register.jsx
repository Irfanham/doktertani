import { TextField } from "@material-ui/core";
import "./register.css";

export default function Register() {
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="loginLogo">
            <img src="assets/others/loginlogo.png" alt="" className="logoImg" />
          </div>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <TextField
              id="password"
              label="Username"
              variant="outlined"
              className="loginInput"
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              className="loginInput"
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              className="loginInput"
            />
            <TextField
              id="password"
              label="Konfirmasi Password"
              variant="outlined"
              className="loginInput"
            />
            <button className="loginButton">Daftar</button>
            <button className="registerButton">Masuk ke Akun</button>
          </div>
        </div>
      </div>
    </div>
  );
}
