import "./Header.css"
import Dath from "../assets/img/darth.png";
import { motion, useTime, useTransform } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { useState } from "react";


const Header = ()=>{
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  const [isOpen, setIsOpen] = useState(false);
  const OpenNav = () => setIsOpen(!isOpen);


  return(
      <div className="HeaderContent">

        <div className="HeaderLogo">
          <img src={Dath} alt="Logo" className='LogoH'/>
          <motion.h1 style={{ rotate }}>Lucas</motion.h1>
        </div>

        <div className="HeaderMenu">
          <button onClick={OpenNav}>
            <FaBars className={"NavMobileIcon"}/>
          </button>



            <ul>
              <li><a href="#Inicio">Inicio</a></li>
              <li><a href="#SobreMim">Sobre Mim</a></li>
              <li><a href="#Projetos">Projetos</a></li>
              <li><a href="#Contato">Contato</a></li>
            </ul>
        </div>
        <div className={`NavbarMobile ${isOpen ? "NavOpen" : "NavClose"}`} >
          <a href="#Inicio">Inicio</a>
          <a href="#SobreMim">Sobre Mim</a>
          <a href="#Projetos">Projetos</a>
          <a href="#Contato">Contato</a>
        </div>
      </div>
  )
}

export default Header