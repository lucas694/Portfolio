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
import ValorantApp from  "../../assets/img/Portfolio/ValorantApp.png"
import Login2 from  "../../assets/img/Portfolio/TeladeLogin2.png"
import Pokedex from  "../../assets/img/Portfolio/Pokemon.png"
import Agency from  "../../assets/img/Portfolio/Agency.png"
import Shoes from  "../../assets/img/Portfolio/Shoes.png"
import CoffeeStore from  "../../assets/img/Portfolio/coffestore.png"
import Agriculture from  "../../assets/img/Portfolio/Agriculture.png"
import DigitalMarketing from  "../../assets/img/Portfolio/DigitalMarketing.png"


import { motion } from "framer-motion"
import {useEffect, useState} from "react";
import {Slide} from "react-awesome-reveal";


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
  const[toggle, setToggle] = useState(true)
  const AllProjects =[
    {id:1 , tittle:"Projeto Faculdade", img:fast, link:"https://delivery-orpin-sigma.vercel.app",GitLink:"https://github.com/lucas694/Delevery-Project-React"},
    {id:2 , tittle:"Meu Portfolio", img:Porfolio, link:"https://portfolio-react-nine-sigma.vercel.app",GitLink:"https://github.com/lucas694/Portfolio"},
    {id:3 , tittle:"Rick and Morty API", img:RnM, link:"https://rick-and-morty-six-khaki.vercel.app",GitLink:"https://github.com/lucas694/Rick-and-Morty"},
    {id:4 , tittle:"Banking Page", img:Banking, link:"https://bank-project-alpha.vercel.app",GitLink:"https://github.com/lucas694/Bank-Project"},
    {id:5 , tittle:"NFT Marketplace", img:NftMarket, link:"https://nft-marketplace-drab-six.vercel.app",GitLink:"https://github.com/lucas694/Nft-Marketplace"},
    {id:6 , tittle:"God of War Page", img:Gow, link:"https://gow-ruddy.vercel.app",GitLink:"https://github.com/lucas694/Gow"},
    {id:7 , tittle:"Valorant App", img:ValorantApp, link:"https://valorant-mobile.vercel.app",GitLink:"https://github.com/lucas694/ValorantMobile"},
    {id:8 , tittle:"Coffee Store", img:CoffeeStore, link:"https://coffee-store-phi.vercel.app",GitLink:"https://github.com/lucas694/CoffeeStore"},
    {id:9 , tittle:"Shoes LaddingPage", img:Shoes, link:"https://ladding-shoes.vercel.app",GitLink:"https://github.com/lucas694/laddingShoes"},
    {id:10 , tittle:"Tela de Login", img:Login2, link:"https://sign-in-sign-up-one.vercel.app/",GitLink:"https://github.com/lucas694/SignIn-SignUp"},
    {id:11 , tittle:"Pokedex App", img:Pokedex, link:"https://pokedex-pied-six.vercel.app",GitLink:"https://github.com/lucas694/pokedex"},
    {id:12 , tittle:"Agency Page", img:Agency, link:"https://agency-three-ivory.vercel.app",GitLink:"https://github.com/lucas694/Agency"},
    {id:13 , tittle:"Agriculture Page", img:Agriculture, link:"https://agriculture-store.vercel.app",GitLink:"https://github.com/lucas694/AgricultureStore"},
    {id:14 , tittle:"Digital Marketing", img:DigitalMarketing, link:"https://digital-marketing-seven.vercel.app",GitLink:"https://github.com/lucas694/digital-Marketing"},
    {id:15 , tittle:"Comming Soon", img:CommingSoon, link:"https://commig-soon-page.vercel.app",GitLink:"https://github.com/lucas694/CommigSoonPage"},
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
        <Slide triggerOnce={true} direction={"up"} duration={800}>
          {AllProjects.slice(toggle ? 0 : 5).map((item)=>
            <PortfolioCards key={item.id}
                            CardDesc={item.tittle}
                            CardImage={item.img}
                            Site={item.link}
                            GitLink={item.GitLink}
                            Link={item.link}/>
          )}
        </Slide>
      </motion.div>
      <div className={"hidden"}>
        <button className={"ButtonMore"}
                onClick={()=>setToggle(!toggle)}
        >{toggle ? "Ver Menos" : "Ver Mais"}
        </button>
      </div>
    </motion.div>
  )
}
export default Portfolio;