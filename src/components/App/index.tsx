import React from "react";
import "./styles.scss";
import LandingPage from "../Layouts/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FunFactPage from "../Layouts/FunFactPage";
import FunFactRoverPage from "../Layouts/FunFactRoverPage";
import FunFactMissionPage from "../Layouts/FunFactMissionPage";
import FunFactEnvPage from "../Layouts/FunFactEnvPage";

const App: React.FC = () => {
  // const facts: [] = factList;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Routes>
        <Route path="/funfact" element={<FunFactPage />} />
      </Routes>
      <Routes>
        <Route path="/funfact/rover" element={<FunFactRoverPage />} />
      </Routes>
      <Routes>
        <Route path="/funfact/mission" element={<FunFactMissionPage />} />
      </Routes>
      <Routes>
        <Route path="/funfact/environment" element={<FunFactEnvPage />} />
      </Routes>
    </Router>
  );
};

export default App;
