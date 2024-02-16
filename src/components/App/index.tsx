import React from "react";
import "./styles.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../Layouts/LandingPage";
import MarsRoverPage from "../Layouts/MarsRoverPage";
import WomenInSpace from "../Layouts/WomenInSpace";
import NavBar from "../NavBar";
import QuizPage from "../Layouts/QuizPage";

import FunFactPage from "../Layouts/FunFactPage";
import FunFactRoverPage from "../Layouts/FunFactRoverPage";
import FunFactMissionPage from "../Layouts/FunFactMissionPage";
import FunFactEnvPage from "../Layouts/FunFactEnvPage";

const App: React.FC = () => {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/marsrover" element={<MarsRoverPage />} />
        <Route path="/womeninspace" element={<WomenInSpace />} />
        <Route path="/funfact" element={<FunFactPage />} />
        <Route path="/funfact/rover" element={<FunFactRoverPage />} />
        <Route path="/funfact/mission" element={<FunFactMissionPage />} />
        <Route path="/funfact/environment" element={<FunFactEnvPage />} />
      </Routes>
    </Router>
  );
};

export default App;
