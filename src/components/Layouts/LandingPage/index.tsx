import React, { useEffect } from "react";
import "./styles.scss";
import ThreeColumnSection from "../ThreeColumnSection";
import ColumnSection from "../ThreeColumnSection/columnSection";
import FunFactCategory from "../../FunFacts/FunFactCategory";
import { factList } from "../../FunFacts/factList";
import { Link } from "react-router-dom";
import Quiz from "../../Quiz";
import { APOD } from "../../APOD/apod";

const LandingPage: React.FC = () => {
  useEffect(() => {
    document.title = "Mars Mission | Home";
  }, []);

  return (
    <div className="gutter">
      <div className="landing-page layout">
        <ThreeColumnSection>
          <ColumnSection className="section-1">
            <h1 className="quiz-heading">Quiz your knowledge!</h1>
            <div className="quiz">
              <Quiz />
            </div>
          </ColumnSection>
          <ColumnSection className="section-2">
            <div className="test">hi2</div>
          </ColumnSection>
          <ColumnSection className="section-3">
            <div className="funfact">
              <FunFactCategory
                facts={[factList[Math.floor(Math.random() * 12)]]}
              />
              <Link to="/funfact" className="link">
                Go to Fun Fact Page!
              </Link>
            </div>
          </ColumnSection>
        </ThreeColumnSection>
      </div>
    </div>
  );
};

export default LandingPage;
