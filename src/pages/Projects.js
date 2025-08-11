import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      img: "images/clock.png",
      link: "https://worldbest-clock.netlify.app/",
      title: "Clock App",
      subTitle: "Built with HTML, CSS, and JavaScript",
    },
    {
      img: "images/dictionary-app.png",
      link: "https://vanilla-dictionary-app.netlify.app/",
      title: "Dictionary App",
      subTitle: "Built with React develper tools",
    },
    {
      img: "images/landaing-website.png",
      link: "https://afghanistan-tourism.netlify.app/",
      title: "Afghanistan Landing Page",
      subTitle: "Built with HTML, CSS, JavaScript",
    },
    {
      img: "images/AI-poem-generator.png",
      link: "https://afghan-ai-peom-generator.netlify.app/",
      title: "AI Peom Generator",
      subTitle: "Built with HTML, CSS, JavaScript and AI",
    },
    {
      img: "images/vanilla-weather-app.png",
      link: "https://vanillasweatherapp.netlify.app/",
      title: "Vanilla Weather App",
      subTitle: "Built with HTML, CSS, JavaScript and API",
    },
    {
      img: "images/react-weather-app.png",
      link: "https://vanilla-magical-weather-app.netlify.app/",
      title: "React Weather App",
      subTitle: "Built with React developer tools",
    },
    {
      img: "images/Screen Shot 2025-08-07 at 5.05.39 PM.png",
      link: "https://freelance-invoice-manager-app.netlify.app/",
      title: "Invoice Manager App",
      subTitle: "Built with HTML, CSS and Javascript",
    },
    {
      img: "images/Screen Shot 2025-08-02 at 5.08.58 PM.png",
      link: "https://nine-photo-gallery-app.netlify.app/",
      title: "React Gallery App",
      subTitle: "Built with React developer tools",
    },
    {
      img: "images/book tracker app.png",
      link: "https://book-tracker-app-for-all.netlify.app/",
      title: "Book Tracker App",
      subTitle: "Built with HTML, CSS and JavaScript",
    },
  ];

  return (
    <div>
      <section className="projects-section-fluid mb-3">
        <h1 className="mb-2">Take a look at what I've been working on!</h1>
        <div className="grid grid-2-columns">
          {projects.map(function (pro, index) {
            return (
              <div key={index}>
                <a href={pro.img} target="_blank" rel="noreferrer">
                  <img
                    src={pro.img}
                    alt={`Projects${index}`}
                    className="img-fluid"
                  />
                </a>
                <h2 className="heading mb-2">{pro.title}</h2>
                <p className="mb-4">{pro.subTitle}</p>
                <a
                  href={pro.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Launch Project
                </a>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
}
