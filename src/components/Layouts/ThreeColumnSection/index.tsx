/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./styles.scss";

interface ThreeColumnSectionProps {
  backgroundImage: string;
  children?: React.ReactNode;
}

const ThreeColumnSection: React.FC<ThreeColumnSectionProps> = (props) => {
  return (
    <div className="three-column-section">
      <img
        className="three-column-section-background-image"
        src={props.backgroundImage}
        alt="Background image"
      />
      {props.children}
    </div>
  );
};

export default ThreeColumnSection;
