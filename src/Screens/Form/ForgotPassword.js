/** @format */

import React from "react";
import googleImage from "../../Images/google 1.png";
import facebook from "../../Images/facebook.png";
import logo from "../../Images/logo.png";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="BackgroundImage">
      <div className="SignInBogForm">
        <div className="SinginForm" style={{backgroundColor : 'transparent' }}>
          <div className="left">
            <img src={logo} alt="logo" />
          </div>
          <div
            className="right"
            style={{ backgroundColor: "#F4F4F4", height: "100%"  , width : '40%' , paddingLeft : '5%'}}
          >
            <form>
              <div>
                <p>Create Password</p>
                <input
                  type="password"
                  style={{ border: "2px solid #099E8C"  , backgroundColor : 'transparent' ,boxShadow: "0px 2.125px 11.6875px rgba(0, 0, 0, 0.25)"}}
                />
              </div>
              <div>
                <p>Confirm Password</p>
                <input type="text"   style={{ border: "2px solid #099E8C"  , backgroundColor : 'transparent' ,boxShadow: "0px 2.125px 11.6875px rgba(0, 0, 0, 0.25)"}} />
              </div>

              <button
                style={{ marginTop: "40px" , width : '100%' }}
                onClick={() => navigate("/signin")}
              >
                Save
              </button>
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
                Already Have An Account{" "}
                <span
                  style={{ color: "#099e8c", cursor: "pointer" }}
                  onClick={() => navigate("/signin")}
                >
                  LOGIN
                </span>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
