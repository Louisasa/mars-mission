import React from "react";
import "./styles.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../Layouts/LandingPage";
import MarsRoverPage from "../Layouts/MarsRoverPage";
import NavBar from "../NavBar";
import QuizPage from "../Layouts/QuizPage";

const App: React.FC = () => {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/marsrover" element={<MarsRoverPage />} />
      </Routes>
    </Router>
  );
};

export default App;
