import './Header.css';
import { FaLinkedin, FaGithub, FaFacebook, FaBars, FaAngleDoubleUp } from "react-icons/fa";
import StarBorder from '../animations/StarBorder';
import ShinyText from "../animations/ShinyText";
import { useState } from 'react';
import LanguageSelector from '../../locales/LanguageSelector';
import LanguageOverlay from '../../locales/LanguageOverlay';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="header">
      <nav className="nav container header__container">
        {/* Logo */}
        <div className="nav__logo">
          <button onClick={(e) => {
            e.preventDefault();
            window.history.pushState(null, '', '/', window.location.pathname);
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
                text={t('cv')}
                disabled={false}
                speed={4}
                className='logo logo-title'
              />
              <br />
              <ShinyText
                text={t('title')}
                disabled={false}
                speed={4}
                className='logo logo-subtitle'
              />
            </StarBorder>
          </button>
        </div>

        {/* Desktop icons */}
        <div className="header__icons-section desktop-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="header__icon" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="header__icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
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
                  href="/home"
                  speed="5s"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState(null, '', '/');
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                    showMenu(false); // hides menu on click
                  }}
                  className="nav__link star-border nav-link"
                >
                  {t('home')}
                </StarBorder>
              </li>

              <li className="nav__item">
                <StarBorder
                  as="a"
                  href="/aboutme"
                  className="nav__link star-border nav-link"
                  speed="5s"
                  onClick={() => showMenu(false)}
                >
                  {t('about')}
                </StarBorder>
              </li>

              <li className="nav__item">
                <StarBorder
                  as="a"
                  href="/skills"
                  className="nav__link star-border nav-link"
                  speed="5s"
                  onClick={() => showMenu(false)}
                >
                  {t('skills')}
                </StarBorder>
              </li>
            </div>

            <div className="second-row">
              <li className="nav__item">
                <StarBorder
                  as="a"
                  href="/portfolio"
                  className="nav__link star-border nav-link"
                  speed="5s"
                  onClick={() => showMenu(false)}
                >
                  {t('portfolio')}
                </StarBorder>
              </li>

              <li className="nav__item">
                <StarBorder
                  as="a"
                  href="/contact"
                  className="nav__link star-border nav-link"
                  color="DeepSkyBlue"
                  speed="4s"
                  thickness="2"
                  onClick={() => showMenu(false)}
                >
                  {t('contact')}
                </StarBorder>
              </li>
            </div>

          </ul>

          <FaAngleDoubleUp className="nav__close" onClick={() => showMenu(!Toggle)} />
        </div>

        {/* Desktop language dropdown */}
        <div className="language">
          <LanguageSelector />
        </div>

        {/* Overlay */}
        <div id="myNav" className={`overlay ${Toggle ? 'show-overlay' : ''}`}>

          {/* Button to close the overlay navigation */}
          <FaAngleDoubleUp className="closebtn" onClick={() => showMenu(!Toggle)} />

          {/* Mobile language overlay button */}
          <div className="language-mobile">
            <LanguageOverlay />
          </div>

          {/* Overlay content */}
          <ul className="nav__list">
            <li className="nav__box">
              <a href="/home"
                className="nav__link nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState(null, '', '/');
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                  showMenu(false); // hides menu on click
                }}
              >
                {t('home')}
              </a>
            </li>

            <li className="nav__box">
              <a href="/aboutme"
                className="nav__link nav-link"
                onClick={() => showMenu(false)}
              >
                {t('about')}
              </a>
            </li>

            <li className="nav__box">
              <a href="/skills"
                className="nav__link nav-link"
                onClick={() => showMenu(false)}
              >
                {t('skills')}
              </a>
            </li>

            <li className="nav__box">
              <a href="/portfolio"
                className="nav__link nav-link"
                onClick={() => showMenu(false)}
              >
                {t('portfolio')}
              </a>
            </li>

            <li className="nav__box">
              <a href="/contact"
                className="nav__link nav-link"
                onClick={() => showMenu(false)}
              >
                {t('contact')}
              </a>
            </li>
          </ul>

          {/* Mobile icons */}
          <div className="header__icons-section mobile-icons-overlay">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="header__icon" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="header__icon" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="header__icon" />
            </a>
          </div>
        </div>

        {/* Mobile menu toggle button */}
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <FaBars />
        </div>

      </nav>
    </header>
  );
};

export default Header;