/** @format */

import React from "react";
import googleImage from "../../Images/google 1.png";
import facebook from "../../Images/facebook.png";
import logo from "../../Images/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useContext } from "react";

const Login = () => {
  const navigate = useNavigate();
  //const [item, setItem] = React.useState([]);
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //const user = {mobile, password};
      const response = await axios.post(
        "https://g2vpnbtr2b.execute-api.ap-south-1.amazonaws.com/dev/api/v1/auth/student/login",
        {
          mobile,
          password,
        }
      );
      localStorage.setItem('user', JSON.stringify(response.data));
      localStorage.setItem('token',JSON.stringify(response.data.accessToken));
      //console.log(localStorage.getItem('user'));
      setSuccess(true);
      //console.log(response.data.accessToken);
      navigate("/home");
    } catch (err) {
      alert("Invalid credentials");
      console.log(err.message);
    }
    console.log(mobile, password);
    console.log("Submitted!");
    setMobile("");
    setPassword("");
  };

  return (
    <div className="BackgroundImage">
      <div className="SignInBogForm">
        <div className="SinginForm">
          <div className="left">
            <img src={logo} alt="logo" />
          </div>
          <div className="right">
            <p style={{ fontSize: "25px", fontWeight: "600" }}>Sign In</p>
            <form onSubmit={handleSubmit}>
              <div>
                <p>Mobile Number</p>
                <input
                  type="text"
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <div>
                <p>Password</p>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <p
                style={{ textAlign: "right", cursor: "pointer" }}
                onClick={() => navigate("/forgetPassword")}
              >
                forgot Password?
              </p>
              <button type="submit">Login</button>

              <p
                style={{
                  textAlign: "center",
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                or Login with
              </p>

              <div className="socialDiv">
                <img src={googleImage} alt="google" />
                <img src={facebook} alt="google" />
              </div>

              <p style={{ textAlign: "center", marginTop: "20px" }}>
                Don't Have An Account{" "}
                <span
                  style={{ color: "#099e8c", cursor: "pointer" }}
                  onClick={() => navigate("/signup")}
                >
                  SIGNUP
                </span>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
