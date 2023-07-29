/* eslint-disable react/no-unescaped-entities */

const Introduction = () => {
  return (
    <div className="wrapper hero__wrapper bottom-border">
      <div className="hero__content">
        <picture>
          <source media="(min-width: 62.5em)" srcSet="/images/lampham.webp" />
          <source media="(min-width: 37.5em)" srcSet="/images/lampham.webp" />
          <img
            className="hero__image"
            src="/images/lampham.webp"
            alt="picture of Lam Pham"
            width-="174"
            height="383"
          />
        </picture>
        <img
          className="hero__rings"
          src="/images/pattern-rings.svg"
          alt="Lam Pham ring"
          width="530"
          height="129"
        />
        <img
          className="hero__circle"
          src="/images/pattern-circle.svg"
          alt="Lam Pham cicrle"
          width="129"
          height="129"
        />
        <div className="hero__text">
          <h1 className="hero__headline header-xl">
            Nice to meet you! I'm <span>Lam Pham</span>.
          </h1>
          <p className="hero__description">
            Based in Vietnam, As a web developer with a strong passion for
            designing and developing responsive, user-friendly websites, I am
            excited to leverage my technical skills and creativity to contribute
            to the success of Rikkeisoft. My experience in ReactJs, NodeJs,
            React native, and other web technologies, combined with my ability
            to learn quickly and work collaboratively, makes me confident in my
            ability to take on any challenge in the field of web development. I
            am eager to bring my skills and enthusiasm to a dynamic team and
            contribute to building exceptional digital experiences.
          </p>
          <a href="#contact" className="hero__contact underline">
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
