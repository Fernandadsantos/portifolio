import React, { useEffect, useState, useCallback } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import objSections from "../../json/sections.json";
import "./header.css";

function Header() {
  const { sections } = objSections;
  const [tabFocus, setTabFocus] = useState<number>(0);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 120;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (window.scrollY + windowHeight >= documentHeight - 10) {
      setTabFocus(sections.length - 1);
      return;
    }

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i].id);
      if (section && scrollPosition >= section.offsetTop) {
        setTabFocus(i);
        break;
      }
    }
  }, [sections]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const changeTab = (event: React.SyntheticEvent, newValue: number) => {
    const section = document.getElementById(sections[newValue].id);

    if (section) {
      const yOffset = -70;
      const y = section.offsetTop + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <div className="container">
        <a className="logo" href="/">
          Fernanda Santos
        </a>
        <div className="tabs">
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
          <a href="https://github.com/Fernandadsantos" target="_blank" rel="noreferrer">
            <GitHubIcon sx={{ fontSize: "2.2rem" }} />
          </a>
          <a href="https://www.linkedin.com/in/fernanda-santos-864a19232/" target="_blank" rel="noreferrer">
            <LinkedInIcon sx={{ fontSize: "2.5rem" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;