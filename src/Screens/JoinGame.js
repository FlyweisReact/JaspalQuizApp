/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import img from '../Images/33.png'

const JoinGame = () => {
  const navigate = useNavigate()


  return (
    <>
      <Navbar />
      <div className="EventBidTitle">
        <p>QUIZ NAME</p>
      </div>

        <div className="JoinGameCenterImage">
            <img src={img} alt='' />
        </div>

        <div className="JoinGamemain">
            <p style={{color : '#006c5f'}}>Invite For The Live Challange</p>
            <p style={{fontWeight : 'bold'}}>Note : No. Of Question 15</p>
            <p>Played by Indivisual <br /> Relevent to your age groups </p>
            
            <button onClick={() => navigate("/categories")}>Join The Game</button>
        </div>


    </>
  );
};

export default JoinGame;
