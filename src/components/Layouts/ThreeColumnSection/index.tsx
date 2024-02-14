/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./styles.scss";

interface ThreeColumnSectionProps {
  children?: React.ReactNode;
}

const ThreeColumnSection: React.FC<ThreeColumnSectionProps> = (props) => {
  return <div className="three-column-section">{props.children}</div>;
};

export default ThreeColumnSection;
