import "./SobreMim.css"
import lucas from "../assets/img/me/lucas.jfif";

//icons
import HtmlIcon from "../assets/svg/html5-original.svg";
import CssIcon from "../assets/svg/css3-original.svg";
import JavaScriptIcon from "../assets/svg/javascript-original.svg";
import ReactIcon from "../assets/svg/react-original.svg";
import ReduxIcon from "../assets/svg/redux-original.svg";
import GitIcon from "../assets/svg/git-original.svg";
import BootstrapIcon from "../assets/svg/bootstrap-original.svg";
import TailwindIcon from "../assets/svg/tailwindcss-plain.svg";
import { motion } from "framer-motion"

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

const SobreMim = () => {
  const languagesIcons = [
    {id:1, icon: HtmlIcon, name: "HTML5"},
    {id:2, icon: CssIcon, name: "CSS3"},
    {id:3, icon: JavaScriptIcon, name: "JavaScript"},
    {id:4, icon: ReactIcon, name: "React"},
    {id:5, icon: ReduxIcon, name: "Redux"},
    {id:6, icon: GitIcon, name: "Git"},
    {id:7, icon: BootstrapIcon, name: "Bootstrap"},
    {id:8, icon: TailwindIcon, name: "Tailwind"},
  ]
  return (
    <motion.div className="SobreMimContainer" id={"SobreMim"}
                variants={container}
                initial="hidden"
                animate="show">

      <motion.div variants={item}  className="SobreMimContent">
        <div className="SobreMimLeft">
          <p className={"Tittle-About"}>SOBRE MIM</p>
          <h3 className={"Tittle-Apresentation"}>Olá, Me chamo Lucas e Sou um Desenvolvedor Jr.</h3>
          <div className={"About"}>
            <p> Sou um apaixonado por tecnologia que decidiu trilhar o caminho da programação.
            Possuo experiência em Desenvolvimento Web.</p>
            <p className={"mt-5"}>Atualmente estou estudando e me aperfeiçoando em ReactJS, JavaScript, TailWind, HTML, CSS, Bootstrap, Git , API e Redux. </p>
            <div className={"languageSec"}>
              {languagesIcons.map((item) =>(
                <img src={item.icon} className={"languageIcons"} alt={item.name} />
              ))}
            </div>
            <div className="AboutEmail">
              <a href="mailto:lucasassuncao694@gmail.com" className="MyEmail">lucasassuncao694@gmail.com</a>
            </div>
          </div>
        </div>

        <motion.div className="SobreMimRight"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    drag
                    dragConstraints={{
                      top: -50,
                      left: -50,
                      right: 50,
                      bottom: 50,
                    }}>       {/*Animações*/}
          <img src={lucas} alt="Me" className={"MyPhoto"}/>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default SobreMim ;