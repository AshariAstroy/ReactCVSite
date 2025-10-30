import './About.css';
import AboutImg from "../../assets/img/jane-photo.jpg";
import CV from "../../assets/other/CV-Jane.pdf";
import StarBorder from '../animations/StarBorder.jsx';
import Qualification from "./Qualification.jsx"

const About = () => {
  return (
    <section className="about" id="aboutme">
      <div className="about__section">
        <div className="about__container-title">
          <h2 className="about__title">About Me</h2>
          <span className="about__subtitle">Get to know more about my journey</span>
        </div>

        <div className="about__container container grid">
          <div className="about__info">
            <p className="about__description">Some text about me that I'll improve later after I'm done coding the website bla bla bla</p>
            <a download="" href={CV} className="about__button button--flex">
              <StarBorder
                as="div"
                className="star-border-download"
                color="DeepSkyBlue"
                speed="4s"
                thickness="2"
              >
                Download CV
              </StarBorder>
            </a>
          </div>
          <div className="about__img-wrapper">
            <img src={AboutImg} alt="Picture of Jane Doe" className="about__img" />
          </div>
        </div>
      </div>

      <Qualification />

    </section>
  )
}

export default About