/** @format */

import React from "react";
import Navbar from "../Components/Navbar";
import img from "../Images/23.png";
import img2 from "../Images/22.png";
import { useState, useEffect } from "react";
import axios from "axios";

const Activity = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.data._id;
  const [activity, setActivity] = useState([]);
  const [rank, setRank] = useState('');
  const [totalP, setTotalP] = useState();
 console.log(user.data._id);
  const getActivity = async () => {
    const url = `https://g2vpnbtr2b.execute-api.ap-south-1.amazonaws.com/dev/api/v1/activities?userId=${id}`;
    try {
      const response = await axios.get(url);
      //console.log(response.data.data);
      setActivity(response.data.data);
      //console.log(activity?.[0]?.correct);
      setTotalP(response?.data?.total)
      //console.log(totalP);
    } catch (err) {
      console.log(err.message);
    }
  };
  const getRank = async () => {
    const url = `https://g2vpnbtr2b.execute-api.ap-south-1.amazonaws.com/dev/api/v1/leaderboards/${id}`;
    try{
      const response = await axios.get(url);
      console.log(response.data.rank);
      setRank(response?.data?.rank);
      //console.log(rank)
    }catch(err){
      console.log(err.message);
    }
  };
  useEffect(() => {
    getActivity();
    getRank();
  }, []);
  return (
    <>
      <Navbar />
      <p
        style={{
          textAlign: "center",
          fontSize: "3rem",
          color: "#006c5f",
          marginTop: "2%",
          fontWeight: "600",
        }}
      >
        Activity
      </p>

      <div className="activityTwosec">
        <div
          style={{ backgroundColor: "#188a06", border: "1px solid #188a06" }}
        >
          <p>Rank</p>
          <p>{rank}/{totalP}</p>
        </div>
        <div
          style={{ backgroundColor: "#006c5f", border: "1px solid #006c5f" }}
        >
          <p>Reward Earn</p>
          <p>***********</p>
        </div>
      </div>

      <p
        style={{
          textAlign: "center",
          fontSize: "3rem",
          color: "#006c5f",
          marginTop: "2%",
          fontWeight: "600",
        }}
      >
        Perfomance
      </p>

      <div className="activitybar">
        <div>
          <p className="first">Correct</p>
          <p className="second " style={{ color: "#188a06" }}>
            {activity?.correct}
          </p>
          <img src={img} alt="" />
        </div>
        <div>
          <p className="first">Incorrect</p>
          <p className="second" style={{ color: "#ff0000" }}>
            {activity?.inCorrect}
          </p>
          <img src={img2} alt="" />
        </div>
      </div>

      {/*
            <p
        style={{
          textAlign: "center",
          fontSize: "3rem",
          color: "#006c5f",
          marginTop: "2%",
          fontWeight: "600",
        }}
      >
        Summery
      </p>
      
      <div className="activityThreeSec">
        <button
          style={{ backgroundColor: "#2f8706", border: "1px solid #2f8706" }}
        >
          Correct
        </button>
        <button
          style={{ backgroundColor: "#ff0000", border: "1px solid #ff0000" }}
        >
          Incorrect
        </button>
        <button
          style={{ backgroundColor: "#ff0000", border: "1px solid #ff0000" }}
        >
          Incorrect
        </button>
      </div>*/}
    </>
  );
};

export default Activity;
