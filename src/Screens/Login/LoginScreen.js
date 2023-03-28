/** @format */

import React from "react";
import "./Login.css";
import logo from "../../Images/image-removebg-preview 1.png";
import Google from "../../Images/google 1.png";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();

  React.useEffect(()=>{
    console.log(JSON.parse(localStorage.getItem("user")));
  })

  return (
    <div className="BackgroundImage">
      <div className="LoginDiv">
        <div className="upper">
          <img src={logo} alt="" className="logo" />
        </div>

        <div className="down">
          <p className="connect">Connect with</p>

          <div className="icons">
            <i
              class="fa-brands fa-square-facebook"
              style={{ color: "#1976d2" }}
            ></i>
            <div></div>
            <img src={Google} alt="" />
          </div>

          <div className="inputs">
            <input type="text" />
            <div>
              {" "}
              <p>OR</p>
            </div>
            <input type="text" />
          </div>

          <button className="btn-1" onClick={() => navigate("/signin")}>
            Login With Mobile Number
          </button>
          <button className="btn-2" onClick={() => navigate("/signup")}>
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
