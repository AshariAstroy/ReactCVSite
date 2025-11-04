import './Portfolio.css';
import Projects from './Projects';
import { Container, Row } from 'react-bootstrap';


const Portfolio = () => {

    return (
        <section className="portfolio" id="portfolio">
            <Container>
                <div className="portfolio__container-title">
                    <h2 className="portfolio__title">Portfolio</h2>
                    <p className="portfolio__subtitle">Hey, check this out!</p>
                    <p className="portfolio__text">Some projects were the testing grounds to improve my skills.</p>
                </div>
            </Container>

            <Row>
                <Projects />
            </Row>
        </section>
    )
}

export default Portfolio