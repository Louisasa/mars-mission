import React from "react";
import { WomenInSpaceProps } from "../Layouts/WomenInSpace";
import "./index.scss";

function Card(props: { card: WomenInSpaceProps }) {
  return (
    <>
      <div className="wis-card-container">
        <img
          className="img"
          src={props.card.img_url}
          alt={props.card.description}
        />
      </div>
      <div className="text-container">
        <p className="name-container">{props.card.name}</p>
        <div className="description-container">{props.card.description}</div>
        <a className="further-details" href={props.card.further_details_url}>
          More info
        </a>
      </div>
    </>
  );
}

export default Card;
