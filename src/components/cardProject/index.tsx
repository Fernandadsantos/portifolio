import React from "react";
import "./cardProject.css";

interface CardProjectProps {
  src: string;
  alt: string;
  title: string;
}

function CardProject(card: CardProjectProps) {
  return (
    <div
      className="div-img-cardProjet"
      style={{ backgroundImage: `url(${card.src})` }}
    >
      <h3 className="title-cardProjet">{card.title}</h3>
    </div>
  );
}

export default CardProject;
