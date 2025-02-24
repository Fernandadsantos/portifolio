import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import { Button, Fab, Stack } from "@mui/material";
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
import cineTicket from "../../assets/cine-ticket.png";
import CardProject from "../../components/cardProject";
import BannerFormation from "../../components/bannerFormation";
import bannerObj from "./banner.json";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./home.css";

const { training } = bannerObj;
export interface CardProps {
  src: string;
  alt: string;
}
export interface Training {
  title: string;
  credential: string;
  date: string;
  institution: string;
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
  const [isVisible, setIsVisible] = useState(false);
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
    { src: pomodoro, alt: "Pomodoro" },
    { src: cineTicket, alt: "Cine Ticket" },
  ];

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      <div
        className="floating-btn"
        style={{ display: isVisible ? "flex" : "none" }}
      >
        <Fab
          sx={{ backgroundColor: "#ab8df0" }}
          aria-label="add"
          onClick={() => scrollToTop()}
        >
          <KeyboardArrowUpIcon sx={{ height: "30px", width: "30px" }} />
        </Fab>
      </div>
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
      <section
        id="sessao3"
        className="section"
        style={{ paddingBottom: "100px" }}
      >
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
      <section id="sessao4" className="section">
        <h2 className="title-section">
          MINHA <span className="title-section-span">FORMAÇÃO</span>
        </h2>
        <div className="box-formation">
          <div className="formation">
            {training.map((e) => {
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
      <section id="sessao5">
        <h2 className="title-section">
          ENTRE EM <span className="title-section-span">CONTATO</span> COMIGO
        </h2>
        <div className="div-contact">
          <a href="mailto:Fernandassilvasantoss@gmail.com">
            <EmailIcon sx={{}} />
          </a>
          <a href="mailto:Fernandassilvasantoss@gmail.com">
            <InstagramIcon />
          </a>
          <a href="mailto:Fernandassilvasantoss@gmail.com">
            <LinkedInIcon />
          </a>
          <a href="mailto:Fernandassilvasantoss@gmail.com">
            <GitHubIcon />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
