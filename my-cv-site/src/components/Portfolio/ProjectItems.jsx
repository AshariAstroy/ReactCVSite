import { FaLongArrowAltRight } from "react-icons/fa";

const ProjectItems = ({item}) => {
  return (
    <div className="portfolio__card" key={item.id}>
        <img src={item.image} alt="" className="portfolio__img"/>
        <h3 className="portfolio__card-text">{item.title}</h3>
        <a href="#" className="portfolio__button">
            Demo <FaLongArrowAltRight className="portfolio__button-icon"/>
        </a>
    </div>
  )
}

export default ProjectItems