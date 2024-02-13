import React from "react";
import "./styles.scss";
import ThreeColumnSection from "../ThreeColumnSection";
import ColumnSection from "../ThreeColumnSection/columnSection";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page layout">
      <ThreeColumnSection backgroundImage="https://img.freepik.com/free-photo/space-background-with-stardust-shining-stars-realistic-colorful-cosmos-with-nebula-milky-way_1258-150932.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707696000&semt=sph">
        <ColumnSection className="section-1">
          <div>hi</div>
        </ColumnSection>
        <ColumnSection className="section-2">
          <div>hi2</div>
        </ColumnSection>
        <ColumnSection className="section-3">
          <div>hi3</div>
        </ColumnSection>
      </ThreeColumnSection>
    </div>
  );
};

export default LandingPage;
