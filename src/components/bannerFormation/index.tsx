import React from "react";
import "./bannerFormation.css";
import { Button } from "@mui/material";

export interface BannerProps {
  title: string;
  date: string;
  institution: string;
  credential: string;
}

export default function BannerFormation(props: BannerProps) {
  return (
    <div className="banner">
      <div className="banner-title">
        <h3 style={{ lineHeight: "25px", fontSize: "21px", padding: "0 5px" }}>
          {props.title}
        </h3>
        <p>{props.date}</p>
        <p>{props.institution}</p>
      </div>
      <div></div>
      <div>
        <Button sx={{}} variant="outlined">
          <a href={props.credential}>Credencial</a>
        </Button>
      </div>
    </div>
  );
}
