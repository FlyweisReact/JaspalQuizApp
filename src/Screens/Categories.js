import React from "react";
import Navbar from "../Components/Navbar";
import img from "../Images/38.png";
import img2 from "../Images/37.png";
import img3 from "../Images/39.png";
import img4 from "../Images/40.png";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Categories = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();
  
  // console.log(id);
  const url = `https://g2vpnbtr2b.execute-api.ap-south-1.amazonaws.com/dev/api/v1/quizlists/${id}`;

  const [quiz, setQuizName] = useState();

  const getQuizList = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data.data.quizName);
      setQuizName(response.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  //console.log(quiz.Quiz.length);
  useEffect(() => {
    getQuizList(url);
  }, []);

  //  console.log(user);
  return (
    <>
      <Navbar />

      <div className="categorycenter">
        <img src={img} alt="" />
        <p>
          {user.data.name} <br /> {user?.data?.role}
        </p>
        <img src={img2} alt="" />
      </div>

      <div className="categoryQuiz">
        <img src={img3} alt="" />
        <div className="time">
          <p>Time 02:00</p>
          <p>No. of Questions {quiz?.Quiz?.length}</p>
        </div>
        <button onClick={() => navigate(`/quizQuestion/${id}`)}>PLAY NOW</button>
        <div className="subject">
          <img src={img4} alt="" />
          <p>Subject Name</p>
        </div>
      </div>
    </>
  );
};

export default Categories;
