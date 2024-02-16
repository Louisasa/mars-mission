import { factList } from "../../FunFacts/factList";
import FunFactCategory from "../../FunFacts/FunFactCategory";

export default function FunFactEnvPage() {
  return (
    <div className="gutter">
      <div className="env-fun-fact-page layout">
        <FunFactCategory
          facts={factList.filter((cate) => cate.category === "environment")}
        />
      </div>
    </div>
  );
}
