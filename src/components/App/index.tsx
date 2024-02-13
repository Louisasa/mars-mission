import React from "react";
import "./styles.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../NavBar/navBar";
import Landing from "../NavBar/testLanding";
import MarsRover from "../NavBar/testMarsRover";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/MarsRover" element={<MarsRover />} />
              {/* Define other routes that you need*/}
            </Routes>
          </main>
        </Router>
      </header>
    </div>
  );
};

export default App;
