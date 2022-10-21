import "./Header.css"
import Dath from "../assets/img/darth.png";
import { motion, useTime, useTransform } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

{/*Nav Mobile Animação*/}
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

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

        {/*Nav Mobile */}


        <motion.div className={`NavbarMobile ${isOpen ? "NavOpen" : "NavClose"}`}
                    animate={isOpen ? "open" : "closed"}
                    variants={variants}>
          <a href="#Inicio">Inicio</a>
          <a href="#SobreMim">Sobre Mim</a>
          <a href="#Projetos">Projetos</a>
          <a href="#Contato">Contato</a>
        </motion.div>
      </div>
  )
}

export default Header