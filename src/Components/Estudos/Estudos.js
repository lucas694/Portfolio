import "./Estudos.css"
import EstudosCard from "./EstudosCard";
import IconPc from "../../assets/img/Icons/IconPc.svg";
import IconDes from "../../assets/img/Icons/IconDesign.svg";
import { motion } from "framer-motion"
import {Fade} from "react-awesome-reveal";

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
const Estudos = () => {
  return (
    <motion.div className="EstudosContainer"
                variants={container}
                initial="hidden"
                animate="show">

      <motion.h1 variants={item} className={"EstudosTittle"}> O QUE EU FAÇO</motion.h1>

      <motion.div className="EstudosContent" variants={item}>
        <Fade direction="up" duration={1000} triggerOnce={true}>
          <EstudosCard IconEstudos={IconPc} Tittle1={"Faculdade"}
                     Tittle2={"Sistemas de Informação"} CardText={"Atualmente cursando Faculdade em Sistemas de Informação."}/>
        </Fade>

        <Fade direction="up" duration={1000} triggerOnce={true}>
          <EstudosCard IconEstudos={IconDes} Tittle1={"Front End"}
                     Tittle2={"Desenvolvimento Web"} CardText={"Estudando tecnologias relacionadas a Desenvolvimento Web."}/>
        </Fade>
      </motion.div>
    </motion.div>
  )
}
export default Estudos