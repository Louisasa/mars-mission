import { factList } from "../../FunFacts/factList";
import FunFactCategory from "../../FunFacts/FunFactCategory";

export default function FunFactMissionPage() {
  return (
    <div className="gutter">
      <div className="mission-fun-fact-page layout">
        <FunFactCategory
          facts={factList.filter((cate: any) => cate.category === "mission")}
        />
      </div>
    </div>
  );
}
