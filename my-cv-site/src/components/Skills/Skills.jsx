import './Skills.css';
import { Container, Row, Col } from 'react-bootstrap';
import skillsImg from "../../assets/img/skills-img.svg";
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();

    return (
        <section className="skill" id="skills">
            <Container>
                <div className="skills__section">
                    <div className="skills__container-title">
                        <h2 className="skill__title">{t('skills-title')}</h2>
                        <p className="skill__subtitle">{t('skills-subtitle')}</p>
                        <p className="skill__text">{t('skills-text')}</p>
                    </div>
                    <div className="skills__container">
                        <div className="skill__boxes">
                            <p className="skill__box">C#</p>
                            <p className="skill__box">.NET (ASP.NET Core MVC)</p>
                            <p className="skill__box">JavaScript</p>
                            <p className="skill__box">Git</p>
                            <p className="skill__box">HTML</p>
                            <p className="skill__box">CSS</p>
                            <p className="skill__box">EF Core</p>
                            <p className="skill__box">Azure</p>
                            <p className="skill__box">Razor</p>
                            <p className="skill__box">Blazor</p>
                            <p className="skill__box">React</p>
                            <p className="skill__box">Angular</p>
                            <p className="skill__box">cPanel & WHM</p>
                            <p className="skill__box">{t('skills-skill-1')}</p>
                            <p className="skill__box">{t('skills-skill-2')}</p>
                            <p className="skill__box">{t('skills-skill-3')}</p>
                        </div>
                        <div className="skill__img-wrapper">
                            <img src={skillsImg} alt={t('skills-img')} />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Skills