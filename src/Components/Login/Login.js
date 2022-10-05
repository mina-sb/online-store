import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import "./Login.scss";

const Login = () => {
  const { loginState } = useContext(AppContext);
  const [showLogin, setShowLogin] = loginState;

  return (
    <div className={`login ${showLogin ? "login-show" : ""}`}>
      <h3 className="login-title">LOGIN</h3>
      <hr className="hr" />
      <h4 className="login-sub-title">Great to have you back!</h4>
      <input placeholder="Email Adress" className="login-input" />
      <br />
      <input placeholder="Password" className="login-input" />
      <span className="forget-password">Forgot your password?</span>
      <a className="login-btn">Log In</a>
      <a className="register-btn">
        Don’t have an account?<span>Register now</span>
      </a>
    </div>
  );
};

export default Login;
