import "./MobileHeader.css"
import {FaBars} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";
import {AiOutlineHome} from "react-icons/ai";
import {HiOutlineAcademicCap} from "react-icons/hi";
import {MdLaptopChromebook} from "react-icons/md";
import {BsCardImage} from "react-icons/bs";
import { motion, useTime, useTransform } from "framer-motion";
import {useState} from "react";
import Dath from "../assets/img/darth.png";
import NavLinkMobile from "./NavLinkMobile";




const MobileHeader = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  const [isOpen, setIsOpen] = useState(true);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  return(
    <div className={"MobileHeaderContainer"}>
      <motion.div className={isOpen ? "MobileHeaderContent" : "hidden"}
           animate={isOpen? { x: 0 } : { x: -200 } }
           duration={2}>
        <div className="HeaderLogo">
          <img src={Dath} alt="Logo" className='LogoH'/>
          <motion.h1 style={{ rotate }}>Lucas</motion.h1>
        </div>
        <button onClick={handleOpen}>
          <FaBars className={"MobileHeaderIconOpen"}/>
        </button>
      </motion.div>
        <motion.div className={isOpen ? "hidden" : "MobileMenuContainer"}
             animate={isOpen? { y: -100 } : { y: 0 } }
             duration={1}>

          <ul className={"UlMobile"}>

            <NavLinkMobile Link={"#Inicio"}
                           Icon={<AiOutlineHome className={"IconMobileNav"}/>}
                           Name={"Inicio"}
            />
            <NavLinkMobile Link={"#SobreMim"}
                           Icon={<MdLaptopChromebook className={"IconMobileNav"}/>}
                           Name={"Sobre"}
            />
            <NavLinkMobile Link={"#Projetos"}
                           Icon={<BsCardImage className={"IconMobileNav"}/>}
                           Name={"Projetos"}
            />
            <NavLinkMobile Link={"#Conhecimentos"}
                           Icon={<HiOutlineAcademicCap className={"IconMobileNav"}/>}
                           Name={"Conhecimentos"}
            />
          </ul>
          <div className={"relative"}>
            <button onClick={handleOpen} className={"BtnCloseMobile"}>
              <AiOutlineClose className={"MobileHeaderIconClose"}/>
            </button>
          </div>
        </motion.div>

    </div>
  )
}; export default MobileHeader;