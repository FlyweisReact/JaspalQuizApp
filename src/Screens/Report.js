import React from "react";
import Navbar from "../Components/Navbar";
import img from "../Images/29.png";
import img2 from "../Images/30.png";
import img3 from "../Images/31.png";
import img4 from "../Images/32.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Report = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  //console.log(user.data);
  const id = user?.data?._id;
  const [report, setReport] = useState();
  //console.log(id);
  const url = `https://g2vpnbtr2b.execute-api.ap-south-1.amazonaws.com/dev/api/v1/reports/?userId=${id}`;
  const getReport = async (url) => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log(response.data.data);
      setReport(response?.data?.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getReport(url);
  }, []);

  //console.log("report ",report);

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
        Report
      </p>
     
      

      {report?.map((item) => {
        return (
          <div className="reportThreesec">
            <img src={img} alt="" />
            <p>{item?.testName ? item?.testName : "hello"}</p>
             <p>{item?.scorePercentage}</p>
            </div>
        );
      })}
      
 

      {/*   <div className='reportThreesec'>
                <img src={img} alt='' />
                <p>Test Name</p>
                <p>80%</p>
            </div>
            <div className='reportThreesec'>
                <img src={img2} alt='' />
                <p>Test Name</p>
                <p>80%</p>
            </div>
            <div className='reportThreesec'>
                <img src={img3} alt='' />
                <p>Test Name</p>
            </div>
            <div className='reportThreesec'>
                <img src={img4} alt='' />
                <p>Test Name</p>
        </div>*/}
    </>
  );
};

export default Report;
