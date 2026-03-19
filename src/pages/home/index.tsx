import React, { useEffect } from "react";
import Header from "../../components/header";
import { Button, Stack } from "@mui/material";
import Card from "../../components/card";
import CardProject from "../../components/cardProject";
import BannerFormation from "../../components/bannerFormation";
import bannerObj from "../../json/banner.json";
import projectsObj from "../../json/projects.json";
import cardsObj from "../../json/cards.json";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import perfil from "../../assets/perfil.jpeg";
import FloatingBtn from "../../components/floatingBtn";
import { handleViewPDF, scrollToBottom } from "../../utils";
import "./home.css";

const { training } = bannerObj;
const { projects } = projectsObj;
const { cards } = cardsObj;

export const btnStyle = {
  backgroundColor: "rgba(153, 109, 255, 0.59)",
  border: "none",
  color: "#fff",
  fontSize: "0.8rem",
  padding: "8px 20px",
  borderRadius: "20px",
  "&:hover": {
    border: "none",
    transform: "scale(1.1)",
  },
  fontWeight: 'bold',
};

function Home() {

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
      { threshold: [0.4, 0.6] }
    );

    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="home">
      <Header />
      <FloatingBtn />
      <section id="sessao1" className="section">
        <section className="sobre-container">
          <section id="sobre">
            <div>
              <div className="sobre-text-box">
                <h2 className="sobre-title">
                  Olá, eu sou a <span className="title">Fernanda Santos</span>
                </h2>
                <p className="sobre-subtitle">Desenvolvedora Front-end</p>
                <p className="resume">
                  Estou consolidando meus conhecimentos através de projetos
                  pessoais, sempre buscando aprender mais para evoluir como
                  desenvolvedora FullStack.
                </p>
              </div>
            </div>
            <Stack
              direction="row"
              spacing={2}
              className="sobre-btn-box"
              alignSelf="center"
            >
              <Button sx={btnStyle} variant="outlined" onClick={() => handleViewPDF("../../assets/curriculo.pdf")}>
                Currículo CV
              </Button>
              <Button
                sx={btnStyle}
                variant="outlined"
                onClick={() => scrollToBottom()}
              >
                Entre em contato
              </Button>
            </Stack>
          </section>
          <section>
            <div
              className="foto-perfil"
              style={{ backgroundImage: `url(${perfil})` }}
            />
          </section>
        </section>
      </section>
      <section
        id="sessao2"
        className="section"
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
                title={project.alt}
                href={project.href}
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
      <section id="sessao5" className="section">
        <h2 className="title-section">
          ENTRE EM <span className="title-section-span">CONTATO</span> COMIGO
        </h2>
        <div className="div-contact">
          <a href="mailto:fernanda.devsantos@gmail.com">
            <EmailIcon sx={{ fontSize: "40px" }} />
          </a>
          <a href="https://www.linkedin.com/in/fernanda-silvade-santos/">
            <LinkedInIcon sx={{ fontSize: "40px" }} />
          </a>
          <a href="https://github.com/Fernandadsantos">
            <GitHubIcon sx={{ fontSize: "40px" }} />
          </a>
          <a href="https://www.instagram.com/fe_nandasantosz/">
            <InstagramIcon sx={{ fontSize: "40px" }} />
          </a>
        </div>
        <p style={{ textAlign: 'center' }}>Desenvolvido por Fernanda Santos</p>
      </section>
    </div>
  );
}

export default Home;
