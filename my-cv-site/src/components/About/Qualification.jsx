import { useState } from 'react'
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import './Qualification.css';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Qualification = () => {
  const { t } = useTranslation();
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="qualification">
      <Container>
        <div className="qualification__section">

          <div className="qualification__container-title">
            <h2 className="qualification__journey">{t('qualification-title')}</h2>
            <span className="qualification__subtitle__journey">{t('qualification-subtitle')}</span>
          </div>

          <div className="qualification__container container">
            <div className="qualification__tabs">
              {/* tabs */}
              <button
                type="button"
                className={toggleState === 1
                  ? "qualification__button qualification__active buttton--flex"
                  : "qualification__button buttton--flex"}
                onClick={() => toggleTab(1)}
              >
                <FaGraduationCap className="qualification__icon" /> {t('qualification-tab-1')}
              </button>

              <button
                type="button"
                className={toggleState === 2
                  ? "qualification__button qualification__active buttton--flex"
                  : "qualification__button buttton--flex"}
                onClick={() => toggleTab(2)}
              >
                <FaBriefcase className="qualification__icon" /> {t('qualification-tab-2')}
              </button>

            </div>

            <div className="qualification__sections">

              <div
                className={toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"}
              >
                <div className="qualification__data">
                  <div className="qualification__data-left">
                    <h3 className="qualification__title">{t('qualification-education-1')}</h3>
                    <span className="qualification__subtitle">{t('qualification-education-place-1')}</span>
                    <div className="qualification__calender">
                      <FaCalendarAlt className="qualification__calender-icon" />
                      {t('qualification-education-year-1')}
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div></div>
                </div>

                <span className="qualification__border-mobile"></span>

                <div className="qualification__data">
                  <div></div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div className="qualification__data-right">
                    <h3 className="qualification__title">{t('qualification-education-2')}</h3>
                    <span className="qualification__subtitle">{t('qualification-education-place-2')}</span>
                    <div className="qualification__calender">
                      <FaCalendarAlt className="qualification__calender-icon" />
                      {t('qualification-education-year-2')}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"}
              >
                <div className="qualification__data">
                  <div className="qualification__data-left">
                    <h3 className="qualification__title">{t('qualification-job-1')}</h3>
                    <span className="qualification__subtitle">{t('qualification-job-place-1')}</span>
                    <div className="qualification__calender">
                      <FaCalendarAlt className="qualification__calender-icon" />
                      {t('qualification-job-year-1')}
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div></div>
                </div>

                <span className="qualification__border-mobile"></span>

                <div className="qualification__data">
                  <div></div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div className="qualification__data-right">
                    <h3 className="qualification__title">{t('qualification-job-2')}</h3>
                    <span className="qualification__subtitle">{t('qualification-job-place-2')}</span>
                    <div className="qualification__calender">
                      <FaCalendarAlt className="qualification__calender-icon" />
                      {t('qualification-job-year-2')}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}

export default Qualification;