import React, { useEffect } from "react";
import "./styles.scss";
import ThreeColumnSection from "../ThreeColumnSection";
import ColumnSection from "../ThreeColumnSection/columnSection";

const LandingPage: React.FC = () => {
  useEffect(() => {
    document.title = "Mars Mission | Home";
  }, []);

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
            <div className="test">hi3</div>
          </ColumnSection>
        </ThreeColumnSection>
      </div>
    </div>
  );
};

export default LandingPage;
