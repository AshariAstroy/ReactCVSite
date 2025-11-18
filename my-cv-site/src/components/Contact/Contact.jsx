import './Contact.css';
import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";
import contactImg from "../../assets/img/contact-img.svg";
import StarBorder from '../animations/StarBorder';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t, i18n } = useTranslation();
    const [captchaValue, setCaptchaValue] = useState(null);

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        companyName: '',
        jobTitle: '',
        email: '',
        phone: '',
        message: '',
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState(t('contact-send'));
    useEffect(() => {
        setButtonText(t('contact-send'));
    }, [i18n.language, t]);

    const [popup, setPopup] = useState(null);
    const [errors, setErrors] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };

    const showPopupMessage = (message, type = "success") => {
        setPopup({ message, type });
        setTimeout(() => setPopup(null), 3000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText(t('contact-send') + '...');

        const fieldLabels = {
            firstName: t('contact-form-1'),
            lastName: t('contact-form-2'),
            companyName: t('contact-form-3'),
            jobTitle: t('contact-form-4'),
            email: t('contact-form-5'),
            phone: t('contact-form-6'),
            message: t('contact-form-7'),
        };

        const newErrors = {};
        for (const [key, value] of Object.entries(formDetails)) {
            if (!value.trim()) {
                newErrors[key] = `${fieldLabels[key]} ${t('contact-error-1').split(' ')[1]}`; // or add separate keys for "required"
            }
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setButtonText(t('contact-send'));
            return;
        }

        setErrors({});

        if (!captchaValue) {
            alert(t('contact-error-8'));
            setButtonText(t('contact-send'));
            return;
        }

        try {
            let response = await fetch("https://kristina-zoria.com/contact-form.php", {
                method: "POST",
                headers: { "Content-Type": "application/json;charset=utf-8" },
                body: JSON.stringify(formDetails),
                token: captchaValue,
            });

            let result = await response.json();
            if (result.code === 200) {
                setFormDetails(formInitialDetails);
                setStatus({ success: true, message: t('contact-success-1') });
                showPopupMessage(t('contact-success-1'), 'success');
            } else {
                setStatus({ success: false, message: t('contact-error-9') });
                showPopupMessage(t('contact-error-9'), 'danger');
            }
        } catch (error) {
            setStatus({ success: false, message: t('contact-error-9') });
            showPopupMessage(t('contact-error-9'), 'danger');
            console.error(error);
        }

        setButtonText(t('contact-send'));
    };

    return (
        <section className="contact" id="contact">
            <Container>
                <div className="contact__section">
                    <div className="contact__container-title">
                        <h2>{t('contact-title', 'Get in touch!')}</h2>
                    </div>
                    <div className="contact__container">
                        <div className="contact__form">
                            <form onSubmit={handleSubmit}>
                                <Row>
                                    <Col size={12} sm={6} className="px-1">
                                        <input
                                            type="text"
                                            value={formDetails.firstName}
                                            placeholder={errors.firstName || t('contact-form-1')}
                                            onChange={(e) => {
                                                onFormUpdate('firstName', e.target.value);
                                                setErrors({ ...errors, firstName: '' });
                                            }}
                                        />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input
                                            type="text"
                                            value={formDetails.lastName}
                                            placeholder={errors.lastName || t('contact-form-2')}
                                            onChange={(e) => {
                                                onFormUpdate('lastName', e.target.value);
                                                setErrors({ ...errors, lastName: '' });
                                            }}
                                        />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input
                                            type="text"
                                            value={formDetails.companyName}
                                            placeholder={errors.companyName || t('contact-form-3')}
                                            onChange={(e) => {
                                                onFormUpdate('companyName', e.target.value);
                                                setErrors({ ...errors, companyName: '' });
                                            }}
                                        />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input
                                            type="text"
                                            value={formDetails.jobTitle}
                                            placeholder={errors.jobTitle || t('contact-form-4')}
                                            onChange={(e) => {
                                                onFormUpdate('jobTitle', e.target.value);
                                                setErrors({ ...errors, jobTitle: '' });
                                            }}
                                        />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input
                                            type="email"
                                            value={formDetails.email}
                                            placeholder={errors.email || t('contact-form-5')}
                                            onChange={(e) => {
                                                onFormUpdate('email', e.target.value);
                                                setErrors({ ...errors, email: '' });
                                            }}
                                        />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input
                                            type="tel"
                                            value={formDetails.phone}
                                            placeholder={errors.phone || t('contact-form-6')}
                                            onChange={(e) => {
                                                onFormUpdate('phone', e.target.value);
                                                setErrors({ ...errors, phone: '' });
                                            }}
                                        />
                                    </Col>
                                    <Col size={12} className="px-1">
                                        <textarea
                                            rows={6}
                                            value={formDetails.message}
                                            placeholder={errors.message || t('contact-form-7')}
                                            onChange={(e) => {
                                                onFormUpdate('message', e.target.value);
                                                setErrors({ ...errors, message: '' });
                                            }}
                                        ></textarea>

                                        <div className="contact__send-area">
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
                                            <ReCAPTCHA
                                                className="captcha"
                                                sitekey="6Ld1twMsAAAAADJQLnI7vesiRWBe-ruKz02eF0bL"
                                                onChange={(value) => setCaptchaValue(value)}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </form>
                        </div>

                        <div className="contact__img-wrapper">
                            <img src={contactImg} alt={t('contact-img')} />
                        </div>
                    </div>
                </div>
            </Container>

            {popup && (
                <div id="statusPopup">
                    <div className={`status-message ${popup.type}`}>
                        {popup.message}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;