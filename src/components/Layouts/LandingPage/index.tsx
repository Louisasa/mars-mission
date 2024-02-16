import React, { useEffect } from "react";
import ThreeColumnSection from "../ThreeColumnSection";
import ColumnSection from "../ThreeColumnSection/columnSection";
import "./styles.scss";

const LandingPage: React.FC = () => {
  useEffect(() => {
    document.title = "Mars Mission | Home";
  }, []);

  return (
    <ThreeColumnSection>
      <ColumnSection link="/quiz" className="column-section column-section-1">
        <p className="column-section-icon" role="presentation">
          ?
        </p>
        <h2 className="column-heading">Quiz</h2>
      </ColumnSection>
      <ColumnSection link="/apod" className="column-section column-section-2">
        <h2 className="column-heading">
          Astronomy
          <br />
          Picture of the Day
        </h2>
      </ColumnSection>
      <ColumnSection
        link="/funfact"
        className="column-section column-section-3"
      >
        <p className="column-section-icon" role="presentation">
          !
        </p>
        <h2 className="column-heading">Fun Facts</h2>
      </ColumnSection>
    </ThreeColumnSection>
  );
};

export default LandingPage;
