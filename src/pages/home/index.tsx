import React from "react";
import Header from "../../components/header";
import { Button, Stack } from "@mui/material";
import Card from "../../components/card";
import foto1 from "../../assets/js.svg";
import foto2 from "../../assets/icons8-html.svg";
import foto3 from "../../assets/icons8-css.svg";
import foto4 from "../../assets/git.svg";
import foto5 from "../../assets/node.svg";
import foto6 from "../../assets/sass.svg";
import foto7 from "../../assets/java.svg";
import foto8 from "../../assets/react.svg";
import foto11 from "../../assets/c.svg";

import "./home.css";

interface CardProps {
  src: string;
  alt: string;
}

function Home() {
  const btnStyle = {
    backgroundColor: "rgba(7, 29, 34, 0.88)",
    border: "none",
    color: "#fff",
    padding: "8px 20px",
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: "rgba(10, 143, 150, 0.38)",
      border: "none",
      transform: "scale(1.1)",
    },
  };
  const cards: CardProps[] = [
    { src: foto1, alt: "a" },
    { src: foto2, alt: "a" },
    { src: foto3, alt: "a" },
    { src: foto4, alt: "a" },
    { src: foto5, alt: "a" },
    { src: foto6, alt: "a" },
    { src: foto7, alt: "a" },
    { src: foto8, alt: "a" },
    { src: foto11, alt: "a" },
  ];

  return (
    <div className="home">
      <Header />
      <section id="sessao1">
        <section className="sobre-container">
          <section id="sobre" className="sobre-container-text">
            <div>
              <div className="sobre-text-box">
                <h2 className="sobre-title">Olá, eu sou a</h2>
                <h2 className="title">Fernanda Santos</h2>
                <p className="sobre-subtitle">Desenvolvedora Front-end</p>
              </div>
            </div>
            <Stack direction="row" spacing={4} className="sobre-btn-box">
              <Button sx={btnStyle} variant="outlined">
                Currículo
              </Button>
              <Button sx={btnStyle} variant="outlined">
                Entre em contato
              </Button>
            </Stack>
          </section>
          <section>
            <div className="foto-perfil"></div>
          </section>
        </section>
        <section className="text-box-sobre">
          <h3 className="title-sobre">Sobre</h3>
          <div className="resume">
            <p>
              Sou estudante de Sistemas de Informação na UFS, apaixonada por
              desenvolvimento front-end. Tenho experiência com React e React
              Native, Redux, consumo de APIs REST, Material UI, além de
              JavaScript e TypeScript. Venho consolidando meus conhecimentos
              através de projetos pessoais e sempre busco aprender mais para
              evoluir como desenvolvedora FullStack.
            </p>
          </div>
        </section>
      </section>
      <section id="sessao2" className="h-section">
        <div className="title-sessao2">
          <h2 className="title">Habilidades</h2>
        </div>
        <section className="card-section">
          <div className="cards">
            {cards.map((card) => {
              return <Card src={card.src} alt={card.alt} />;
            })}
          </div>
        </section>
      </section>
      <section id="sessao3"></section>
      <section id="sessao4"></section>
      <section id="sessao5"></section>
    </div>
  );
}

export default Home;
