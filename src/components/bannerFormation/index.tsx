import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "./bannerFormation.css";

export interface BannerProps {
  title: string;
  date: string;
  institution: string;
  credential: string;
}

export default function BannerFormation(props: BannerProps) {
  return (
    <div className="banner">
      <div className="banner-text">
        <h3 style={{ lineHeight: "25px", fontSize: "21px", padding: "0 5px" }}>
          {props.title}
        </h3>
        <p>{props.date}</p>
        <p style={{ fontSize: "18px" }}>{props.institution}</p>
      </div>
      {!props.credential ? (
        <h2 className="banner-title">Curso em andamento</h2>
      ) : (
        <h2 className="banner-title">
          <a href={props.credential} target="_blank" rel="noreferrer">
            Credencial <ArrowOutwardIcon />
          </a>
        </h2>
      )}
    </div>
  );
}
