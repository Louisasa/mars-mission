import { factList } from "../../FunFacts/factList";
import FunFactCategory from "../../FunFacts/FunFactCategory";

export default function FunFactMissionPage() {
  return (
    <div>
      <FunFactCategory
        facts={factList.filter((cate: any) => cate.category === "mission")}
      />
    </div>
  );
}
