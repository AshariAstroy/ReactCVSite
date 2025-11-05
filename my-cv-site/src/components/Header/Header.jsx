import './Header.css';
import { FaLinkedin, FaGithub, FaFacebook, FaBars, FaAngleDoubleUp } from "react-icons/fa";
import StarBorder from '../animations/StarBorder';
import ShinyText from "../animations/ShinyText";
import { useState } from 'react';

const Header = () => {
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container header__container">
        {/* Logo */}
        <div className="nav__logo">
          <button onClick={(e) => {
            e.preventDefault();
            window.history.pushState(null, '', window.location.pathname);
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}
          >
            <StarBorder
              as="a"
              className="star-border"
              color="DeepSkyBlue"
              speed="4s"
              thickness="2"
            >
              <ShinyText
                text="CV Jane Doe"
                disabled={false}
                speed={4}
                className='logo logo-title'
              />
              <br />
              <ShinyText
                text="Full-stack developer"
                disabled={false}
                speed={4}
                className='logo logo-subtitle'
              />
            </StarBorder>
          </button>
        </div>

        {/* Desktop icons */}
        <div className="header__icons-section desktop-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="header__icon" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="header__icon" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="header__icon" />
          </a>
        </div>

        {/* Menu */}
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <div className="first-row">
              <li className="nav__item">
                <StarBorder
                  as="a"
                  href="#home"
                  speed="5s"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState(null, '', '#home');
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                    showMenu(false); // hides menu on click
                  }}
                  className="nav__link star-border"
                >
                  Home
                </StarBorder>
              </li>

              <li className="nav__item">
                <StarBorder
                  as="a"
                  href="#aboutme"
                  className="nav__link star-border"
                  speed="5s"
                  onClick={() => showMenu(false)}
                >
                  About Me
                </StarBorder>
              </li>

              <li className="nav__item">
                <StarBorder
                  as="a"
                  href="#skills"
                  className="nav__link star-border"
                  speed="5s"
                  onClick={() => showMenu(false)}
                >
                  Skills
                </StarBorder>
              </li>
            </div>

            <div className="second-row">
              <li className="nav__item">
                <StarBorder
                  as="a"
                  href="#portfolio"
                  className="nav__link star-border"
                  speed="5s"
                  onClick={() => showMenu(false)}
                >
                  Portfolio
                </StarBorder>
              </li>

              <li className="nav__item">
                <StarBorder
                  as="a"
                  href="#contact"
                  className="nav__link star-border"
                  color="DeepSkyBlue"
                  speed="4s"
                  thickness="2"
                  onClick={() => showMenu(false)}
                >
                  Contact
                </StarBorder>
              </li>
            </div>

          </ul>

          <FaAngleDoubleUp className="nav__close" onClick={() => showMenu(!Toggle)} />
        </div>


        {/* Overlay */}
        <div id="myNav" className={`overlay ${Toggle ? 'show-overlay' : ''}`}>

          {/* Button to close the overlay navigation */}
          <FaAngleDoubleUp className="closebtn" onClick={() => showMenu(!Toggle)} />

          {/* Overlay content */}
          <ul className="nav__list">
            <li className="nav__box">
              <a href="#home" 
              className="nav__link" 
              onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState(null, '', '#home');
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                  showMenu(false); // hides menu on click
                }}
              >
                Home
              </a>
            </li>

            <li className="nav__box">
              <a href="#aboutme" 
              className="nav__link" 
              onClick={() => showMenu(false)}
              >
                About Me
              </a>
            </li>

            <li className="nav__box">
              <a href="#skills" 
              className="nav__link" 
              onClick={() => showMenu(false)}
              >
                Skills
              </a>
            </li>

            <li className="nav__box">
              <a href="#portfolio" 
              className="nav__link" 
              onClick={() => showMenu(false)}
              >
                Portfolio
              </a>
            </li>

            <li className="nav__box">
              <a href="#contact" 
              className="nav__link" 
              onClick={() => showMenu(false)}
              >
                Contact
              </a>
            </li>
          </ul>
          
          {/* Mobile icons */}
          <div className="header__icons-section mobile-icons-overlay">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="header__icon" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="header__icon" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="header__icon" />
            </a>
          </div>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <FaBars />
        </div>

      </nav>
    </header>
  );
};

export default Header;