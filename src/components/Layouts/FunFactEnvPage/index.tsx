import { factList } from "../../FunFacts/factList";
import FunFactCategory from "../../FunFacts/FunFactCategory";

export default function FunFactEnvPage() {
  return (
    <div>
      <FunFactCategory
        facts={factList.filter((cate) => cate.category === "environment")}
      />
    </div>
  );
}
