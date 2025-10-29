import './Portfolio.css';
import Projects from './Projects';
import { Container, Row, Col } from 'react-bootstrap';


const Portfolio = () => {

  return (
    <section className="portfolio" id="portfolio">
        <Container>
            <Row className="align-items-center">
                <Col>
                    <div>
                        <h2 className="portfolio__title">Portfolio</h2>
                        <p className="portfolio__subtitle">Hey, check this out!</p>
                        <p className="portfolio__text">Some projects were the testing grounds to improve my skills.</p>
                    </div>
                </Col>
                <Row>
                    <Projects />
                </Row>
            </Row>
        </Container>
    </section>
  )
}

export default Portfolio