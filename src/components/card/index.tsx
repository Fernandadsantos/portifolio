import React from "react";
import "./card.css";

interface CardProps {
  src: string;
  alt: string;
}

function Card(card: CardProps) {
  return (
    <div className="card">
      <img
        style={{ alignSelf: "center" }}
        width={100}
        height={100}
        src={card.src}
        alt={card.alt}
      />
    </div>
  );
}

export default Card;
