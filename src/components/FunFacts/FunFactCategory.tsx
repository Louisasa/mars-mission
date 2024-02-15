import "./FunFact.scss";
import { Fact } from "./factList";

export default function FunFactCategory(props: { facts: Fact[] }) {
  return (
    <body>
      {props.facts.map((fact) => (
        <div className="card-container">
          <div className="fact-container">
            <p className="title">{fact.title} </p>
            <img src={fact.image} alt="fact image" />
            <p className="content">{fact.content} </p>
          </div>
        </div>
      ))}
    </body>
  );
}
