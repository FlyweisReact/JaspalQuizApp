import React from "react";
import googleImage from "../../Images/google 1.png";
import facebook from "../../Images/facebook.png";
import logo from "../../Images/logo.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://g2vpnbtr2b.execute-api.ap-south-1.amazonaws.com/dev/api/v1/auth/student/signup",
        {
          mobile: mobile,
          name: name,
          email: email,
          password: password,
        }
      );
      navigate("/signIn");
    } catch (err) {
      alert(err.message);
      console.log(err);
    }
  };

  //   console.log("mobile:"+mobile, "name:"+name, "email:"+email, "password:"+password);

  return (
    <div className="BackgroundImage ">
      <div className="SignInBogForm">
        <div className="SinginForm">
          <div className="left">
            <img src={logo} alt="logo" />
          </div>
          <div className="right">
            <p style={{ fontSize: "25px", fontWeight: "600" }}>
              Let the joy begin
            </p>
            <p style={{ fontSize: "25px", fontWeight: "600" }}>Signup</p>
            <form onSubmit={handleSubmit}>
              <div>
                <p>Mobile Number</p>
                <input
                  type="text"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div>
                <p>Full Name</p>
                <input type="text" onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <p>Email id</p>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <p>Password</p>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button style={{ marginTop: "20px" }}>Sign up</button>
              <p
                style={{
                  textAlign: "center",
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                or Signin with
              </p>

              <div className="socialDiv">
                <img src={googleImage} alt="google" />
                <img src={facebook} alt="google" />
              </div>

              <p style={{ textAlign: "center", marginTop: "20px" }}>
                Already Have An Account{" "}
                <span
                  style={{ color: "#099e8c", cursor: "pointer" }}
                  onClick={() => navigate("/signin")}
                >
                  LOGIN
                </span>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
