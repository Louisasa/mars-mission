// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { factList } from "../../FunFacts/factList";
import FunFactMission from "../../FunFacts/FunFactMission";

export default function FunFactMissionPage() {
  return (
    <div>
      <FunFactMission
        mission={factList.find((cate: any) => cate.category === "mission")}
      />
    </div>
  );
}
