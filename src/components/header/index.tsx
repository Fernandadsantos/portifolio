import React, { useEffect, useRef, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import "./header.css";

function Header() {
  const [tabFocus, setTabFocus] = useState<number>(0);
  const refs = useRef<Record<string, HTMLElement | null>>({});

  const sections = [
    { id: "sessao1", label: "Sobre" },
    { id: "sessao2", label: "Habilidades" },
    { id: "sessao3", label: "Projetos " },
    { id: "sessao4", label: "Formação " },
    { id: "sessao5", label: "Contato " },
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
      <h2 className="logo">Fernanda Santos</h2>
      <div>
        <div>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={tabFocus}
              onChange={changeTab}
              textColor="inherit"
              TabIndicatorProps={{ sx: { backgroundColor: "#0F969C" } }}
            >
              {sections.map((section, index) => (
                <Tab key={section.id} label={section.label} />
              ))}
            </Tabs>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Header;
