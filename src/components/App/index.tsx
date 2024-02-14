import React from "react";
import "./styles.scss";
import LandingPage from "../Layouts/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../NavBar";
import MarsRover from "../NavBar/testMarsRover";

const App: React.FC = () => {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <body>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/MarsRover" element={<MarsRover />} />
        </Routes>
      </body>
    </Router>
  );
};

export default App;
