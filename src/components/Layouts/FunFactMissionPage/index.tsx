import { useEffect } from "react";
import { factList } from "../../FunFacts/factList";
import FunFactCategory from "../../FunFacts/FunFactCategory";

export default function FunFactMissionPage() {
  useEffect(() => {
    document.title = "Mars Mission | Mission Fun Facts";
  }, []);

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
