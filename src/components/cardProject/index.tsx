import React from "react";
import "./cardProject.css";

interface CardProjectProps {
  src: string;
  alt: string;
  title: string;
}

function CardProject(card: CardProjectProps) {
  return (
    <div className="cardProject">
      <div className="div-img-cardProjet">
        <img className="img-cardProject" src={card.src} alt={card.alt} />
      </div>
      <div className="div-title-cardProjet">
        <h3 className="title-cardProjet">{card.title}</h3>
      </div>
    </div>
  );
}

export default CardProject;
