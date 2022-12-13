import "./Portfolio.css"
import PortfolioCards from "./PortfolioCards";
import Calc from "../../assets/img/Portfolio/calculadora.png"
import fast from "../../assets/img/Portfolio/fastfood.png"
import Login from "../../assets/img/Portfolio/Login.png"
import RnM from  "../../assets/img/Portfolio/RicknMorty.webp"
import Nft from  "../../assets/img/Portfolio/Nft.png"
import Banking from  "../../assets/img/Portfolio/Banking.png"
import CommingSoon from  "../../assets/img/Portfolio/Comming-Soon.png"
import NftMarket from  "../../assets/img/Portfolio/NftMarket.png"
import Gow from  "../../assets/img/Portfolio/Gow.png"
import Porfolio from  "../../assets/img/Portfolio/Porfolio.png"
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
    {id:1 , tittle:"Projeto Fast Food", img:fast, link:"https://delivery-orpin-sigma.vercel.app",GitLink:"https://github.com/lucas694/Delevery-Project-React"},
    {id:2 , tittle:"Tela de Login", img:Login, link:"https://login-screen-ten.vercel.app",GitLink:"https://github.com/lucas694/LoginScreen"},
    {id:3 , tittle:"Meu Portfolio", img:Porfolio, link:"https://portfolio-react-nine-sigma.vercel.app",GitLink:"https://github.com/lucas694/Portfolio"},
    {id:4 , tittle:"Rick and Morty API", img:RnM, link:"https://rick-and-morty-six-khaki.vercel.app",GitLink:"https://github.com/lucas694/Rick-and-Morty"},
    {id:5 , tittle:"Ladding Page NFT", img:Nft, link:"https://ladding-page-nft.vercel.app",GitLink:"https://github.com/lucas694/Ladding-page-Nft"},
    {id:6 , tittle:"Banking Page", img:Banking, link:"https://bank-project-alpha.vercel.app",GitLink:"https://github.com/lucas694/Bank-Project"},
    {id:7 , tittle:"NFT Marketplace", img:NftMarket, link:"https://nft-marketplace-drab-six.vercel.app",GitLink:"https://github.com/lucas694/Nft-Marketplace"},
    {id:8 , tittle:"God of War Page", img:Gow, link:"https://gow-ruddy.vercel.app",GitLink:"https://github.com/lucas694/Gow"},
    {id:9 , tittle:"Comming Soon", img:CommingSoon, link:"https://commig-soon-page.vercel.app",GitLink:"https://github.com/lucas694/CommigSoonPage"},

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
          <PortfolioCards key={item.id} CardDesc={item.tittle} CardImage={item.img} Site={item.link} GitLink={item.GitLink}/>
        )}
      </motion.div>

    </motion.div>
  )
}
export default Portfolio;