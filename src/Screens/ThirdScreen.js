/** @format */

import React from "react";
import Navbar from "../Components/Navbar";
import img from "../Images/47.png";
import img2 from "../Images/44.png";
import img3 from "../Images/49.png";
import img4 from "../Images/45.png";
import img5 from "../Images/46.png";
import { useNavigate } from "react-router-dom";

const ThirdScreen = () => {
    const navigate = useNavigate()
  return (
    <>
      <Navbar />

      <div className="thirdScreenfirst">
        <p style={{ color: "#37b0a2" }}>Multiple Choice</p>
        <div>
          <p>45 sec</p>
          <img src={img} alt="" />
        </div>
      </div>

      <div className="thirdScreenSecond">
        <div className="left">
          <div className="mainDiv">
            <div className="subDiv">
              <img src={img2} alt="" />
              <p>Add Image</p>
            </div>
            <div className="subDiv">
              <img
                src={img4}
                alt=""
                style={{ height: "20px", marginLeft: "20px" }}
              />
              <p>Video</p>
            </div>
            <div className="subDiv">
              <img src={img5} alt="" />
              <p>Audio</p>
            </div>
          </div>
        </div>

        <div className="right">
          <div style={{ backgroundColor: "#e10260" }} className="under">
            <p>Type an answer option </p> <img src={img3} alt=" " />
          </div>
          <div style={{ backgroundColor: "#cf4b00" }} className="under">
            <p>Type an answer option </p> <img src={img3} alt=" " />
          </div>
          <div style={{ backgroundColor: "#079e95" }} className="under">
            <p>Type an answer option </p> <img src={img3} alt=" " />
          </div>
          <div style={{ backgroundColor: "#a30aa6" }} className="under">
            <p>Type an answer option </p> <img src={img3} alt=" " />
          </div>
        </div>
      </div>

      <div className="thirdScreenThird">
        <p
          style={{
            backgroundColor: "#0a775d",
            border: "1px solid #0a775d",
            color: "#fff",
            padding: "2px",
            borderRadius: "5px",
          }}
        >
          {" "}
          Add an answer explanation
        </p>
        <p
          style={{
            backgroundColor: "#5c6563",
            border: "1px solid #5c6563",
            color: "#fff",
            padding: "2px",
            borderRadius: "5px",
          }}
        >
          + ADD option
        </p>
      </div>

      <button className='thirdScreenFourth' onClick={() => navigate('/fourthScreen')}>Start</button>
    </>
  );
};

export default ThirdScreen;
