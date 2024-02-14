// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { factList } from "../../FunFacts/factList";
import FunFacts from "../../FunFacts/FunFact";

export default function FunFactPage() {
  return (
    <div>
      <FunFacts facts={factList} />
    </div>
  );
}
