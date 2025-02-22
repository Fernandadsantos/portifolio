import React, { useEffect } from "react";
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
import foto9 from "../../assets/c.svg";
import foto10 from "../../assets/logoM.png";
import foto11 from "../../assets/icons8-mongodb.svg";
import pomodoro from "../../assets/printPOMODORO.png";
import landingPage from "../../assets/landingPage.png";
import shortnerURL from "../../assets/printShortnerURL.png";
import cineTicket from "../../assets/cine-ticket.png";
import "./home.css";
import CardProject from "../../components/cardProject";

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
    { src: foto1, alt: "JavaScript" },
    { src: foto2, alt: "HTML" },
    { src: foto3, alt: "Css" },
    { src: foto4, alt: "Git" },
    { src: foto5, alt: "NodeJS" },
    { src: foto6, alt: "Sass" },
    { src: foto7, alt: "Java" },
    { src: foto8, alt: "React" },
    { src: foto9, alt: "C" },
    { src: foto10, alt: "Material UI" },
    { src: foto11, alt: "MongoDB" },
  ];
  const projects: CardProps[] = [
    { src: landingPage, alt: "Landing Page" },
    { src: foto1, alt: "Books API Rest" },
    { src: pomodoro, alt: "Pomodoro" },
    { src: shortnerURL, alt: "Shortner URL" },
    { src: foto1, alt: "App Movies" },
    { src: cineTicket, alt: "Cine Ticket" },
    { src: foto1, alt: "Coffee shop" },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".card");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.4) {
            entry.target.classList.add("show");
          } else if (entry.boundingClientRect.top > window.innerHeight * 0.6) {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: [0.4, 0.7] }
    );

    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

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
      <section
        id="sessao2"
        className="section"
        style={{ paddingBottom: "200px" }}
      >
        <div className="title-sessao">
          <h2 className="title ">Habilidades</h2>
        </div>
        <section className="card-section">
          <div className="cards">
            {cards.map((card, index) => (
              <Card
                key={index}
                src={card.src}
                alt={card.alt}
                heightCard={130}
                widthCard={130}
                heightImg={100}
                widthImg={100}
                background="rgba(0, 0, 0, 0.09)"
              />
            ))}
          </div>
        </section>
      </section>
      <section id="sessao3" className="section" style={{ paddingTop: "70px" }}>
        <div className="title-sessao">
          <h2 className="title">Projetos</h2>
        </div>
        <div className="projects-container">
          <div className="projects">
            {projects.map((project, index) => (
              <CardProject
                key={index}
                src={project.src}
                alt={project.alt}
                title={project.alt}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="sessao4" className="section">
        <div className="title-sessao">
          <h2 className="title">Formação</h2>
        </div>
        <div></div>
      </section>
      <section id="sessao5"></section>
    </div>
  );
}

export default Home;
