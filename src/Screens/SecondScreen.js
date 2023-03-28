/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import img from "../Images/43.png";

const SecondScreen = () => {
  const fileBtn = () => {
    const target = document.getElementById("file");
    target.click();
  };

  const navigate = useNavigate()

  return (
    <>
      <Navbar />

      <p
        style={{
          textAlign: "center",
          fontSize: "3rem",
          color: "#099e8c",
          marginTop: "2%",
          fontWeight: "600",
        }}
      >
        Create Quize
      </p>

      <div className="secondScreenFirst">
        <div className="left">
          <div className="inputs">
            <p>Name of the Quiz</p>
            <input type="text" />
          </div>

          <div className="inputs">
            <p>Add a Title Image</p>
            <input onClick={() => fileBtn()} />
            <input type="file" id="file" style={{ display: "none" }} />
          </div>

          <div className="inputs">
            <p>Select Language</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <select>
                <option>from</option>
              </select>
              <select>
                <option>two</option>
              </select>
            </div>
          </div>

          <div className="inputs">
            <p>Who can see this quiz?</p>
            <select>
              <option>Public, visible to everyone</option>
            </select>
          </div>

          <div className="btns">
            <button
              style={{
                backgroundColor: "#a9a0a0",
                border: "1px solid #a9a0a0",
              }}
            >
              CANCEL
            </button>
            <button
              style={{
                backgroundColor: "#216700",
                border: "1px solid #216700",
                color : '#fff'
              }}
              onClick={() => navigate("/thirdScreen")}
            >
              PLAY
            </button>
          </div>
        </div>
        <div className="right">
          <div className="inputs">
            <p>Choose subject</p>
            <select>
              <option  style={{backgroundColor : '#107e50' , color : '#fff' , padding : '5px'}}></option>
              <option style={{backgroundColor : '#107e50' , color : '#fff' , padding : '5px'}}>Mathematics</option>
              <option  style={{backgroundColor : '#107e50' , color : '#fff' , padding : '5px'}}>English</option>
              <option  style={{backgroundColor : '#107e50' , color : '#fff' , padding : '5px'}}>World Language</option>
              <option  style={{backgroundColor : '#107e50' , color : '#fff' , padding : '5px'}}>Chemistry</option>
              <option  style={{backgroundColor : '#107e50' , color : '#fff' , padding : '5px'}}>Biology</option>
              <option  style={{backgroundColor : '#107e50' , color : '#fff' , padding : '5px'}}>Arts </option>
              <option  style={{backgroundColor : '#107e50' , color : '#fff' , padding : '5px'}}>Computer </option>
              <option  style={{backgroundColor : '#107e50' , color : '#fff' , padding : '5px'}}>Geography </option>
              <option  style={{backgroundColor : '#107e50' , color : '#fff' , padding : '5px'}}>History </option>
              <option  style={{backgroundColor : '#107e50' , color : '#fff' , padding : '5px'}}>Science </option>
            </select>
          </div>

          <div className="inputs">
            <p>Select Language</p>
            <select>
              <option></option>
              <option>Mathematics</option>
            </select>
          </div>

          <div className="inputs">
            <p>Select Type</p>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondScreen;
