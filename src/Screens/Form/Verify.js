import React from 'react'
import logo from "../../Images/logo.png";
import { useNavigate } from 'react-router-dom';

const Verify = () => {
    const navigate = useNavigate()
  return (
    <div className="BackgroundImage">
    <div className="SignInBogForm">
      <div className="verificationOtpForm">
        <div className="left">
          <img src={logo} alt="logo" />
        </div>
        <div className="right">
          <p className='head'>Enter verification code</p>
          <p className='subHead'>Enter 4 digit code that send to <br /> your mobile</p>
          <form>
          <div>
            <input type='text' />
            <input type='text' />
            <input type='text' />
            <input type='text' />
          </div>
          
            <button onClick={() => navigate("/fifthScreen")}>Continue</button>
                <p className='resend'>Do not receive code? <span style={{color : '#099e8c'}}>Resend it</span></p>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}


export default Verify