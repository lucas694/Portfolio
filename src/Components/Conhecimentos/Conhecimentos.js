import "./Conhecimentos.css"
import IconCard from "./IconCard";
import {useState} from "react";

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
  {/* easter egg*/}
  const[ isOpen, setIsOpen]  = useState(false)
  const[ShowText, setShowText] = useState("*passe o cursor do mouse no card para ler*")

  const ShowRebel = () =>{
    setIsOpen(!isOpen)
    setShowText(
      <p> <p className={"font-bold text-3xl text-red-700 mb-6"}>Aliança Rebelde. </p>
      A Aliança Rebelde luta bravamente contra o mal do Império Galáctico, sem nunca desanimar apesar de alguns reveses esmagadores. Formada a partir dos movimentos de resistência que surgem durante as Guerras Clônicas, a Rebelião trabalha em segredo por décadas para derrubar o Imperador e restaurar a democracia na galáxia.
      <p className={"mt-4 text-white"}>Voce encontrou um Easter Egg. </p> </p> );
  }

  return(
    <div id={"Conhecimentos"} className="ConhecimentosContainer">
      <div className={"ConhecimentosContent"}>
        <div className={"ConhecimentoInfo"}>
          <h1>Conhecimentos <span className={"text-blue-400"}>.</span></h1>
          <p className={"Info"}>{ShowText}</p>
        </div>
        <div className={"ConhecimentosCards"}>
          <div className={"ContainerCards"} >
            <div className={"SpanBox "}>
              <span>HTML</span>
            </div>
            <div onMouseEnter={() => setShowText("HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir.")}
                 onMouseLeave={() => setShowText("*passe o cursor do mouse no card para ler*")}>
              <IconCard SVG={<FaHtml5 className={"Icon"}/> }/>
            </div>
          </div>

          <div className={"ContainerCards"}>
            <div className={"SpanBox "}>
              <span>CSS3</span>
            </div>
            <div onMouseEnter={() => setShowText("CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML.")}
                 onMouseLeave={() => setShowText("*passe o cursor do mouse no card para ler*")}>
              <IconCard SVG={<FaCss3Alt className={"Icon"}/> }/>
            </div>
          </div>

          <div className={"ContainerCards"}>
            <div className={"SpanBox "}>
              <span>React</span>
            </div>
            <div onMouseEnter={() => setShowText("ReactJS é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.")}
                 onMouseLeave={() => setShowText("*passe o cursor do mouse no card para ler*")}>
              <IconCard SVG={<FaReact className={"Icon"}/> }/>
            </div>
          </div>

          <div className={"ContainerCards"}>
            <div className={"SpanBox "}>
              <span>JavaScript</span>
            </div>
            <div onMouseEnter={() => setShowText("JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.")}
                 onMouseLeave={() => setShowText("*passe o cursor do mouse no card para ler*")}>
              <IconCard SVG={<FaJsSquare className={"Icon"}/> }/>
            </div>
          </div>

          <div className={"ContainerCards"}>
            <div onMouseEnter={() => setShowText("Tailwind CSS é um framework desenvolvido para maximizar o potencial do bom e velho CSS e levá-lo ainda mais longe.")}
                 onMouseLeave={() => setShowText("*passe o cursor do mouse no card para ler*")}>
              <IconCard SVG={<SiTailwindcss className={"Icon"}/> }/>
            </div>
            <div className={"SpanBox "}>
              <span>Tailwind CSS</span>
            </div>
          </div>

          <div className={"ContainerCards"}>
            <div onMouseEnter={() => setShowText("Git é um sistema de controle de versão distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.")}
                 onMouseLeave={() => setShowText("*passe o cursor do mouse no card para ler*")}>
              <IconCard SVG={<FaGitAlt className={"Icon"}/> }/>
            </div>
            <div className={"SpanBox "}>
              <span>GIT</span>
            </div>
          </div>

          <button className={"BtnRebel"} onClick={ShowRebel } >
            <div className={isOpen ? "SpanBoxRebel" : "IconRebelHidden"}>
              <span>REBELIÃO</span>
            </div>
            <IconCard
                      SVG={<FaRebel className={isOpen ? "IconRebel" : "IconRebelHidden"}/> }/>
          </button>

        </div>
      </div>
    </div>
  )
};

export default Conhecimentos;