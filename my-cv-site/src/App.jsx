import { useEffect } from 'react';
import './i18n';
import ScrollToTopBtn from "./scroll-up";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FloatingStars from "./components/animations/FloatingStars";

const App = () => {

  useEffect(() => {
    // Function to navigate to a section
    function navigateTo(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // Update URL without reloading
        window.history.pushState({}, '', '/' + sectionId);
      }
    }

    // Add click handlers to nav links
    const links = document.querySelectorAll('a.nav-link');
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.getAttribute('href').replace('/', '');
        navigateTo(target);
      });
    });

    // Cleanup function to remove event listeners if component unmounts
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', navigateTo);
      });
    };
  }, []);

  return (
    <div>
      <ScrollToTopBtn />
      <Header/>
      <Banner id="home"/>
      <FloatingStars/>
      <About id="about"/>
      <FloatingStars/>
      <Skills id="skills"/>
      <FloatingStars/>
      <Portfolio id="portfolio"/>
      <FloatingStars/>
      <Contact id="contact"/>
      <Footer/>
    </div>
  )
}

export default App