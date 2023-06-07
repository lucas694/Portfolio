import "./Estudos.css"
import EstudosCard from "./EstudosCard";
import IconPc from "../../assets/img/Icons/IconPc.svg";
import IconDes from "../../assets/img/Icons/IconDesign.svg";
import {Fade} from "react-awesome-reveal";


// animação de Reload da página
const Estudos = () => {
  return (
    <div className="EstudosContainer">
      <h1 className={"EstudosTittle"}> O QUE EU FAÇO</h1>
      <div className="EstudosContent">
        <Fade direction="up" duration={1000} triggerOnce={true}>
          <EstudosCard IconEstudos={IconPc} Tittle1={"Faculdade"}
                     Tittle2={"Sistemas de Informação"} CardText={"Atualmente cursando Faculdade em Sistemas de Informação."}/>
        </Fade>

        <Fade direction="up" duration={1000} triggerOnce={true}>
          <EstudosCard IconEstudos={IconDes} Tittle1={"Front End"}
                     Tittle2={"Desenvolvimento Web"} CardText={"Estudando tecnologias relacionadas a Desenvolvimento Web."}/>
        </Fade>
      </div>
    </div>
  )
}
export default Estudos