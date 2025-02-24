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
    <a href={props.credential} target="_blank" rel="noreferrer">
      <div className="banner">
        <div className="banner-text">
          <h3
            style={{ lineHeight: "25px", fontSize: "21px", padding: "0 5px" }}
          >
            {props.title}
          </h3>
          <p>{props.date}</p>
          <p>{props.institution}</p>
        </div>
        <h2 className="banner-title">
          Credencial <ArrowOutwardIcon />
        </h2>
      </div>
    </a>
  );
}
