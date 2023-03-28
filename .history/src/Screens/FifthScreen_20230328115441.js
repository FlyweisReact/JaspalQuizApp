/** @format */

import React from "react";
import logo from "../Images/logo.png";
import { useNavigate } from "react-router-dom";
import img from "../Images/g10.png";

const FifthScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="BackgroundImage">
        <div className="SignInBogForm">
          <div className="ChoseRoleDiv">
            <div className="left">
              <img src={logo} alt="logo" />
            </div>
            <div className="right">
              <div
                className="choose"
                style={{
                  backgroundColor: "#73d0cb",
                  border: "3px solid #00716b",
                }}
                onClick={() => navigate("/home")}
              >
                <img src={img} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.{" "}
                </p>
              </div>
              <p
                style={{
                  color: "#00716b",
                  marginTop: "5px",
                  marginBottom: "5px",
                  fontWeight: "600",
                  fontSize: "24px",
                }}
              >
                Student
              </p>
              <div
                className="choose"
                style={{
                  backgroundColor: "#faba5f",
                  border: "3px solid #dd8100",
                }}
                onClick={() => navigate("/home")}
              >
                <img src={img} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.{" "}
                </p>
              </div>
              <p
                style={{
                  color: "#dd8100",
                  marginTop: "5px",
                  marginBottom: "5px",
                  fontWeight: "600",
                  fontSize: "24px",
                }}
              >
                Teacher
              </p>
              <div
                className="choose"
                style={{
                  backgroundColor: "#95fffa",
                  border: "3px solid #00716b",
                }}
                onClick={() => navigate("/home")}
              >
                <img src={img} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.{" "}
                </p>
              </div>
              <p
                style={{
                  color: "#40bcb5",
                  marginTop: "5px",
                  marginBottom: "5px",
                  fontWeight: "600",
                  fontSize: "24px",
                }}
              >
                Aspirant
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthScreen;
