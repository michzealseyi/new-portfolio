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

function About() {
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
      {/* ABOUT CONTAINER */}
      <section className="section single-page">
        <div className="section-title">
          <h1>about me</h1>
          <div className="underline"></div>
        </div>
        <div className="section-center page-info">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            ullam sint perspiciatis expedita nesciunt ipsa, in aliquam. Laborum,
            aperiam. Ad perferendis tempore vel quibusdam similique tenetur
            provident nostrum repellendus itaque sint quae exercitationem
            inventore eos a atque eius id magnam repellat libero, explicabo
            incidunt at. Sint vero dolores facilis ullam?
          </p>
        </div>
      </section>
      {/* END OF ABOUT CONTAINER */}
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

export default About;
