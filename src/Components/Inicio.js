import "./Inicio.css"
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Inicio = () => {
  return (
    <div id={"Inicio"} className="InicioContainer Bgnd">
      <motion.div
        className="InicioCenter"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
          },
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
      }}>
        {/* Animação Inicial */}
        <div className="">
          <h1 className={"ApresText"}>Lucas Cardoso</h1>
          <p className={"ApresText-2"}>Desenvolvedor Front End Jr - UI DESIGN</p>
        </div>

        {/* Redes Sociais Icons */}
        <div className="InicioIcons">
          <a href={"https://github.com/lucas694"} target="_blank"><FaGithub className={"IconClass"}/></a>
          <a href={"https://www.instagram.com/luccas_cardoso_/"} target="_blank"><FaInstagram className={"IconClass"} /></a>
          <a href={"https://www.linkedin.com/in/lucascardoso-assuncao/"} target="_blank"><FaLinkedinIn className={"IconClass"}/></a>
        </div>
      </motion.div>
    </div>
  )
}
export default Inicio