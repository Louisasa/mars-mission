import React from "react";
import "./styles.scss";
import LandingPage from "../Layouts/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Quiz } from "../Quiz/index"; // File location finds the file "index" automatically

const App: React.FC = () => {
  return (
    <Router>
      {" "}
      {/*Everything from Router onwards is controlled by Router*/}
      <Routes>
        {" "}
        {/*Group of Routes*/}
        <Route path="/" element={<LandingPage />} />{" "}
        {/*URL mapping: input (path), output (element)*/}
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
};

export default App;
