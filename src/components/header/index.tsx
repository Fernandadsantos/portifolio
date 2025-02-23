import React, { useEffect, useRef, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import github from "../../assets/github.svg";
import linkedin from "../../assets/logotipo-do-linkedin.png";
import "./header.css";

function Header() {
  const [tabFocus, setTabFocus] = useState<number>(0);
  const refs = useRef<Record<string, HTMLElement | null>>({});

  const sections = [
    { id: "sessao1", label: "Início" },
    { id: "sessao2", label: "Habilidades" },
    { id: "sessao3", label: "Projetos " },
    { id: "sessao4", label: "Contato " },
  ];

  useEffect(() => {
    sections.forEach(({ id }) => {
      refs.current[id] = document.getElementById(id);
    });
  }, []);

  const changeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabFocus(newValue);
    const section = refs.current[sections[newValue].id];

    if (section) {
      var yOffset = 0;
      if (section?.attributes.item(0)?.value !== "sessao1") yOffset = -80;

      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <div className="container">
        <h2 className="logo">Fernanda Santos</h2>
        <div>
          <Box sx={{ borderBottom: 1, borderColor: "transparent" }}>
            <Tabs
              value={tabFocus}
              onChange={changeTab}
              textColor="inherit"
              TabIndicatorProps={{
                sx: { backgroundColor: "#986dff" },
              }}
            >
              {sections.map((section) => (
                <Tab key={section.id} label={section.label} />
              ))}
            </Tabs>
          </Box>
        </div>
        <div className="header-icons">
          <div>
            <a href="https://github.com/Fernandadsantos">
              <img className="icon" src={github} alt="github" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/fernanda-santos-864a19232/">
              <img
                className="icon linkedinIcon"
                src={linkedin}
                alt="linkedin"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
