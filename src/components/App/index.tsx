import React from "react";
import "./styles.scss";
import LandingPage from "../Layouts/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FunFactPage from "../Layouts/FunFactPage";

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
    </Router>
  );
};

export default App;
