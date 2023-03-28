import React from "react";
import img12 from "../Images/17.png";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const SixthScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(id);
  const [topic, setTopic] = useState();
  const url =
    "https://g2vpnbtr2b.execute-api.ap-south-1.amazonaws.com/dev/api/v1/topics";

  const getTopics = async (url) => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      //console.log(response.data.data);
      setTopic(response.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getTopics(url);
  }, []);

 // console.log(topi);

  const selectedTopics = topic?.filter((item) => {
    return item.subject === id;
  });
  //console.log(selectedTopics);
  // console.log(selectedTopics);

  return (
    <>
      <div className="sixth-top-cont">
        <h3 style={{ textAlign: "center", "padding-top": "5px" }}>
          Topics
        </h3>
      </div>
      <div className="rest-sixth-body">
        {selectedTopics?.map((item) => {
           //  console.log(item.quizLists);
          return (
           <div onClick={() => navigate(`/seventhScreen/${item._id}`)}>
            <img
              src={img12}
              alt=""
              
            />
            <p>{item.topic}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SixthScreen;
