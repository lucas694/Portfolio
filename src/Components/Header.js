import "./Header.css"
import Dath from "../assets/img/darth.png";
import { motion, useTime, useTransform } from "framer-motion";
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
            <ul>
              <li className={"HeaderLink"}><a href="#Inicio">Inicio</a></li>
              <li className={"HeaderLink"}><a href="#SobreMim">Sobre Mim</a></li>
              <li className={"HeaderLink"}><a href="#Projetos">Projetos</a></li>
              <li className={"HeaderLink"}><a href="#Conhecimentos">Conhecimentos</a></li>
            </ul>
        </div>
      </div>
  )
}
export default Header