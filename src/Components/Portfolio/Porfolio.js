import "./Portfolio.css"
import PortfolioCards from "./PortfolioCards";
import Calc from "../../assets/img/Portfolio/calculadora.png"
import fast from "../../assets/img/Portfolio/fastfood.png"
import Login from "../../assets/img/Portfolio/Login.png"
import RnM from  "../../assets/img/Portfolio/RicknMorty.webp"
import Nft from  "../../assets/img/Portfolio/Nft.png"
import Banking from  "../../assets/img/Portfolio/Banking.png"
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
  const Projetos =[
    {id:1 , tittle:"Projeto Fast Food", img:fast, link:"https://delivery-orpin-sigma.vercel.app"},
    {id:2 , tittle:"Tela de Login", img:Login, link:"https://login-screen-ten.vercel.app"},
    {id:3 , tittle:"Rick and Morty API", img:RnM, link:"https://rick-and-morty-six-khaki.vercel.app"},
    {id:4 , tittle:"Ladding Page NFT", img:Nft, link:"https://ladding-page-nft.vercel.app"},
    {id:5 , tittle:"Banking Page", img:Banking, link:"https://bank-project-alpha.vercel.app"},
  ]
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
        {Projetos.map((item)=>
          <PortfolioCards key={item.id} CardDesc={item.tittle} CardImage={item.img} Site={item.link}/>
        )}
      </motion.div>

    </motion.div>
  )
}
export default Portfolio;