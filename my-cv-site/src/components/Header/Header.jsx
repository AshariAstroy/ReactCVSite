import './Header.css';
import { FaLinkedin, FaGithub, FaFacebook, FaBars, FaAngleDoubleUp } from "react-icons/fa";
import StarBorder from '../animations/StarBorder';
import ShinyText from "../animations/ShinyText";
import { useState } from 'react';

const Header = () => {
  const [Toggle, showMenu] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#aboutme' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleKeyDown = (e, index) => {
    const links = document.querySelectorAll('.nav__list .nav__link');
    if (e.key === 'ArrowRight') {
      const nextIndex = (index + 1) % links.length;
      links[nextIndex].focus();
    } else if (e.key === 'ArrowLeft') {
      const prevIndex = (index - 1 + links.length) % links.length;
      links[prevIndex].focus();
    }
  };

  const scrollToSection = (href) => {
    const section = document.querySelector(href);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <nav className="nav container header__container">

        {/* Logo */}
        <div className="nav__logo">
          <button onClick={() => scrollToSection('#home')}>
            <StarBorder
              as="a"
              className="star-border"
              color="DeepSkyBlue"
              speed="4s"
              thickness="2"
            >
              <ShinyText text="CV Jane Doe" disabled={false} speed={4} className='logo logo-title' />
              <br />
              <ShinyText text="Full-stack developer" disabled={false} speed={4} className='logo logo-subtitle' />
            </StarBorder>
          </button>
        </div>

        {/* Desktop Icons */}
        <div className="header__icons-section desktop-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="header__icon" /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub className="header__icon" /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="header__icon" /></a>
        </div>

        {/* Menu */}
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            {navLinks.map((link, index) => (
              <li key={index} className="nav__item">
                <StarBorder
                  as="a"
                  href={link.href}
                  className="nav__link star-border"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                    showMenu(false);
                  }}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                >
                  {link.name}
                </StarBorder>
              </li>
            ))}
          </ul>
          <FaAngleDoubleUp className="nav__close" onClick={() => showMenu(false)} />
        </div>

        {/* Overlay */}
        <div className={`overlay ${Toggle ? 'show-overlay' : ''}`}>
          <FaAngleDoubleUp className="closebtn" onClick={() => showMenu(false)} />
          <ul className="nav__list">
            {navLinks.map((link, index) => (
              <li key={index} className="nav__box">
                <a
                  href={link.href}
                  className="nav__link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                    showMenu(false);
                  }}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Icons */}
          <div className="header__icons-section mobile-icons-overlay">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="header__icon" /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub className="header__icon" /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="header__icon" /></a>
          </div>
        </div>

        {/* Hamburger */}
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <FaBars />
        </div>
      </nav>
    </header>
  );
};

export default Header;
