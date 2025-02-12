import React, { useState } from "react";
import { Box, Switch, Tab, Tabs } from "@mui/material";
import "./header.css";

function Header() {
  const [darkmode, setDarkmode] = useState<boolean>(true);
  const [tabFocus, setTabFocus] = useState<number>(0);
  const style = {
    color: "#fff",
    fontWeight: "600",
    letterSpacing: "2px",
  };

  const changeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabFocus(newValue);
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
              <Tab sx={style} label="Sobre" href="#sobre" />
              <Tab sx={style} label="Habilidades" href="#Habilidades" />
              <Tab sx={style} label="Projetos" href="#Projetos" />
              <Tab sx={style} label="Formação" href="#Formacao" />
              <Tab sx={style} label="Contato" href="#Contato" />
            </Tabs>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Header;
