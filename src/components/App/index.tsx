import React from "react";
import "./styles.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../Layouts/LandingPage";
import MarsRoverPage from "../Layouts/MarsRoverPage";
import NavBar from "../NavBar";

const App: React.FC = () => {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <body>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/marsrover" element={<MarsRoverPage />} />
        </Routes>
      </body>
    </Router>
  );
};

export default App;
