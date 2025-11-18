import './Portfolio.css';
import Projects from './Projects';
import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


const Portfolio = () => {
    const { t } = useTranslation();

    return (
        <section className="portfolio" id="portfolio">
            <Container>
                <div className="portfolio__container-title">
                    <h2 className="portfolio__title">{t('portfolio-title')}</h2>
                    <p className="portfolio__subtitle">{t('portfolio-subtitle')}</p>
                    <p className="portfolio__text">{t('portfolio-text')}</p>
                </div>
            </Container>

            <Row>
                <Projects />
            </Row>
        </section>
    )
}

export default Portfolio