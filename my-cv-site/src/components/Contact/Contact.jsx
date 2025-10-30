import './Contact.css';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from "../../assets/img/contact-img.svg";
import StarBorder from '../animations/StarBorder';

const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        companyName: '',
        jobTitle: '',
        email: '',
        phone: '',
        message: '',
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ success: true, message: 'Message sent successfully!' });
        } else {
            setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        }
    }

    return (
        <section className="contact" id="contact">
            <Container>
                <div className="contact__section">
                    <div className="contact__container-title">
                        <h2>Get in touch!</h2>
                    </div>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <form onSubmit={handleSubmit}>
                                <Row>
                                    <Col size={12} sm={6} className="px-1">
                                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input type="text" value={formDetails.companyName} placeholder="Company Name" onChange={(e) => onFormUpdate('companyName', e.target.value)} />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input type="text" value={formDetails.jobTitle} placeholder="Job Title" onChange={(e) => onFormUpdate('jobTitle', e.target.value)} />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input type="tel" value={formDetails.phone} placeholder="Telephone" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                    </Col>
                                    <Col size={12} className="px-1">
                                        <textarea rows={6} value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                        <button className="contact__button">
                                            <StarBorder
                                                as="div"
                                                className="star-border-send"
                                                color="DeepSkyBlue"
                                                speed="4s"
                                                thickness="2"
                                            >
                                                {buttonText}
                                            </StarBorder>
                                        </button>
                                    </Col>
                                    {
                                        status.message &&
                                        <Col>
                                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                        </Col>
                                    }
                                </Row>
                            </form>
                        </Col>

                        <Col xs={12} md={6} xl={5}>
                            <img src={contactImg} alt="Contact me" />
                        </Col>

                    </Row>
                </div>
            </Container>
        </section>
    )
}


export default Contact