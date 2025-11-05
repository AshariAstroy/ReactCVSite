import './Portfolio.css';
import { projectsData } from './Data';
import { projectNav } from './Data';
import ProjectItems from './ProjectItems';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';


const Projects = () => {
    const [item, setItem] = useState({ name: 'All' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === 'All') {
            setProjects(projectsData);
        }
        else {
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent });
        setActive(index);
    }

    return (
        <Container>
            <Row className="align-items-center">
                <div className="portfolio__filters">
                    {projectNav.map((item, index) => {
                        return (<button
                        type="button"
                        onClick={(e) => handleClick(e, index)}
                        className={`${active === index ? 'active-portfolio' : ""} portfolio__item`}
                        key={index}
                        >
                            {item.name}
                        </button>);
                    })}
                </div>
            </Row>

            <div className="portfolio__container container grid">
                {projects.map((item) => {
                    return <ProjectItems item={item} key={item.id} />;
                })}
            </div>

        </Container>
    )
}

export default Projects