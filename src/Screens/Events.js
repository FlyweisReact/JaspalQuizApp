/** @format */

import React from "react";
import Navbar from "../Components/Navbar";
import img from "../Images/24.png";
import img2 from "../Images/25.png";
import img3 from "../Images/26.png";
import img4 from "../Images/27.png";
import img5 from "../Images/Event 1.png";
import axios from "axios";
import { useState, useEffect } from "react";

const Events = () => {
  const url = "https://g2vpnbtr2b.execute-api.ap-south-1.amazonaws.com/dev/api/v1/events";

  useEffect(() => {
    console.log("Hello");
    const token = JSON.parse(localStorage.getItem("token"));
    const getEvent = async (url)=>{
      try{
        const response = await axios.get(url,
          {
            headers:{Authorization:`Bearer ${token}`}
          }  
        )
        console.log(response.data);
      }catch(err){
        console.log(err.message);
      }
    }

    getEvent(url);
  }, []);

  return (
    <>
      <Navbar />

      <div className="EventFiveSec">
        <img src={img} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <p className="first">02:00</p>
        <p className="second">2/15</p>
      </div>

      <div className="EventBidTitle">
        <p>Event Name</p>
      </div>

      <div className="EventVideo">
        <img src={img5} alt="" />
      </div>

      <div className="EventP">
        <p>Details of the Events</p>
        <p>Read above paragraph and choose below option</p>
      </div>

      <button className="EventCenterBtn"> Join Event</button>
    </>
  );
};

export default Events;
