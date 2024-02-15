import { factList } from "../../FunFacts/factList";
import FunFactCategory from "../../FunFacts/FunFactCategory";

export default function FunFactRoverPage() {
  return (
    <div>
      <FunFactCategory
        facts={factList.filter((cate) => cate.category === "rover")}
      />
    </div>
  );
}
