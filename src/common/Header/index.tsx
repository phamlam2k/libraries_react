import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <h2 className="visually-hidden">Header</h2>
      <div className="wrapper">
        <nav className="header__nav">
          <h2 className="visually-hidden">Navigation</h2>
          <Link href="/" className="header__home">
            Lam Pham
            <span className="visually-hidden">(to home page)</span>
          </Link>

          <div className="menu-header">
            <a href="#skill" className="menu-header__link">
              Skill
            </a>
            <a href="#project" className="menu-header__link">
              Project
            </a>
            <a href="#contact" className="menu-header__link">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
