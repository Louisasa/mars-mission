import React from "react";
import "./styles.css";
import FunFacts from "../FunFacts/FunFact";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Fun Facts
          <FunFacts />
        </p>
      </header>
    </div>
  );
};

export default App;
