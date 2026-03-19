import React from "react";
import "./card.css";
import { CardProps } from "../../interfaces/interfaces";

function Card(card: CardProps) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: card.background,
        opacity: card?.opacity,
      }}
    >
      <img
        className="img-card"
        src={`${process.env.PUBLIC_URL}/icons/${card.src}`}
        alt={card.alt}
      />
    </div>
  );
}

export default Card;
