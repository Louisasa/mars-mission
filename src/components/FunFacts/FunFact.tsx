import React from "react";
import { factList } from "./factList";

// const facts = factList;
export default function FunFacts(props: any) {
  return (
    <div>
      <p>factList</p>
      <div className="card-container">
        <div className="fact-container">
          <img src={props.facts[1].image} alt="fact image" />
          <p className="content">{props.facts[1].content} </p>
        </div>
      </div>
    </div>
  );
}
