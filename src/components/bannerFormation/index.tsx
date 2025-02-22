import React from "react";

interface BannerProps {
  title: string;
  date: string;
  institution: string;
}

export default function BannerFormation(props: BannerProps) {
  return (
    <div>
      <div>
        <h3>{props.title}</h3> <p>{props.date}</p>
      </div>
      <h3>{props.institution}</h3>
    </div>
  );
}
