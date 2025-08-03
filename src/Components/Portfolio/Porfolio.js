import "./Portfolio.css"
import PortfolioCards from "./PortfolioCards";
import { motion } from "framer-motion"
import {useEffect, useState} from "react";
import {Slide} from "react-awesome-reveal";
import {getProjects} from "../Utils/Utils";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}
// animação de Reload da página


const Portfolio = () => {
  const[toggle, setToggle] = useState(true);
  const AllProjects = getProjects();

  return (
    <motion.div className="PortfolioContainer" id={"Projetos"}
                variants={container}
                initial="hidden"
                animate="show">

      <motion.div variants={item} className="PortfolioText">
        <h1 className={"PortfolioTittle"}>PORTFOLIO</h1>
        <h1 className={"LastProject"}>ALGUNS PROJETOS</h1>
      </motion.div>
      <motion.div variants={item} className="PortfolioCardsContainer">
          {AllProjects.slice(0).map((item)=>
            <PortfolioCards key={item.id}
                            CardDesc={item.tittle}
                            CardImage={item.img}
                            Site={item.link}
                            GitLink={item.GitLink}
                            Link={item.link}/>
          )}
      </motion.div>
        
    </motion.div>
  )
}
export default Portfolio;