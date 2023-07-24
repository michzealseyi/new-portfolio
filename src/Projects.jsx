import React, { useEffect } from "react";
import "./App.css";
import Logo from "./assets/another.png";
import BarSvg from "./assets/BarSvg";
import { Link } from "react-router-dom";
import CloseSvg from "./assets/CloseSvg";
import Fbsvg from "./assets/Fbsvg";
import Twittersvg from "./assets/Twittersvg";
import Igsvg from "./assets/Igsvg";
import Linkedinsvg from "./assets/Linkedinsvg";
import Img2 from "./assets/coffee.jpg";
import Codesvg from "./assets/Codesvg";

function Projects() {
  useEffect(() => {
    const navBtn = document.querySelector("#nav-btn");
    const closeBtn = document.querySelector("#close-btn");
    const sidebar = document.querySelector("#sidebar");

    navBtn.addEventListener("click", function () {
      sidebar.classList.add("show-sidebar");
    });
    closeBtn.addEventListener("click", function () {
      sidebar.classList.remove("show-sidebar");
    });
  }, []);
  return (
    <div className="body">
      {/* NAV */}
      <nav className="nav" id="nav">
        <div className="nav-center">
          <div className="nav-header">
            <img src={Logo} alt="" className="nav-logo" />
            <button className="nav-btn" id="nav-btn">
              <BarSvg />
            </button>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">
                home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                about
              </Link>
            </li>
            <li>
              <Link to="/projects" className="nav-link">
                projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* END OF NAV */}
      {/* SIDEBAR */}
      <aside className="sidebar" id="sidebar">
        <div>
          <button className="close-btn" id="close-btn">
            <CloseSvg />
          </button>
          <ul className="sidebar-links">
            <li>
              <Link to="/" className="sidebar-link">
                home
              </Link>
            </li>
            <li>
              <Link to="/about" className="sidebar-link">
                about
              </Link>
            </li>
            <li>
              <Link to="/projects" className="sidebar-link">
                projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="sidebar-link">
                contact
              </Link>
            </li>
          </ul>
          <ul className="social-icons">
            <a
              href="https://www.facebook.com/michzealseyi?mibextid=ZbWKwL"
              className="social-icon"
            >
              <Fbsvg />
            </a>
            <a
              href="https://instagram.com/michzealseyi?igshid=ZGUzMzM3NWJiOQ=="
              className="social-icon"
            >
              <Igsvg />
            </a>
            <a
              href="https://twitter.com/michzealseyi?t=lBS9aJAEr5qhxPBH--pNUg&s=08"
              className="social-icon"
            >
              <Twittersvg />
            </a>
            <a
              href="https://www.linkedin.com/in/mr-michael-owolabi-321775117"
              className="social-icon"
            >
              <Linkedinsvg />
            </a>
          </ul>
        </div>
      </aside>
      {/* END OF SIDEBAR */}
      {/* PROJECT CONTAINER */}
      <header className="project-hero">
        <div className="section-title">
          <h1>my projects</h1>
          <div className="underline"></div>
        </div>
      </header>
      <section className="section">
        <div className="section-center project-page-center">
          <article className="single-project">
            <div className="project-container">
              <img src={Img2} alt="" className="project-img" />
              <span className="project-icon">
                <Codesvg />
              </span>
            </div>
            <div className="project-details">
              <h4>project name</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus iusto consequatur, architecto reiciendis velit
                dolores?
              </p>
              <div className="project-footer">
                <div className="icon">lp</div>
                <div className="project-code">source code</div>
              </div>
            </div>
          </article>
        </div>
      </section>
      {/* END OF PROJECT CONTAINER */}

      {/* FOOTER */}
      <footer className="footer">
        <ul className="social-icons">
          <a
            href="https://www.facebook.com/michzealseyi?mibextid=ZbWKwL"
            className="social-icon"
          >
            <Fbsvg />
          </a>
          <a
            href="https://instagram.com/michzealseyi?igshid=ZGUzMzM3NWJiOQ=="
            className="social-icon"
          >
            <Igsvg />
          </a>
          <a
            href="https://twitter.com/michzealseyi?t=lBS9aJAEr5qhxPBH--pNUg&s=08"
            className="social-icon"
          >
            <Twittersvg />
          </a>
          <a
            href="https://www.linkedin.com/in/mr-michael-owolabi-321775117"
            className="social-icon"
          >
            <Linkedinsvg />
          </a>
        </ul>
        <p>
          &copy; <span>2023</span> owolabi michael. all rights reserved{" "}
        </p>
      </footer>
      {/* END OF FOOTER */}
    </div>
  );
}

export default Projects;
