import { useEffect } from "react";
import { factList } from "../../FunFacts/factList";
import FunFacts from "../../FunFacts/FunFact";

export default function FunFactPage() {
  useEffect(() => {
    document.title = "Mars Mission | Fun Facts";
  }, []);

  return (
    <div className="gutter">
      <div className="fun-fact-page layout">
        <FunFacts facts={factList} />
      </div>
    </div>
  );
}
