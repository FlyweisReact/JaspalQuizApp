/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import img9 from "../Images/15-removebg-preview.png";
import img10 from "../Images/14-removebg-preview.png";
import img11 from "../Images/16.png";
import Dropdown from "react-bootstrap/Dropdown";
import img12 from "../Images/17.png";
import img13 from "../Images/18.png";
import img14 from "../Images/20.png";
import img15 from "../Images/21.png";
import img16 from "../Images/image_new.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const url =
  "https://g2vpnbtr2b.execute-api.ap-south-1.amazonaws.com/dev/api/v1/subjects";

const Home = () => {
  const [subjects, setSubjects] = useState();
  const navigate = useNavigate();
  const [topic, setTopic] = useState([]);
  const [ftopic, setFTopic] = useState([]);

  const getSubjects = async (url) => {
    const token = JSON.parse(localStorage.getItem("token"));
    // console.log(token);
    console.log(url);
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setSubjects(response.data.data);
    // console.log(subjects);
    //console.log(response.data.data[0]);
  };

  const getTopics = async (url)=>{
    const token = JSON.parse(localStorage.getItem("token"));
    try{
      const response = await axios.get(url,
        {
          headers:{Authorization:`Bearer ${token}`}
        }  
      )
      setTopic(response?.data?.data);
      console.log(response.data.data);
    }catch(err){
      console.log(err.message);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    getSubjects(url);
    getTopics("https://g2vpnbtr2b.execute-api.ap-south-1.amazonaws.com/dev/api/v1/topics");
  }, []);

  const handleClick = (quizName)=>{
    console.log("Clicked");
    const new_topic = topic.filter((item)=>{
      return item.topic === quizName;
    })
  setFTopic(new_topic);
  }

  return (
    <>
      <Navbar />

      <div className="HomePageBanner">
        <button>EXPLORE</button>
      </div>

      <div className="grid-cont">
        {subjects?.map((item, idx) => {
          return (
            <div
              className="grid-item"
              key={idx}
              
              style={{ cursor: "pointer" }}
            >
              <div className="image-container">
                <img src={img16} className="image-cont" alt="" 
                  onClick={()=>navigate(`/sixthScreen/${item._id}`)}
                />
                <div className="center-text" onClick={()=>navigate(`/sixthScreen/${item._id}`)}>
                  {item.subject}
                </div>
              </div>
            </div>
          );
        })}

      </div>

      <div className="HomeGame">
        <img src={img9} alt="" className="first" />
        <img src={img10} alt="" className="second" />
        <p className="head">Join a game ?</p>
        <div className="thressSec">
          <button
            style={{
              backgroundColor: "transparent",
              color: "#099e8c",
              border: "3px solid #099e8c",
            }}
          >
            Enter a Game Code
          </button>
          <div className="empty"></div>
          <button
            style={{
              border: "3px solid #004840",
              color: "#fff",
              backgroundColor: "#099e8c",
            }}
            onClick={() => navigate("/joinGame")}
          >
            {" "}
            Join The Game
          </button>
        </div>
      </div>

      <div className="centerImage">
        <img src={img11} alt="" />
      </div>
      <div className="HomeDrop">
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            style={{
              fontSize: "25px",
              fontWeight: " bold",
              backgroundColor: "#004840",
            }}
            onClick={()=>handleClick("KID QUIZ")}
          >
            KIDS QUIZ
          </Dropdown.Toggle>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            style={{
              fontSize: "25px",
              fontWeight: " bold",
              backgroundColor: "#004840",
            }}
            onClick={()=>handleClick("STUDENT QUIZ")}
          >
            STUDENT QUIZ
          </Dropdown.Toggle>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            style={{
              fontSize: "25px",
              fontWeight: " bold",
              backgroundColor: "#004840",
            }}
            onClick={()=>handleClick("COMPETITION")}
          >
            COMPETITION
          </Dropdown.Toggle>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            style={{
              fontSize: "25px",
              fontWeight: " bold",
              backgroundColor: "#004840",
            }}
            onClick={()=>handleClick("DIFFERENTIAL EQUATION")}
          >
            Differential equation
          </Dropdown.Toggle>
        </Dropdown>
      </div>
      <div className="rest-sixth-body">
        { ftopic?.map((item)=>{
          return (
            <div onClick={() => navigate(`/seventhScreen/${item._id}`)}>
            <img
              src={img12}
              alt=""
              
            />
            <p>{item.topic}</p>
            </div>
          );
        })
      }
      </div>

      {/*<div className="Homesixsec">

        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
        <img src={img12} alt="" onClick={() => navigate("/joinGame")} />
      </div>*/}

      <div className="HomeNewTwoSec">
        <img src={img13} alt="" className="second" />
        <p>User-------------------------------------------- : 15 points</p>
        <div className="twosec">
          <button
            style={{
              backgroundColor: "#188a06",
              color: "#FFF",
              border: "3px solid #099e8c",
            }}
            onClick={() => navigate("/upcomingEvent")}
          >
            Create The Game
          </button>
          <button
            style={{
              border: "3px solid #004840",
              color: "#fff",
              backgroundColor: "#0a8eab",
            }}
            onClick={() => navigate("/upcomingEvent")}
          >
            {" "}
            Join The Game
          </button>
        </div>
      </div>

      <div className="centerImage">
        <img src={img14} alt="" />
      </div>

      <div className="centerImage" onClick={() => navigate("/upcomingEvent")}>
        <img src={img15} alt="" style={{ width: "100%", cursor: "pointer" }} />
      </div>
    </>
  );
};

export default Home;
