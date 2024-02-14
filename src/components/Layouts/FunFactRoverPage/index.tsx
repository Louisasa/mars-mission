import { factList } from "../../FunFacts/factList";
import FunFactRover from "../../FunFacts/FunFactRover";

export default function FunFactRoverPage() {
  return (
    <div>
      <FunFactRover
        rover={factList.find((cate: any) => cate.category === "rover")}
      />
    </div>
  );
}
