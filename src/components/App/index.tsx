import React from "react";
import "./styles.css";
import FunFacts from "../FunFacts/FunFact";
import { factList } from "../FunFacts/factList";

const App: React.FC = () => {
  // const facts: [] = factList;
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Fun Facts
          <FunFacts facts={factList} />
        </p>
      </header>
    </div>
  );
};

export default App;
