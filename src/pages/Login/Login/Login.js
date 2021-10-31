import React from "react";
import "./Login.css";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const Login = () => {
  return (
    <div className="login">
      <h3>Please Login</h3>

      <GoogleLogin></GoogleLogin>
    </div>
  );
};

export default Login;
