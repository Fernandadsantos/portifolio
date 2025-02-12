import React from "react";
import Header from "../../components/header";
import { Button, Stack } from "@mui/material";
import perfil from "../../assets/foto.png";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Header />
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
            <Button
              sx={{
                backgroundColor: "#05161A",
                color: "#fff",
                padding: "8px 20px",
                borderRadius: "12px",
                "&:hover": { backgroundColor: "#072E33" },
              }}
              variant="outlined"
            >
              Currículo
            </Button>
            <Button
              sx={{
                backgroundColor: "#05161A",
                color: "#fff",
                padding: "8px 20px",
                borderRadius: "12px",
                "&:hover": { backgroundColor: "#072E33" },
              }}
              variant="outlined"
            >
              Entre em contato
            </Button>
          </Stack>
        </section>
        <section>
          <div className="foto-perfil"></div>
        </section>
      </section>
      <section>
        <h3>Sobre</h3>
        <p>
          Sou graduanda em Sistemas de informação pela Universidade Federal de
          Sergipe (UFS)
        </p>
      </section>
    </div>
  );
}

export default Home;
