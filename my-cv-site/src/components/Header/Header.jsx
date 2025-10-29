import './Header.css';
import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import StarBorder from '../animations/StarBorder';
import ShinyText from "../animations/ShinyText";

const navList = [
  { href: '#home', label: 'Home' },
  { href: '#aboutme', label: 'About Me' },
  { href: '#skills', label: 'Skills' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact Me' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="scroll-mt-20 bg-[#121212] sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-6 px-4 lg:px-8">
        <div className="text-3xl font-bold">
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
            className="star-border font-medium"
            color="DeepSkyBlue"
            speed="4s"
            thickness="2"
          >
            <ShinyText 
              text="CV Jane Doe" 
              disabled={false} 
              speed={4} 
              className='custom-class'
            />
            <br />
            <ShinyText 
              text="Full-stack developer" 
              disabled={false} 
              speed={4} 
              className='custom-class'
            />
          </StarBorder>
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-4">
          {/* Social icons */}
          <div className="flex space-x-6 mr-10">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-8 h-8"/>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-8 h-8"/>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-8 h-8"/>
            </a>
          </div>

          {/* Navigation links */}
          {navList.map((link) => {
            if (link.href === '#home') {
              return (
                <StarBorder
                  as="a"
                  href="#home"
                  key={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState(null, '', '#home');
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  }}
                  className="star-border font-medium text-xl"
                >
                  {link.label}
                </StarBorder>
              );
            }

            if (link.href === '#aboutme') {
              return (
                <StarBorder
                  as="a"
                  href="#aboutme"
                  key={link.href}
                  className="star-border font-medium"
                >
                  {link.label}
                </StarBorder>
              );
            }

            if (link.href === '#skills') {
              return (
                <StarBorder
                  as="a"
                  href="#skills"
                  key={link.href}
                  className="star-border font-medium"
                >
                  {link.label}
                </StarBorder>
              );
            }
            if (link.href === '#portfolio') {
              return (
                <StarBorder
                  as="a"
                  href="#portfolio"
                  key={link.href}
                  className="star-border font-medium"
                >
                  {link.label}
                </StarBorder>
              );
            }

            if (link.href === '#contact') {
              return (
                <StarBorder
                  as="a"
                  href="#contact"
                  key={link.href}
                  className="star-border font-medium"
                  color="DeepSkyBlue"
                  speed="4s"
                  thickness="2"
                >
                  {link.label}
                </StarBorder>
              );
            }

            return (
              <StarBorder
                  as="a"
                  href={link.href}
                  key={link.href}
                  className="star-border font-medium text-xl"
                >
                  {link.label}
                </StarBorder>
            );
          })}
        </nav>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-white w-8 h-8"/> : <Menu className="text-white w-8 h-8"/>}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-gray-200 shadow-md px-4 py-6 space-y-5 text-white font-medium">
          {/* Social icons in mobile menu */}
          <div className="flex space-x-4 mb-3">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-8 h-8"/>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-8 h-8"/>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-8 h-8"/>
            </a>
          </div>

          {navList.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className="block text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;