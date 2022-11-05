import "./Portfolio.css"
import PortfolioCards from "./PortfolioCards";
import Calc from "../../assets/img/Portfolio/calculadora.png"
import fast from "../../assets/img/Portfolio/fastfood.png"
import Login from "../../assets/img/Portfolio/Login.png"
import RnM from  "../../assets/img/Portfolio/RicknMorty.webp"
import { motion } from "framer-motion"

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
  return (
    <motion.div className="PortfolioContainer" id={"Projetos"}
                variants={container}
                initial="hidden"
                animate="show">

      <motion.div variants={item} className="PortfolioText">
        <h1 className={"PortfolioTittle"}>PORTFOLIO</h1>
        <h1 className={"LastProject"}>ULTIMOS PROJETOS</h1>
      </motion.div>

      <motion.div variants={item} className="PortfolioCardsContainer">
        <PortfolioCards CardImage={fast} CardDesc={"Projeto Fast Food"}
                        Site={"https://delivery-orpin-sigma.vercel.app"}/>

        <PortfolioCards CardImage={Login} CardDesc={"Tela de Login"}
                        Site={"https://login-screen-ten.vercel.app"}/>
        <PortfolioCards CardImage={RnM} CardDesc={"Rick and Morty API"}
                        Site={"https://rick-and-morty-six-khaki.vercel.app"}/>
      </motion.div>

    </motion.div>
  )
}
export default Portfolio;