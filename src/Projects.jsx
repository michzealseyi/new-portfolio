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
              href="https://linkedin.com/in/michzealseyi"
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
              <img src={Img2} alt="Hymn Management Platform" className="project-img" />
              <span className="project-icon">
                <Codesvg />
              </span>
            </div>
            <div className="project-details">
              <h4>Hymn Management Platform</h4>
              <p>
                Comprehensive digital hymn management system for religious organizations, featuring hymn renditions,
                musical tones, vocal parts, lyrics, and manuscripts. Built with NX Monorepo architecture using React and Next.js.
                Features include advanced search, multi-organization support, offline-first capabilities, and analytics dashboards.
              </p>
              <div className="project-footer">
                <span className="project-tech">React • Next.js • NX Monorepo • GraphQL</span>
                <a href="https://hymnal.techcitadel.tech/" target="_blank" rel="noopener noreferrer" className="project-code">Live Demo</a>
              </div>
            </div>
          </article>

          <article className="single-project">
            <div className="project-container">
              <img src={Img2} alt="Naiya E-Commerce" className="project-img" />
              <span className="project-icon">
                <Codesvg />
              </span>
            </div>
            <div className="project-details">
              <h4>Naiya E-Commerce Platform</h4>
              <p>
                Commercial e-commerce platform developed with full product catalog management, shopping cart functionality,
                secure checkout workflows, and integrated payment processing. Features user authentication, order management,
                and inventory tracking systems.
              </p>
              <div className="project-footer">
                <span className="project-tech">Angular • TypeScript • REST API</span>
                <a href="https://naiya.ng/" target="_blank" rel="noopener noreferrer" className="project-code">Live Demo</a>
              </div>
            </div>
          </article>

          <article className="single-project">
            <div className="project-container">
              <img src={Img2} alt="Banking Admin Dashboard" className="project-img" />
              <span className="project-icon">
                <Codesvg />
              </span>
            </div>
            <div className="project-details">
              <h4>Banking Admin Dashboard</h4>
              <p>
                Enterprise financial institution admin platform managing critical banking operations including transaction
                limitations, user settings, vendor configurations, and multi-level approval workflows. Built 7+ independent
                micro-frontend modules using Single-SPA architecture, serving 1000+ concurrent users.
              </p>
              <div className="project-footer">
                <span className="project-tech">React • Single-SPA • REST API • Jest</span>
                <span className="project-code">Enterprise Project</span>
              </div>
            </div>
          </article>

          <article className="single-project">
            <div className="project-container">
              <img src={Img2} alt="Personal Portfolio" className="project-img" />
              <span className="project-icon">
                <Codesvg />
              </span>
            </div>
            <div className="project-details">
              <h4>Personal Portfolio Website</h4>
              <p>
                Showcase of technical skills and project work using modern web technologies including React and Vite.
                Features responsive design, smooth animations, and optimized performance for a seamless user experience.
              </p>
              <div className="project-footer">
                <span className="project-tech">React • Vite • CSS3 • Responsive</span>
                <a href="https://michzealseyi-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-code">Live Demo</a>
              </div>
            </div>
          </article>

          <article className="single-project">
            <div className="project-container">
              <img src={Img2} alt="Sterling Pro" className="project-img" />
              <span className="project-icon">
                <Codesvg />
              </span>
            </div>
            <div className="project-details">
              <h4>Sterling Pro</h4>
              <p>
                Built a scalable financial platform using a Single-SPA micro frontend architecture, enabling independent
                deployment and seamless integration of multiple applications. Developed within an NX monorepo, leveraging
                modern frontend technologies to ensure modularity, maintainability, and high performance across the system.
              </p>
              <div className="project-footer">
                <span className="project-tech">React • Single-SPA • NX Monorepo • TypeScript</span>
                <a href="https://newsterlingpro.sterling.ng/home" target="_blank" rel="noopener noreferrer" className="project-code">Live Demo</a>
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
            href="https://linkedin.com/in/michzealseyi"
            className="social-icon"
          >
            <Linkedinsvg />
          </a>
        </ul>
        <p>
          &copy; <span>2024</span> owolabi michael. all rights reserved{" "}
        </p>
      </footer>
      {/* END OF FOOTER */}
    </div>
  );
}

export default Projects;
