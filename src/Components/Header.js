import "./Header.css"
import Dath from "../assets/img/darth.png";
import { render } from "react-dom";
import { motion, useTime, useTransform } from "framer-motion";

const Header = ()=>{
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  return(
      <div className="HeaderContent">

        <div className="HeaderLogo">
          <img src={Dath} alt="Logo" className='LogoH'/>
          <motion.h1 style={{ rotate }}>Lucas</motion.h1>
        </div>

        <div className="HeaderMenu">
          <ul>
            <li><a href="#Inicio">Inicio</a></li>
            <li><a href="#SobreMim">Sobre Mim</a></li>
            <li><a href="#Projetos">Projetos</a></li>
            <li><a href="#Contato">Contato</a></li>
          </ul>
        </div>

      </div>
  )
}

export default Header