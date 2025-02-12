import React from "react";
import Header from "../../components/header";
import { Button, Stack } from "@mui/material";
import perfil from "../../assets/foto.png";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <section>
        <section>
          <div>
            <h2>Olá, eu sou a</h2>
            <h2>Fernanda</h2>
            <p>Desenvolvedora Front-end</p>
          </div>
          <Stack direction="row" spacing={2}>
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
    </div>
  );
}

export default Home;
