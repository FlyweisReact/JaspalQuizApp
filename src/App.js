/** @format */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Activity from "./Screens/Activity";
import Categories from "./Screens/Categories";
import Events from "./Screens/Events";
import FifthScreen from "./Screens/FifthScreen";
import ForgotPassword from "./Screens/Form/ForgotPassword";
import Login from "./Screens/Form/Login";
import SignUp from "./Screens/Form/SignUp";
import Verify from "./Screens/Form/Verify";
import FourthScreen from "./Screens/FourthScreen";
import Home from "./Screens/Home";
import JoinGame from "./Screens/JoinGame";
import LeaderBoard from "./Screens/LeaderBoard";
import LoginScreen from "./Screens/Login/LoginScreen";
import Quiz from "./Screens/Quiz";
import Report from "./Screens/Report";
import SecondScreen from "./Screens/SecondScreen";
import ThirdScreen from "./Screens/ThirdScreen";
import SixthScreen from './Screens/SixthScreen';
import SeventhScreen from './Screens/SeventhScreen';
import UpcomingEvent from "./Screens/UpcomingEvent";
import Privacy from "./Components/Privacy";
import Terms from './Components/Terms';
import Help from './Components/Help';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/signIn" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetPassword" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/leaderBoard" element={<LeaderBoard />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/events" element={<Events />} />
          <Route path="/report" element={<Report />} />
          <Route path="/joinGame" element={<JoinGame />} />
          <Route path="/upcomingEvent" element={<UpcomingEvent />} />
          <Route path="/categories/:id" element={<Categories />} />
          <Route path='/quizQuestion/:id' element={<Quiz  />} />
          <Route path="/secondScreen" element={<SecondScreen />} />
          <Route path="/thirdScreen" element={<ThirdScreen />} />
          <Route path="/fourthScreen" element={<FourthScreen />} />
          <Route path="/fifthScreen" element={<FifthScreen />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/help" element={<Help />} />
          {/* --------------------------------- */}
          <Route path="/verify" element={<Verify />} />
          <Route path="/sixthScreen/:id" element={<SixthScreen /> } />
          <Route path="/seventhScreen/:id" element={<SeventhScreen />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
