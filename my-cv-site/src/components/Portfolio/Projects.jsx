import './Portfolio.css';
import { projectsData, projectNav } from './Data';
import ProjectItems from './ProjectItems';
import { Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';


const Projects = () => {
  const { t } = useTranslation();
  const [item, setItem] = useState(projectNav[0]); // default: first category
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.key === 'portfolio-category-all') {
      setProjects(projectsData);
    } else {
      setProjects(projectsData.filter(project => project.category === item.key));
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem(projectNav[index]);
    setActive(index);
  }

  return (
    <Container>
      <Row className="align-items-center">
        <div className="portfolio__filters">
          {projectNav.map((navItem, index) => (
            <button
              type="button"
              onClick={(e) => handleClick(e, index)}
              className={`${active === index ? 'active-portfolio' : ""} portfolio__item`}
              key={index}
            >
              {t(navItem.key)}
            </button>
          ))}
        </div>
      </Row>

      <div className="portfolio__container container grid">
        {projects.map((proj) => (
          <ProjectItems 
            item={{ ...proj, title: t(proj.title) }} 
            key={proj.id} 
          />
        ))}
      </div>
    </Container>
  )
}

export default Projects