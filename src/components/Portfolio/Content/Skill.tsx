const Skill = () => {
  return (
    <>
      <div className="wrapper skills__wrapper bottom-border">
        <h2 className="visually-hidden">Skills</h2>
        <div className="skills__item">
          <h3 className="skills__title">HTML</h3>
          <p className="skills__description">2 Years Experience</p>
        </div>
        <div className="skills__item">
          <h3 className="skills__title">CSS</h3>
          <p className="skills__description">2 Years Experience</p>
        </div>
        <div className="skills__item">
          <h3 className="skills__title">JavaScript</h3>
          <p className="skills__description">1 Year Experience</p>
        </div>
        <div className="skills__item">
          <h3 className="skills__title">Accessibility</h3>
          <p className="skills__description">2 Years Experience</p>
        </div>
        <div className="skills__item">
          <h3 className="skills__title">ReactJs</h3>
          <p className="skills__description">1 Year Experience</p>
        </div>
        <div className="skills__item">
          <h3 className="skills__title">NodeJs</h3>
          <p className="skills__description">6 Months Experience</p>
        </div>
      </div>
      <img
        className="skills__rings"
        src="/images/pattern-rings.svg"
        alt=""
        width="530"
        height="129"
      />
    </>
  );
};

export default Skill;
