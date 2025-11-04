import './Footer.css';
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <footer className="footer">
        <div className="footer__container container">
            <div>
                <ul className="footer__list">
                    <li>This website was created as a learning project using free tutorials and royalty-free images. All rights belong to their original creators.</li>
                    <li>The CV and portfolio content are for professional purposes only and may not be reused or copied for any other reason.</li>
                    <li>Personal photos of me may not be used for any purpose.</li>
                </ul>
            </div>
            <div>
                <ul className="footer__rights">
                    <li>Jane Doe © {year}</li>
                    <li>All rights reserved.</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer