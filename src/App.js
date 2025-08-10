import Portfolio from "./Portfolio";
import NewDate from "./NewDate";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Portfolio
        navbar={
          <div>
            <nav class="navbar navbar-expand-lg fixed-top">
              <div class="container">
                <a class="navbar-brand" href="index.html" rel="noreferrer">
                  Mahdia Khamoosh
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                      <a class="nav-link" href="index.html" rel="noreferrer">
                        Home
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" href="about.html" rel="noreferrer">
                        About
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="achivement.html"
                        rel="noreferrer"
                      >
                        Achivements/CV
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="projects.html" rel="noreferrer">
                        Projects
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" href="contact.html" rel="noreferrer">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        }
      />
      <footer>
        <div class="email text-center mb-5">
          <a href="mailto:fosoonryan601@gmail.com" rel="noreferrer">
            fosoonryan601@gmail.com
          </a>
        </div>
        <div class="d-flex justify-content-center text-center contact-links">
          <div>
            <a
              href="https://github.com/Mahdia-123"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/mahdia-khamoosh-a2abb9364"
              rel="noreferrer"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div>
            <a
              href="mailto:fosoonryan601@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>
        <p class="mt-5">
          This website was coded by Mahdia Khamoosh and is
          <span>
            <a
              href="https://github.com/Mahdia-123/mahdia-khamoosh-portfolio"
              rel="noreferrer"
            >
              open-sourced
            </a>
          </span>
        </p>
        <NewDate date={new Date()} />
      </footer>
    </div>
  );
}

export default App;
