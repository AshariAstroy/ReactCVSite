import './About.css';
import AboutImg from "../../assets/img/blank-face.png";
import CV from "../../assets/other/CV-Jane.pdf";
import StarBorder from '../animations/StarBorder.jsx';
import Qualification from "./Qualification.jsx"
import { Container } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about" id="aboutme">
      <Container>
        <div className="about__section">
          <div className="about__container-title">
            <h2 className="about__title">{t('about-title')}</h2>
            <span className="about__subtitle">{t('about-subtitle')}</span>
          </div>

          <div className="about__container container grid">
            <div className="about__info">
              <p className="about__description">{t('about__description')}</p>
              <button
                className="about__button"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = CV;
                  link.download = 'CV-Jane.pdf';
                  link.click();
                }}
              >
                <StarBorder
                  as="div"
                  className="star-border-download"
                  color="DeepSkyBlue"
                  speed="4s"
                  thickness="2"
                >
                  {t('about-download')}
                </StarBorder>
              </button>

            </div>
            <div className="about__img-wrapper">
              <img src={AboutImg} alt={t('about-img')} className="about__img" />
            </div>
          </div>
        </div>
      </Container>

      <Qualification />

    </section>
  )
}

export default About