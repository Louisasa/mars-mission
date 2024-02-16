/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export interface ColumnSectionProps {
  children?: React.ReactNode;
  className: string;
  link: string;
}

const ColumnSection: React.FC<ColumnSectionProps> = (props) => {
  return (
    <Link to={props.link} className={`column-section ${props.className}`}>
      {props.children}
    </Link>
  );
};

export default ColumnSection;
