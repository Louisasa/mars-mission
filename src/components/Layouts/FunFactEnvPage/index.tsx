import { factList } from "../../FunFacts/factList";
import FunFactEnv from "../../FunFacts/FunFactEnv";

export default function FunFactEnvPage() {
  return (
    <div>
      <FunFactEnv
        env={factList.find((cate: any) => cate.category === "environment")}
      />
    </div>
  );
}
