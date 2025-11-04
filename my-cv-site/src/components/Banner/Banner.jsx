import './Banner.css';
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/banner-img.svg";
import { useEffect, useState } from "react";
import StarBorder from '../animations/StarBorder';


const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Full-stack developer", "C# developer", ".NET developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <div className="banner__section">
                    <div className="banner__hello-section">
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Jane, `}</h1>
                        <h1 className="movingtext"><span className="wrap">{text}</span></h1>
                        <p>Some text that I'll later replace with something short and nice.</p>
                        <button onClick={() => {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        >
                            <StarBorder
                                as="div"
                                className="relative"
                                color="DeepSkyBlue"
                                speed="4s"
                                thickness="2"
                            >
                                Let's connect!
                            </StarBorder>
                        </button>
                    </div>
                    <div className="banner__img-wrapper">
                        <img src={headerImg} alt="Header image" />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Banner