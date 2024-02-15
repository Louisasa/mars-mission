import "./FunFact.scss";
import { Fact } from "./factList";
import { Link } from "react-router-dom";

export default function FunFactCard(props: { fact: Fact; link?: string }) {
  return (
    <body>
      <div className="card-container">
        <div className="fact-container">
          <p className="title">
            {props.fact.title}{" "}
            {props.link && <Link to={props.link}>More facts</Link>}{" "}
          </p>
          <img src={props.fact.image} alt="fact image" />
          <p className="content">{props.fact.content} </p>
        </div>
      </div>
    </body>
  );
}
