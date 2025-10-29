import './Footer.css';
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
        <Container style={{ padding: '25px 0 25px 0' }}>
            <Row className="align-items-center">
                <Col sm={6}>
                    <a href="#contact">Contact</a>
                    <p>This site was developed as a learning project. Please do not use any photos and pictures of me from this website for personal, commertial, or any other use.</p>
                </Col>
                <Col sm={6}>
                    <div className="flex space-x-6 mr-10 col">
                        <a href="https://www.linkedin.com/in/kristina-zoria/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-8 h-8"/>
                        </a>
                        <a href="https://github.com/AshariAstroy" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-8 h-8"/>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100007163671719" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="w-8 h-8"/>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer