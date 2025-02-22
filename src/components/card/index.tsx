import React from "react";
import "./card.css";

interface CardProps {
  src: string;
  alt: string;
  widthImg?: number;
  heightImg?: number;
  widthCard?: number;
  heightCard?: number;
  opacity?: number;
  background?: string;
}

function Card(card: CardProps) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: card.background,
        width: card.widthCard,
        height: card.heightCard,
        opacity: card?.opacity,
      }}
    >
      <img
        style={{ alignSelf: "center" }}
        width={card.widthImg}
        height={card.heightImg}
        src={card.src}
        alt={card.alt}
      />
    </div>
  );
}

export default Card;
