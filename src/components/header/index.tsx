import React, { useState } from "react";
import { Box, Modal, Switch, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { Height } from "@mui/icons-material";
import "./header.css";

function Header() {
  const [darkmode, setDarkmode] = useState<boolean>(true);
  const [open, setOpen] = React.useState(false);
  const handleModal = () => setOpen(open ? false : true);

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    color: "#fff",
  };

  return (
    <div className="header">
      <div className="modal-container">
        {open ? (
          <CloseIcon className="menu-icon" onClick={() => handleModal()} />
        ) : (
          <MenuIcon className="menu-icon" onClick={() => handleModal()} />
        )}
        <Modal
          disableAutoFocus
          open={open}
          onClose={handleModal}
          aria-labelledby="modal-modal-title"
          className="modal"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Sobre
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Habilidades
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Projetos
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Contato
            </Typography>
          </Box>
        </Modal>
      </div>
      <div>
        <h2 className="header-title">Portifólio</h2>
      </div>
      <div className="dark-mode">
        <Switch
          onChange={() => setDarkmode(darkmode ? false : true)}
          defaultChecked
          sx={{
            "& .MuiSwitch-switchBase.Mui-checked": {
              color: "#0C7075",
            },
            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "#0C7075",
            },
            "& .MuiSwitch-track": {
              backgroundColor: "#fff",
            },
          }}
          size="medium"
        />
      </div>
    </div>
  );
}

export default Header;
