import React from "react";
import FeaturedProjects from "./FeaturedProjects";
import "./Portfolio.css";

export default function Portfolio(props) {
  return (
    <div className="home-page">
      <div>{props.navbar}</div>
      <section className="Hero">
        {" "}
        <h2>Hi, I am </h2>
        <h1 className="mt-3">Mahdia Khamooosh</h1>
        <h3 className="mt-3 ">Front-end developer based in Afghanistan </h3>
        <div className="about-me mt-5">
          <a href="about.html">About me</a>
        </div>
      </section>
      <section>
        <div>
          <h1 className="mt-5"> Some of my featured projects</h1>
          <FeaturedProjects />
        </div>
      </section>
    </div>
  );
}
