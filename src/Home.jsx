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
import Myphoto from "./assets/me1.jpeg";
import Myphoto2 from "./assets/me2.jpeg";
import Codesvg from "./assets/Codesvg";
import Sketchsvg from "./assets/Sketchsvg";
import Androidsvg from "./assets/Androidsvg";
import Img1 from "./assets/about.jpeg";
import Img2 from "./assets/coffee.jpg";
import Img3 from "./assets/home.jpg";
import Img4 from "./assets/land.jpeg";
import Connect from "./assets/connect.mp4";

function Home() {
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
      {/* HEADER */}
      <header className="hero">
        <div className="section-center hero-center">
          <article className="hero-info">
            <div className="underline"></div>
            <h1>i'm owolabi michael</h1>
            <h4>Senior Front-End Engineer</h4>
            <Link to="/contact" className="btn hero-btn">
              hire me
            </Link>
            <ul className="social-icons hero-icons">
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
          </article>
          <article className="hero-img">
            <img src={Myphoto} alt="owolabi michael" className="hero-photo" />
          </article>
        </div>
      </header>
      {/* END OF HEADER */}
      {/* ABOUT */}
      <section className="section about">
        <div className="section-center about-center">
          <article className="about-img">
            <img src={Myphoto2} alt="abt-img" className="hero-photo" />
          </article>
          <article className="about-info">
            <div className="section-title about-title">
              <h2>about</h2>
              <div className="underline"></div>
            </div>
            <p>
              Senior Front-End Engineer with 3+ years of experience architecting
              and delivering enterprise-grade financial, e-commerce, and digital
              content management applications. Proven expertise in
              micro-frontend architecture, building scalable admin dashboards,
              and optimizing high-performance web applications using React.js,
              Next.js, Angular, and TypeScript.
            </p>
            <Link to="/about" className="btn">
              about me
            </Link>
          </article>
        </div>
      </section>
      {/* END OF ABOUT */}
      {/* SERVICES */}
      <section className="section bg-grey">
        <div className="section-title">
          <h2>services</h2>
          <div className="underline"></div>
        </div>
        <div className="services-center section-center">
          <article className="service">
            <i className="service-icon">
              <Codesvg />
            </i>
            <h4>web development</h4>
            <div className="underline"></div>
            <p>
              Building enterprise-grade web applications using React.js,
              Next.js, Angular, and TypeScript. Expertise in micro-frontend
              architecture, Single-SPA, NX Monorepo with Module Federation, and
              performance optimization.
            </p>
          </article>
          <article className="service">
            <i className="service-icon">
              <Sketchsvg />
            </i>
            <h4>ui/ux implementation</h4>
            <div className="underline"></div>
            <p>
              Translating wireframes and mockups into responsive, user-friendly
              interfaces. Proficient in HTML5, CSS3, SCSS, Tailwind CSS, and
              cross-browser compatibility.
            </p>
          </article>
          <article className="service">
            <i className="service-icon">
              <Androidsvg />
            </i>
            <h4>desktop apps</h4>
            <div className="underline"></div>
            <p>
              Developing cross-platform desktop applications using Tauri
              framework, delivering high-performance native apps with web
              technologies.
            </p>
          </article>
        </div>
      </section>
      {/* END OF SERVICES */}
      {/* PROJECTS */}
      <section className="section projects">
        <div className="section-title">
          <h2>latest works</h2>
          <div className="underline"></div>
          <p className="projects-text">
            A showcase of my recent work including enterprise-grade financial
            platforms, e-commerce solutions, and digital content management
            systems built with modern web technologies.
          </p>
        </div>
        <div className="section-center project-center">
          <Link to="/projects" className="project-1">
            <article className="project">
              <img
                src={Img1}
                alt="Hymn Management Platform"
                className="project-img"
              />
              <div className="project-info">
                <h4>Hymn Management Platform</h4>
                <p>Digital hymn management system</p>
              </div>
            </article>
          </Link>
          <Link to="/projects" className="project-2">
            <article className="project">
              <img
                src={Img2}
                alt="E-Commerce Platform"
                className="project-img"
              />
              <div className="project-info">
                <h4>E-Commerce Platform</h4>
                <p>Full-featured online store</p>
              </div>
            </article>
          </Link>
          <Link to="/projects" className="project-3">
            <article className="project">
              <img
                src={Img3}
                alt="Banking Admin Dashboard"
                className="project-img"
              />
              <div className="project-info">
                <h4>Banking Admin Dashboard</h4>
                <p>Financial institution platform</p>
              </div>
            </article>
          </Link>
          <Link to="/projects" className="project-4">
            <article className="project">
              <img src={Img4} alt="Portfolio Website" className="project-img" />
              <div className="project-info">
                <h4>Portfolio Website</h4>
                <p>Personal showcase</p>
              </div>
            </article>
          </Link>
        </div>
      </section>
      {/* END OF PROJECTS */}
      {/* CONNECT */}
      <section className="connect">
        <video
          src={Connect}
          autoPlay
          muted
          loop
          className="video-container"
          poster={Img1}
        ></video>
        <div className="video-banner">
          <div className="section-title">
            <h2>let's get in touch</h2>
            <div className="underline"></div>
          </div>
          <p className="video-text">
            I'm always interested in new opportunities and collaborations.
            Whether you have a project in mind or just want to connect, feel
            free to reach out. Let's build something amazing together!
          </p>
          <Link to="/contact" className="btn">
            contact
          </Link>
        </div>
      </section>
      {/* END OF CONNECT */}
      {/* SKILLS */}
      <section className="section skills">
        <div className="section-title">
          <h2>skills</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center skills-center">
          <article>
            <h3>front end</h3>
            <div className="skill">
              <p>React.js / Next.js</p>
              <div className="skill-container">
                <div className="skill-value value-95"></div>
                <p className="skill-text skill-text-95">95%</p>
              </div>
            </div>
            <div className="skill">
              <p>TypeScript / JavaScript</p>
              <div className="skill-container">
                <div className="skill-value value-90"></div>
                <p className="skill-text skill-text-90">90%</p>
              </div>
            </div>
            <div className="skill">
              <p>Angular / Single-SPA</p>
              <div className="skill-container">
                <div className="skill-value value-85"></div>
                <p className="skill-text skill-text-85">85%</p>
              </div>
            </div>
          </article>
          <article>
            <h3>tools & architecture</h3>
            <div className="skill">
              <p>NX Monorepo / Module Federation</p>
              <div className="skill-container">
                <div className="skill-value value-90"></div>
                <p className="skill-text skill-text-90">90%</p>
              </div>
            </div>
            <div className="skill">
              <p>HTML5 / CSS3 / Tailwind</p>
              <div className="skill-container">
                <div className="skill-value value-95"></div>
                <p className="skill-text skill-text-95">95%</p>
              </div>
            </div>
            <div className="skill">
              <p>REST API / GraphQL</p>
              <div className="skill-container">
                <div className="skill-value value-85"></div>
                <p className="skill-text skill-text-85">85%</p>
              </div>
            </div>
          </article>
        </div>
      </section>
      {/* END OF SKILLS */}
      {/* TITLE */}
      <section className="section timeline">
        <div className="section-title">
          <h2>timeline</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center timeline-center">
          <article className="timeline-item">
            <h4>Jun 2024 - Present</h4>
            <p>
              <strong>Front-End Engineer at Sterling Bank</strong>
              <br />
              Engineered financial institution admin platform with
              micro-frontend architecture using Single-SPA. Built 7+ independent
              modules for banking operations including transfers, workflows, and
              reporting systems.
            </p>
            <span className="number">1</span>
          </article>
          <article className="timeline-item">
            <h4>Feb 2025 - Feb 2026</h4>
            <p>
              <strong>Front-End Engineer at Tech Citadel</strong>
              <br />
              Architected NX Monorepo with Module Federation for hymn management
              system. Established scalable architecture supporting 15+ shared
              libraries and reduced build time by 35%.
            </p>
            <span className="number">2</span>
          </article>
          <article className="timeline-item">
            <h4>Feb 2022 - Jun 2024</h4>
            <p>
              <strong>Front-End Developer at SoftCode Innovations</strong>
              <br />
              Developed full-featured e-commerce platform using Angular and
              TypeScript. Integrated payment processing, inventory management,
              and checkout workflows.
            </p>
            <span className="number">3</span>
          </article>
          <article className="timeline-item">
            <h4>2007 - 2016</h4>
            <p>
              <strong>B.Tech. Mechanical Engineering</strong>
              <br />
              Completed Bachelor of Technology degree, laying foundation for
              analytical problem-solving skills applied in software engineering.
            </p>
            <span className="number">4</span>
          </article>
        </div>
      </section>
      {/* END OF TITLE */}
      {/* BLOG */}
      <section className="section blog">
        <div className="section-title">
          <h2>blog</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center blog-center">
          <div className="card">
            <div className="card-side card-front">
              <img src={Img1} alt="" />
              <div className="card-info">
                <h4>article title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur deserunt ratione omnis. Autem assumenda itaque
                  voluptatibus, soluta, a provident maiores nulla consectetur
                  voluptates, velit nam.
                </p>
                <div className="card-footer">
                  <img src={Myphoto} alt="author img" />
                  <p>7 min read</p>
                </div>
              </div>
            </div>
            <div className="card-side card-back">
              <button className="btn">read more</button>
            </div>
          </div>

          <div className="card">
            <div className="card-side card-front">
              <img src={Img2} alt="" />
              <div className="card-info">
                <h4>article title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur deserunt ratione omnis. Autem assumenda itaque
                  voluptatibus, soluta, a provident maiores nulla consectetur
                  voluptates, velit nam.
                </p>
                <div className="card-footer">
                  <img src={Myphoto} alt="author img" />
                  <p>7 min read</p>
                </div>
              </div>
            </div>
            <div className="card-side card-back">
              <button className="btn">read more</button>
            </div>
          </div>
          <div className="card">
            <div className="card-side card-front">
              <img src={Img3} alt="" />
              <div className="card-info">
                <h4>article title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur deserunt ratione omnis. Autem assumenda itaque
                  voluptatibus, soluta, a provident maiores nulla consectetur
                  voluptates, velit nam.
                </p>
                <div className="card-footer">
                  <img src={Myphoto} alt="author img" />
                  <p>7 min read</p>
                </div>
              </div>
            </div>
            <div className="card-side card-back">
              <button className="btn">read more</button>
            </div>
          </div>
          <div className="card">
            <div className="card-side card-front">
              <img src={Img4} alt="" />
              <div className="card-info">
                <h4>article title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur deserunt ratione omnis. Autem assumenda itaque
                  voluptatibus, soluta, a provident maiores nulla consectetur
                  voluptates, velit nam.
                </p>
                <div className="card-footer">
                  <img src={Myphoto} alt="author img" />
                  <p>7 min read</p>
                </div>
              </div>
            </div>
            <div className="card-side card-back">
              <button className="btn">read more</button>
            </div>
          </div>
        </div>
      </section>
      {/* END OF BLOG */}
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

export default Home;
