/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./styles.scss";

export interface ColumnSectionProps {
  backgroundImage?: string;
  children?: React.ReactNode;
  className: string;
}

const ColumnSection: React.FC<ColumnSectionProps> = (props) => {
  return (
    <div className={`column-section ${props.className}`}>
      {props.backgroundImage && (
        <img
          className="section-background-image"
          src={props.backgroundImage}
          alt="Background image"
        />
      )}
      {props.children}
    </div>
  );
};

export default ColumnSection;
