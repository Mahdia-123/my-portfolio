import React from "react";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";
import "../components/Footer.css";
export default function About() {
  return (
    <div>
      {" "}
      <section class="about-section-fluid grid grid-2-columns">
        <div>
          <h1 class="mb-3">Hello, I'm Mahdia Khamoosh</h1>
          <h3 class="mb-3">Front-end web developer based in Afghanistan</h3>
          <p class="mb-5">
            I’m currently seeking new opportunities in front-end development.
            I’m open to work remotely and have flexible hours. I’m highly
            skilled in JavaScript and React.
          </p>

          <Link to="/projects">See My Projects</Link>
        </div>
        <div>
          <img
            src="images/mahdia.JPEG"
            alt="mahdia-khamoosh"
            class="img-fluid"
          />
        </div>
      </section>
      <section class="about-section-fluid-skills">
        <h1 class="text-center skills">My Skills</h1>
        <div class="my-skills grid grid-3-columns mt-5 text-center">
          <div>
            <i class="fa-brands fa-html5"></i>
            <div class="skills-title">Html</div>
          </div>
          <div>
            <i class="fa-brands fa-css3"></i>
            <div class="skills-title">Css</div>
          </div>
          <div>
            <i class="fa-brands fa-java"></i>
            <div class="skills-title">Javascript</div>
          </div>
          <div>
            <i class="fa-brands fa-react"></i>
            <div class="skills-title">React.js</div>
          </div>
          <div>
            <i class="fa-brands fa-bootstrap"></i>
            <div class="skills-title">Bootstrap</div>
          </div>
          <div>
            <i class="fa-solid fa-mobile-screen-button"></i>
            <div class="skills-title">Responsive</div>
          </div>
          <div>
            <i class="fa-brands fa-git-alt"></i>
            <div class="skills-title">Git</div>
          </div>

          <div>
            <i class="fa-brands fa-github"></i>
            <div class="skills-title">Github</div>
          </div>
          <div>
            <i class="fa-solid fa-laptop-code"></i>
            <div class="skills-title">VSCode</div>
          </div>
        </div>
        <p class="tech text-center mt-5">
          <strong>Technologies: </strong> HTML, CSS, JavaScript, Bootstrap
        </p>
      </section>
      <Footer />
    </div>
  );
}
