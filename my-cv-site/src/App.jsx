import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FloatingStars from "./components/animations/FloatingStars";

const App = () => {

  return (
    <div>
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
      <FloatingStars/>
      <Footer/>
    </div>
  )
}

export default App