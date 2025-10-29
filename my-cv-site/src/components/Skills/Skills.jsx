import './Skills.css';
import { Container, Row, Col } from 'react-bootstrap';
import skillsImg from "../../assets/img/skills-img.svg";

const Skills = () => {
    return (
        <section className="skill" id="skills">
            <Container>
                <Row className="align-items-center">
                    <div>
                        <h2 className="skill__title">Skills</h2>
                        <p className="skill__subtitle">I enjoy learning new things.</p>
                        <p className="skill__text">Here are some of the things that I've learned, learning, and continue to learn and improve.</p>
                    </div>
                </Row>
                <Row className="align-items-center">
                    <Col xs={12} lg={7}>
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
                            <p className="skill__box">DNS & Hosting</p>
                            <p className="skill__box">Customer Support</p>
                            <p className="skill__box">Server-side support</p>
                        </div>
                    </Col>
                    <Col xs={12} lg={5}>
                        <img src={skillsImg} alt="Skills"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skills