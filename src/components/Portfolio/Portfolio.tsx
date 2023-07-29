import React from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import { ListContact } from "../../common/ListContact";
import { Contact, Introduction, Project, Skill } from "./Content";

const Portfolio = () => {
  return (
    <React.Fragment>
      <ListContact />
      <Header />
      <main id="main">
        <section className="hero">
          <Introduction />
        </section>
        <section id="skill" className="skills">
          <Skill />
        </section>
        <section id="project" className="projects">
          <Project />
        </section>
        <section id="contact" className="contact bg-less-dark">
          <Contact />
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Portfolio;
