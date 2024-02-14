/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./styles.scss";

export interface ColumnSectionProps {
  children?: React.ReactNode;
  className: string;
}

const ColumnSection: React.FC<ColumnSectionProps> = (props) => {
  return (
    <div className={`column-section ${props.className}`}>{props.children}</div>
  );
};

export default ColumnSection;
