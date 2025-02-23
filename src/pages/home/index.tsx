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
import BannerFormation, { BannerProps } from "../../components/bannerFormation";

interface CardProps {
  src: string;
  alt: string;
}

export const btnStyle = {
  backgroundColor: "rgba(153, 109, 255, 0.59)",
  border: "none",
  color: "#fff",
  fontSize: "16px",
  padding: "8px 20px",
  borderRadius: "20px",
  "&:hover": {
    border: "none",
    transform: "scale(1.1)",
  },
};

function Home() {
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
  const formation: BannerProps[] = [
    {
      title: "Bacharelado em Sistemas de informação",
      date: "2023 - Atualmente",
      institution: "Universidade Federal de Sergipe (UFS)",
      credential: "",
    },
    {
      title: "Node js",
      date: "Out. 2024",
      institution: "Jornada do Dev",
      credential:
        "https://jornadadodev.com.br/certificados/4ee53f39-db72-491f-9921-ba05927349e8",
    },
    {
      title: "Front End development libraries (React and Redux)",
      date: "Fev. 2024",
      institution: "FreeCodeCamp",
      credential:
        "https://www.freecodecamp.org/certification/FernandaSSantos/front-end-development-libraries",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      date: "Dez. 2023",
      institution: "FreeCodeCamp",
      credential:
        "https://www.freecodecamp.org/certification/FernandaSSantos/javascript-algorithms-and-data-structures",
    },
    {
      title: "Responsive Web Design",
      date: "Nov. 2023",
      institution: "FreeCodeCamp",
      credential:
        "https://www.freecodecamp.org/certification/FernandaSSantos/responsive-web-design",
    },
    {
      title: "BootCamp Backend Java",
      date: "Out. 2023",
      institution: "Santander Open Academy",
      credential: "https://www.dio.me/certificate/0069B48D/share",
    },
    {
      title: "Introdução a banco de dados relacionais (SQL)",
      date: "Out. 2023",
      institution: "Digital Innovation One (DIO)",
      credential:
        "https://hermes.digitalinnovation.one/certificates/0DC4DF55.pdf",
    },
    {
      title: "Introdução a banco de dados não relacionais (NoSQL)",
      date: "Out. 2023",
      institution: "Digital Innovation One (DIO)",
      credential:
        "https://hermes.digitalinnovation.one/certificates/A866003B.pdf",
    },
    {
      title: "Versionamento de código - Git e Github",
      date: "Set. 2023",
      institution: "Digital Innovation One (DIO)",
      credential: "https://www.dio.me/certificate/C4A8026A/share",
    },
    {
      title: "Fundamentos da programação orientada a objetos",
      date: "Set. 2023",
      institution: "Digital Innovation One (DIO)",
      credential: "https://www.dio.me/certificate/5B9DC51E/share",
    },
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
      <section id="sessao1" className="section">
        <section className="sobre-container">
          <section id="sobre" className="sobre-container-text">
            <div>
              <div className="sobre-text-box">
                <h2 className="sobre-title">
                  Olá, eu sou a <span className="title">Fernanda Santos</span>
                </h2>
                <p className="sobre-subtitle">Desenvolvedora Front-end</p>
                <p className="resume">
                  Estou consolidando meus conhecimentos através de projetos
                  pessoais, sempre buscando aprender mais para evoluir como
                  desenvolvedora FullStack.{" "}
                </p>
              </div>
            </div>
            <Stack direction="row" spacing={4} className="sobre-btn-box">
              <Button sx={btnStyle} variant="outlined">
                Currículo CV
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
      </section>
      <section
        id="sessao2"
        className="section"
        style={{ paddingBottom: "100px" }}
      >
        <h2 className="title-section">
          MINHAS <span className="title-section-span"> HABILIDADES</span>
        </h2>
        <section className="card-section">
          <div className="cards">
            {cards.map((card, index) => (
              <Card
                key={index}
                src={card.src}
                alt={card.alt}
                heightCard={110}
                widthCard={110}
                heightImg={100}
                widthImg={100}
                background="rgba(0, 0, 0, 0.09)"
              />
            ))}
          </div>
        </section>
      </section>
      <section id="sessao3" className="section">
        <h2 className="title-section">
          MEUS <span className="title-section-span"> PROJETOS</span>
        </h2>
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
      <section id="sessao4" className="section" style={{ paddingTop: "70px" }}>
        <div className="title-sessao">
          <h2 className="title">Formação</h2>
        </div>
        <div className="box-formation">
          <div className="formation">
            {formation.map((e) => {
              return (
                <BannerFormation
                  title={e.title}
                  date={e.date}
                  institution={e.institution}
                  credential={e.credential}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section id="sessao5"></section>
    </div>
  );
}

export default Home;
