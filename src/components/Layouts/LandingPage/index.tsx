import React from "react";
import "./styles.scss";
import ThreeColumnSection from "../ThreeColumnSection";
import ColumnSection from "../ThreeColumnSection/columnSection";
import FunFactPage from "../FunFactPage";
import FunFactCategory from "../../FunFacts/FunFactCategory";
import { factList } from "../../FunFacts/factList";
import { Link } from "react-router-dom";

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
            <div className="funfact">
              <FunFactCategory
                facts={[factList[Math.floor(Math.random() * 12)]]}
              />
            </div>
            <Link to="/funfact">Go to Fun Fact Page!</Link>
          </ColumnSection>
        </ThreeColumnSection>
      </div>
    </div>
  );
};

export default LandingPage;
