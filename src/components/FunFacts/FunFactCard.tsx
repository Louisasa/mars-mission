import "./FunFact.scss";
import { Fact } from "./factList";
import { Link } from "react-router-dom";

export default function FunFactCard(props: { fact: Fact; link?: string }) {
  return (
    <div>
      <div className="card-container">
        <div className="fact-container">
          <p className="title">{props.fact.title} </p>
          <img src={props.fact.image} alt="fact image" />
          <p className="content">{props.fact.content} </p>
          <p>
            {props.link && (
              <Link to={props.link} className="link">
                See more facts on {props.fact.category}
              </Link>
            )}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
