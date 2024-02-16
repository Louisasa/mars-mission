import { factList } from "../../FunFacts/factList";
import FunFactCategory from "../../FunFacts/FunFactCategory";

export default function FunFactRoverPage() {
  return (
    <div className="gutter">
      <div className="rover-fun-fact-page layout">
        <FunFactCategory
          facts={factList.filter((cate) => cate.category === "rover")}
        />
      </div>
    </div>
  );
}
