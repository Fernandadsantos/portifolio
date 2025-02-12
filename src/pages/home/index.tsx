import React from "react";
import Header from "../../components/header";
import { Button, Stack } from "@mui/material";
import perfil from "../../assets/foto.png";
import "./home.css";

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

  return (
    <div className="home">
      <Header />
      <section id="sobre">
        <section className="home-container">
          <section id="sobre" className="home-container-text">
            <div>
              <div className="home-text-box">
                <h2 className="home-title">Olá, eu sou a</h2>
                <h2 className="home-title2">Fernanda Santos</h2>
                <p className="home-subtitle">Desenvolvedora Front-end</p>
              </div>
            </div>
            <Stack direction="row" spacing={4} className="home-btn-box">
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
      <section id="Habilidades"></section>
      <section id="Projetos"></section>
      <section id="Formacao"></section>
      <section id="Contato"></section>
    </div>
  );
}

export default Home;
