import React from "react";
import "./styles.scss";
import LandingPage from "../Layouts/LandingPage";
import PhotoViewer from "../PhotoViewer/PhotoViewer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/rovers" element={<PhotoViewer />} />
      </Routes>
    </Router>
  );
};

export default App;
