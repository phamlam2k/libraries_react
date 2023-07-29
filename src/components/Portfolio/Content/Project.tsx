const Project = () => {
  return (
    <div className="wrapper projects__wrapper">
      <div className="projects__grid">
        <h2 className="projects__headline header-xl">Projects</h2>
        <a href="#contact" className="projects__contact underline">
          Contact me
        </a>

        <div className="projects__item">
          <picture className="projects__picture">
            <source
              media="(min-width: 62.5em)"
              srcSet="/images/TitanHunterApp.webp"
            />
            <img
              className="projects__image"
              src="/images/TitanHunerApp.webp"
              alt="screenshot of To Do App showing a list of active and complete tasks"
              width-="343"
              height="253"
            />
          </picture>
          <h3 className="projects__name">Titan Hunter App</h3>
          <p className="projects__tags">
            <span>NextJS</span>
            <span>Typescript</span>
            <span>Tailwind</span>
            <span>Web3.0</span>
          </p>
          <div className="projects__links">
            <a
              href="https://app.titanhunters.io/"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="projects__item">
          <picture className="projects__picture">
            <source
              media="(min-width: 62.5em)"
              srcSet="/images/TitanHunterLandingPage.webp"
            />
            <img
              className="projects__image"
              src="/images/TitanHunterLandingPage.webp"
              alt="screenshot of video player app with grid of thumbnails of movies and TV shows"
              width-="343"
              height="253"
            />
          </picture>
          <h3 className="projects__name">Titan Hunter LandingPage</h3>
          <p className="projects__tags">
            <span>Nextjs</span>
            <span>Typecript</span>
            <span>Tailwind</span>
          </p>
          <div className="projects__links">
            <a
              href="https://www.titanhunters.io/"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="projects__item">
          <picture className="projects__picture">
            <source
              media="(min-width: 62.5em)"
              srcSet="/images/Go2ELandingPage.webp"
            />
            <img
              className="projects__image"
              src="/images/Go2ELandingPage.webp"
              alt="screenshot of video player app with grid of thumbnails of movies and TV shows"
              width-="343"
              height="253"
            />
          </picture>
          <h3 className="projects__name">Go2E LandingPage</h3>
          <p className="projects__tags">
            <span>PHP</span>
            <span>HTML</span>
            <span>CSS</span>
          </p>
          <div className="projects__links">
            <a
              href="https://go2e.io/"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="projects__item">
          <picture className="projects__picture">
            <source media="(min-width: 62.5em)" srcSet="/images/Go2EApp.webp" />
            <img
              className="projects__image"
              src="/images/Go2EApp.webp"
              alt="screenshot of video player app with grid of thumbnails of movies and TV shows"
              width-="343"
              height="253"
            />
          </picture>
          <h3 className="projects__name">Go2E App</h3>
          <p className="projects__tags">
            <span>Nextjs</span>
            <span>Typecript</span>
            <span>Tailwind</span>
          </p>
          <div className="projects__links">
            <a
              href="https://app.go2e.io/"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
