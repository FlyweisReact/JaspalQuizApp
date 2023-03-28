import React from 'react'
import Navbar from '../Components/Navbar'
import img from '../Images/50.png'
import img1 from '../Images/51.png'
import img2 from '../Images/image 2.png'

const FourthScreen = () => {
  const totalPoints = localStorage.getItem("points");
  console.log(totalPoints);
  return (
    <>
        <Navbar />

        <div className='fourthScreenFirst'>
            <img src={img} alt='' />
        </div>

        <div className='fourthScreenSecond'>
        <p style={{fontSize : '35px' , fontWeight : '600'}}>You Score</p>
            <div>
                <img src={img1} alt='' />
                <p>{totalPoints} <br /> Points</p>
            </div>
            <p style={{fontSize : '20px' , fontWeight : '600'}}>Total Time Taken</p>
            <p style={{backgroundColor : "#e8a701" , color : '#fff' , width : '100px' , display  : 'block' , margin : 'auto' , marginBottom : '8%'}}>2 Min  12 sec</p>
        </div>

        <div className='fourthScreenThird'>
        <img src={img2} alt='' />
        </div>
    </>
  )
}

export default FourthScreen