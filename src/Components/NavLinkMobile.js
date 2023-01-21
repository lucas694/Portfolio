import {useState} from "react";
import {motion} from "framer-motion";

const NavLinkMobile = (props) =>{
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  }
  return(
    <li className={"LiMobile"} onMouseEnter={handleOpen} onMouseLeave={handleOpen}>
      <a href={props.Link} className={"flex flex-row items-center "}>
        {props.Icon}
         <motion.h1
           className={isOpen ? "block" : "hidden"}
           animate={isOpen ? { x: 2 } : { x: 20 }}
           transition={{duration: 0.2 , delay: 0.2 } }>{props.Name}</motion.h1>
      </a>
    </li>
  )
};export default NavLinkMobile
