import React from "react";
import "./Portfolio.css";

export default function Portfolio(props) {
  return (
    <div className="home-page">
      <div>{props.navbar}</div>
      <section className="Hero">
        {" "}
        <h2>Hi</h2>
        <h1>I am Mahdia Khamooosh</h1>
        <h3>Front-end developer based in Afghanistan </h3>
      </section>
    </div>
  );
}
