import React from "react";
import gmailIcon from "../../assets/gmail.png";
import linkedinIcon from "../../assets/logotipo-do-linkedin.png";
import githubIcon from "../../assets/github.png";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="icons-top-bar">
        <img className="icon" src={gmailIcon} alt="gmail icon" />
        <img className="icon" src={githubIcon} alt="github icon" />
        <img className="icon" src={linkedinIcon} alt="linkedin icon" />
      </div>
    </div>
  );
}

export default Home;
