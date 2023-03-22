import "./Conhecimentos.css"
import {useState} from "react";
import ConhecimentosCard from "./ConhecimentosCard";
import {Fade} from "react-awesome-reveal";

// Import SVGs
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaRebel } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

const Conhecimentos = (props) => {
  const languages = [
    {id:1,langName:"HTML", langIcon:<FaHtml5 className={"Icon"}/>, langDescription:"HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir.",},
    {id:2,langName:"CSS", langIcon:<FaCss3Alt className={"Icon"}/>, langDescription:"CSS é uma linguagem de estilo, onde definimos como os elementos da página vão se comportar.",},
    {id:3,langName:"React", langIcon:<FaReact className={"Icon"}/>, langDescription:"ReactJS é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",},
    {id:4,langName:"JavaScript", langIcon:<FaJsSquare className={"Icon"}/>, langDescription:"JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.",},
    {id:5,langName:"GIT", langIcon:<FaGitAlt className={"Icon"}/>, langDescription:"Git é um sistema de controle de versão distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.",},
    {id:6,langName:"Tailwind", langIcon:<SiTailwindcss className={"Icon"}/>, langDescription:"Tailwind CSS é um framework desenvolvido para maximizar o potencial do bom e velho CSS e levá-lo ainda mais longe.",},
    {id:7,langName:"Redux ", langIcon:<SiRedux className={"Icon"}/>, langDescription:"Redux é uma biblioteca JavaScript de código aberto para gerenciar o estado do aplicativo. É comumente usado com bibliotecas como React ou Angular para criar interfaces de usuário.",},
  ]

  {/*easter egg*/}
  const[ rebelIsOpen, setRebelIsOpen]  = useState(false)
  const[ShowText, setShowText] = useState("*passe o cursor do mouse no card para ler*")

  const ShowRebel = () =>{
    setRebelIsOpen(!rebelIsOpen)
    setShowText( rebelIsOpen ? "*passe o cursor do mouse no card para ler*" : //Validação abaixo para mostrar o Easter Egg
      <div>
      <span className={"font-bold text-3xl text-red-700 mb-6"}>Aliança Rebelde. </span>
      <p>A Aliança Rebelde luta bravamente contra o mal do Império Galáctico, sem nunca desanimar apesar de alguns reveses esmagadores. Formada a partir dos movimentos de resistência que surgem durante as Guerras Clônicas, a Rebelião trabalha em segredo por décadas para derrubar o Imperador e restaurar a democracia na galáxia.</p>
      <p className={"mt-4 text-white"}>Voce encontrou um Easter Egg. </p>
    </div> ) //
  }
  return(
    <div id={"Conhecimentos"} className="ConhecimentosContainer">
      <div className={"ConhecimentosContent"}>
        <div className={"ConhecimentoInfo"}>
          <Fade direction={"left"} triggerOnce={true} cascade={true}>
          <h1>Conhecimentos <span className={"text-blue-400"}>.</span></h1>
          <p className={"Info"}>{ShowText}</p>
          </Fade>
        </div>
        <div className={"ConhecimentosCards"}>
          <div className={"ConhecimentosCardsContent"}>
          <Fade direction={"right"} triggerOnce={false} cascade={true}>
            {languages.map((item , index) => {
              return(
                <ConhecimentosCard id={item.id}
                                   langName={item.langName}
                                   Icon={item.langIcon}
                                   langDescription={item.langDescription}
                                   setShowText={setShowText}
                />
              )
            })}
          </Fade>
          <button className={"BtnRebel"} onClick={ShowRebel } >
            <div className={rebelIsOpen ? "SpanBoxRebel" : "IconRebelHidden"}>
              <span>REBELIÃO</span>
            </div>
            <div className={"IconBox"} >
              <FaRebel className={rebelIsOpen ? "IconRebel" : "IconRebelHidden"}/>
            </div>
          </button>
        </div>
        </div>
      </div>
    </div>
  )
};
export default Conhecimentos;