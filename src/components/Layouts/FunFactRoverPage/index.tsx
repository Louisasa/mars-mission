import { factList } from "../../FunFacts/factList";
import FunFactRover from "../../FunFacts/FunFactRover";

export default function FunFactRoverPage() {
  return (
    <div>
      <FunFactRover
        facts={factList.filter((cate) => cate.category === "rover")}
      />
    </div>
  );
}
