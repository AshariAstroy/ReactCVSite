import { useState } from 'react'
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import './Qualification.css';
import { Container, Row } from 'react-bootstrap';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="qualification section">
      <Container>
        <Row className="align-items-center">
          <h2 className="qualification__journey">Qualification</h2>
          <span className="qualification__subtitle__journey">My path to improvement</span>
        </Row>
          <div className="qualification__container container">
            <div className="qualification__tabs">
              {/* tabs */}
              <div
                className={toggleState === 1 ?
                  "qualification__button qualification__active buttton--flex" :
                  "qualification__button buttton--flex"}
                onClick={() => toggleTab(1)}
              >
                <i className="uil uil-graduation-cap"></i>{" "}
                <FaGraduationCap className="qualification__icon w-9 h-9" /> Education
              </div>

              <div
                className={toggleState === 2 ?
                  "qualification__button qualification__active buttton--flex" :
                  "qualification__button buttton--flex"}
                onClick={() => toggleTab(2)}
              >
                <i className="uil uil-graduation-cap"></i>
                {<FaBriefcase className="qualification__icon w-8 h-8" />}
                Experience
              </div>
            </div>

            <div className="qualification__sections">
              
              <div
                className={toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"}
              >
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Full-stack developer</h3>
                    <span className="qualification__subtitle">Some place - Anywhere</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calendar-alt"></i>
                      <FaCalendarAlt className="qualification__calender-icon" />
                      Year - Year
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div></div>
                </div>

                <div className="qualification__data">
                  <div></div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div>
                    <h3 className="qualification__title">Specialist</h3>
                    <span className="qualification__subtitle">Some place</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i>
                      <FaCalendarAlt className="qualification__calender-icon" />
                      Date Year - Date Year
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
                  <div>
                    <h3 className="qualification__title">Course</h3>
                    <span className="qualification__subtitle">Another place</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i>
                      <FaCalendarAlt className="qualification__calender-icon" />
                      Date Year - Date Year
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div></div>
                </div>

                <div className="qualification__data">
                  <div></div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div>
                    <h3 className="qualification__title">Work position</h3>
                    <span className="qualification__subtitle">
                      Work place number 1
                    </span>
                    <div className="qualification__calender">
                      <i className="uil uil-calender-alt"></i>
                      <FaCalendarAlt className="qualification__calender-icon" />
                      Date Year - Date Year
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