import "./FunFact.scss";
import FunFactCard from "./FunFactCard";
import { Fact } from "./factList";

export default function FunFactCategory(props: { facts: Fact[] }) {
  return (
    <div>
      <h1 className="fun-fact-heading">
        Fun facts on {props.facts[0].category}
      </h1>
      {props.facts.map((fact) => (
        <FunFactCard fact={fact} key={fact.id} />
      ))}
    </div>
  );
}
