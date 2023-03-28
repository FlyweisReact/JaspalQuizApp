/** @format */

import React from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

const LeaderBoard = () => {
  const [boardItem, setBoardItem] = useState([]);

  const url = "https://g2vpnbtr2b.execute-api.ap-south-1.amazonaws.com/dev/api/v1/leaderboards/";

  const getLeaderBoard = async (url)=>{
    try{
      const response = await axios.get(url);
    //  console.log(response.data.data);
      setBoardItem(response.data.data);
    }catch(err){
      console.log(err.message);
    }
  }

  useEffect(() => {
    getLeaderBoard(url);
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
        Leader Board
      </p>

      <div className="leaderThreeSec">
        <p>Rank</p>
        <p>Name</p>
        <p>Score</p>
      </div>
      <hr style={{ width: "80%", marginLeft: "10%" }} />

      {
        boardItem?.map((item)=>{
          return (
          <div className="leaderBrown">
            <p>{item?.rank}</p>
            <p>{item?.userId?.name===null?"Name":item?.userId?.name}</p>
            <p>{item?.score}</p>
          </div>           
          )
        })
      }

    </>
  );
};

export default LeaderBoard;
