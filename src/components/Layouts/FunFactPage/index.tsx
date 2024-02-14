import { factList } from "../../FunFacts/factList";
import FunFacts from "../../FunFacts/FunFact";
import FunFactRover from "../../FunFacts/FunFactRover";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function FunFactPage() {
  return (
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<FunFacts facts={factList} />} />
    //     </Routes>
    //     <Routes>
    //       <Route path="/rover" element={<FunFactRover facts={factList} />} />
    //     </Routes>
    // </Router>
    <div>
      <FunFacts facts={factList} />
    </div>
  );
}
