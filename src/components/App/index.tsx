import React from "react";
import "./styles.scss";
import PhotoViewer from "../PhotoViewer/PhotoViewer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../Layouts/LandingPage";
import MarsRoverPage from "../Layouts/MarsRoverPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/marsrover" element={<MarsRoverPage />} />
      </Routes>
    </Router>
  );
};

export default App;
