import React from "react";
import { factList } from "./factList";
import "./FunFact.scss";

// const facts = factList;
export default function FunFacts(props: any) {
  return (
    <body>
      <p>factList</p>
      <div className="card-container">
        <div className="fact-container">
          <p className="title">{props.facts[1].title} </p>
          <img src={props.facts[1].image} alt="fact image" />
          <p className="content">{props.facts[1].content} </p>
        </div>
      </div>
    </body>
  );
}
