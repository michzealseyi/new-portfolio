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
              href="https://www.linkedin.com/in/mr-michael-owolabi-321775117"
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
            <h1>i'm michael</h1>
            <h4>freelance front-end react developer</h4>
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
                href="https://www.linkedin.com/in/mr-michael-owolabi-321775117"
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
              <p>
                Highly skilled and motivated Front-End React Developer with a
                year of experience in building user-friendly and responsive web
                applications.
              </p>
              <p>
                Seeking a challenging position to utilize my expertise in
                React.js, HTML, CSS, and JavaScript to contribute to the success
                of a dynamic organization.
              </p>
              <p>
                Knowledge of testing frameworks like Jest and Enzyme for unit
                testing React components.
              </p>
              <p>
                Ability to optimize React applications for performance,
                including code splitting, lazy loading, and performance
                profiling.
              </p>
              <p>
                Experience with CI/CD pipelines, using tools like Jenkins or
                Travis CI for automated build, test, and deployment processes.
              </p>
              <p>
                Excellent communication and collaboration skills, with the
                ability to work effectively in a team environment.
              </p>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              nobis quos maxime ea est natus earum, dolor placeat aliquam esse
              sit voluptatum architecto necessitatibus minus aliquid iste ex
              explicabo magnam.
            </p>
          </article>
          <article className="service">
            <i className="service-icon">
              <Sketchsvg />
            </i>
            <h4>web design</h4>
            <div className="underline"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              nobis quos maxime ea est natus earum, dolor placeat aliquam esse
              sit voluptatum architecto necessitatibus minus aliquid iste ex
              explicabo magnam.
            </p>
          </article>
          <article className="service">
            <i className="service-icon">
              <Androidsvg />
            </i>
            <h4>app design</h4>
            <div className="underline"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              nobis quos maxime ea est natus earum, dolor placeat aliquam esse
              sit voluptatum architecto necessitatibus minus aliquid iste ex
              explicabo magnam.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quaerat
            incidunt odit aspernatur exercitationem asperiores. Eius natus, iure
            hic aliquam odio magni minus, nulla atque necessitatibus enim
            dolores autem reiciendis dolore ad qui sit explicabo distinctio!
            Beatae sequi sit amet!
          </p>
        </div>
        <div className="section-center project-center">
          <Link to="/projects" className="project-1">
            <article className="project">
              <img src={Img1} alt="single project" className="project-img" />
              <div className="project-info">
                <h4>project title</h4>
                <p>client name</p>
              </div>
            </article>
          </Link>
          <Link to="/projects" className="project-2">
            <article className="project">
              <img src={Img2} alt="single project" className="project-img" />
              <div className="project-info">
                <h4>project title</h4>
                <p>client name</p>
              </div>
            </article>
          </Link>
          <Link to="/projects" className="project-3">
            <article className="project">
              <img src={Img3} alt="single project" className="project-img" />
              <div className="project-info">
                <h4>project title</h4>
                <p>client name</p>
              </div>
            </article>
          </Link>
          <Link to="/projects" className="project-4">
            <article className="project">
              <img src={Img4} alt="single project" className="project-img" />
              <div className="project-info">
                <h4>project title</h4>
                <p>client name</p>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
            facilis eligendi sunt, quas voluptates tenetur voluptatum dolorum.
            Iste distinctio qui quasi repellat nisi odit recusandae dignissimos
            fuga velit quod neque, ab quis, rem natus, ipsa quibusdam ad quos.
            Sequi, tempore!
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
              <p>HTML/CSS</p>
              <div className="skill-container">
                <div className="skill-value value-50"></div>
                <p className="skill-text skill-text-50">50%</p>
              </div>
            </div>
            <div className="skill">
              <p>javascript</p>
              <div className="skill-container">
                <div className="skill-value value-70"></div>
                <p className="skill-text skill-text-70">70%</p>
              </div>
            </div>
            <div className="skill">
              <p>react js</p>
              <div className="skill-container">
                <div className="skill-value value-90"></div>
                <p className="skill-text skill-text-90">90%</p>
              </div>
            </div>
          </article>
          <article>
            <h3>back end</h3>
            <div className="skill">
              <p>HTML/CSS</p>
              <div className="skill-container">
                <div className="skill-value value-50"></div>
                <p className="skill-text skill-text-50">50%</p>
              </div>
            </div>
            <div className="skill">
              <p>javascript</p>
              <div className="skill-container">
                <div className="skill-value value-50"></div>
                <p className="skill-text skill-text-50">50%</p>
              </div>
            </div>
            <div className="skill">
              <p>react js</p>
              <div className="skill-container">
                <div className="skill-value value-70"></div>
                <p className="skill-text skill-text-70">70%</p>
              </div>
            </div>
          </article>
        </div>
      </section>
      {/* END OF SKILLS */}
    </div>
  );
}

export default Home;
