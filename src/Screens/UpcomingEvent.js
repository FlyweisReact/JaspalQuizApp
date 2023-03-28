/** @format */

import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import img from "../Images/35.png";
import img2 from "../Images/36.png";
import img3 from "../Images/5.png";
import { useNavigate } from "react-router-dom";

const items = [
  { src: img },
  { src: img },
  { src: img },
  { src: img },
  { src: img },
];

const UpcomingEvent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="react-c">
            <img src={item.src} className="carousel-image" alt={item.alt} />
          </div>
        ))}
      </Slider>

      <div className="upcomingEventcenterImage">
        <img
          src={img2}
          alt=""
          onClick={() => navigate("/secondScreen")}
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className="upcomingEventSec">
        <p style={{ color: "red", fontSize: "3rem", fontWeight: "500" }}>
          Past Comming Event
        </p>

        <div className="up">
          <div>
            <p>Event Name</p>
            <p>Lorem Ipsum dolor sit amet, consecter adipscing elit</p>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <p>05/11/2022,</p>
            <p>09:30 am</p>
          </div>
        </div>

        <img src={img3} alt="" />
        <div className="bnts">
          <button
            style={{ backgroundColor: "#188a06", border: "1px solid #188a06" }}
          >
            Winner Name
          </button>
          <button
            style={{ backgroundColor: "#006c5f", border: "1px solid #006c5f" }}
          >
            View More
          </button>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvent;
