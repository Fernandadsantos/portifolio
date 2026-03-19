import "./cardProject.css";
import { CardProjectProps } from "../../interfaces/interfaces";

function CardProject(card: CardProjectProps) {

  return (
    <a href={card.href} target="_blank" rel="noreferrer">
      <div
        className="div-img-cardProjet"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/${card.src})` }}
      >
        <div className="title-cardProjet">
          <h3 className="h3-project">{card.title}</h3>
        </div>
      </div>
    </a>
  );
}

export default CardProject;
