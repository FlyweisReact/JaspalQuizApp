/** @format */

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import img from "../Images/24.png";
import img2 from "../Images/25.png";
import img3 from "../Images/26.png";
import img4 from "../Images/27.png";
import img5 from "../Images/41.png";
import img6 from "../Images/42.png";
import axios from "axios";

const Quiz = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const url = `https://g2vpnbtr2b.execute-api.ap-south-1.amazonaws.com/dev/api/v1/quizlists/${id}`;
  //console.log(id);
  //const [answers, setAnswers] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);
  const [count, setCount] = React.useState(0);
  const [answer, setAnswer] = React.useState(Array(questions?.length).fill(""));
 // const answer = [];

 const[time, setTime] = React.useState(questions?.[count]?.timeLimit)
 //console.log(questions?.[count]?.timeLimit);


 const tmp = [];
  const [selectedOption, setSelectedOption] = React.useState();
  const getQuestion = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
         console.log(response.data.data);
      setQuestions(response.data.data.Quiz);
    } catch (err) {
      console.log(err.message);
    }
  };


  const handleClick = (value) => {
    
    const newans = [...answer];
    newans[count] = value;
    setAnswer(newans);  
  }
    
  //console.log(answer);

  React.useEffect(() => {
    getQuestion(url);
  }, []);


  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const token = JSON.parse(localStorage.getItem("token"));
      const { data } = await axios.post(
        `https://g2vpnbtr2b.execute-api.ap-south-1.amazonaws.com/dev/api/v1/submissions`,
          {
            "answer":answer,
            "timeRemaining":[30,30,40],
            "quizlistId":id
          },
          {
            headers:{Authorization:`Bearer ${token}`}
          }
      );
      navigate("/fourthScreen");
      console.log(data?.data?.totalPoints);
      localStorage.setItem("points", data?.data?.totalPoints);
    }catch(err){
      console.log(err.message);
    }

  }


  return (
    <>
      <Navbar />

      <div className="EventFiveSec">
        <img src={img} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <p className="first">{questions?.[count]?.timeLimit}</p>
        <p className="second">
          {count + 1}/{questions?.length}
        </p>
      </div>

      <div className="QuizQuestionfirst">
        <p>Question {count + 1}.</p>
        <div>
          {count > 0 && (
            <img
              src={img5}
              alt=""
              onClick={() => setCount((prev) => prev - 1)}
            />
          )}
          {count + 1 < questions?.length && (
            <img
              src={img6}
              alt=""
              onClick={() => setCount((prev) => prev + 1)}
            />
          )}
        </div>
      </div>

      <div className="QuizQuestionSecond">
        <p>{questions?.[count]?.question}</p>
      </div>

      <div className="QuizQuestionThird">
        <button onClick={() => handleClick(questions?.[count]?.options[0])}
          style={answer[count]===questions?.[count]?.options[0] ?{"background-color":"#ffc107"}:{"background-color":" #dac396"}}
        >
          {questions?.[count]?.options[0]}
        </button>
        <button onClick={() => handleClick(questions?.[count]?.options[1])}
        style={answer[count]===questions?.[count]?.options[1] ?{"background-color":"#ffc107"}:{"background-color":" #dac396"}}
        >
          {questions?.[count]?.options[1]}
        </button>
        <button onClick={() => handleClick(questions?.[count]?.options[2])}
        style={answer[count]===questions?.[count]?.options[2] ?{"background-color":"#ffc107"}:{"background-color":" #dac396"}}
        >
          {questions?.[count]?.options[2]}
        </button>
        <button onClick={() => handleClick(questions?.[count]?.options[3])}
        style={answer[count]===questions?.[count]?.options[3] ?{"background-color":"#ffc107"}:{"background-color":" #dac396"}}
        >
          {questions?.[count]?.options[3]}
        </button>
      </div>

      {count + 1 === questions?.length && (
        <div className="btn-submit-quiz">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}

      {/*<div className="QuizQuestionFourth">
        <p>Total Earned Point</p>
        <p>60</p>
      </div>*/}
    </>
  );
};

export default Quiz;
