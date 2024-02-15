import React from "react";
import "./styles.scss";
import ThreeColumnSection from "../ThreeColumnSection";
import ColumnSection from "../ThreeColumnSection/columnSection";
import FunFactPage from "../FunFactPage";
import FunFactRover from "../../FunFacts/FunFactRover";
import { factList } from "../../FunFacts/factList";

const LandingPage: React.FC = () => {
  return (
    <div className="gutter">
      <div className="landing-page layout">
        <ThreeColumnSection>
          <ColumnSection className="section-1">
            <div className="test">hi</div>
          </ColumnSection>
          <ColumnSection className="section-2">
            <div className="test">hi2</div>
          </ColumnSection>
          <ColumnSection className="section-3">
            <FunFactRover facts={[factList[Math.floor(Math.random() * 10)]]} />
          </ColumnSection>
        </ThreeColumnSection>
      </div>
    </div>
  );
};

export default LandingPage;
