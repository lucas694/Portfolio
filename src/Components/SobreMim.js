import "./SobreMim.css"
import Me from "../assets/img/me/Me2bp.png";
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

  return (
    <motion.div className="SobreMimContainer" id={"SobreMim"}
                variants={container}
                initial="hidden"
                animate="show">

      <motion.div variants={item}  className="SobreMimContent">
        <div className="SobreMimLeft">
          <p className={"Tittle-About"}>SOBRE MIM</p>
          <h3 className={"Tittle-Apresentation"}>Olá, Me chamo Lucas e Sou um Desenvolvedor Jr.</h3>

          <h3 className={"About"}>

            Sou um apaixonado por tecnologia que decidiu trilhar o caminho da programação.
            Possuo experiência em Desenvolvimento Web.

          <p className={"mt-5"}>Atualmente estou estudando e me aperfeiçoando em ReactJS, JavaScript, TailWind, HTML, CSS, Bootstrap, Git, GitHub. </p>

          <button className="AboutEmail">
              lucasassuncao694@gmail.com
          </button>

          </h3>
        </div>

        <div className="SobreMimRight">
          <img src={Me} alt="Me" className={"MyPhoto"}/>
        </div>

      </motion.div>

    </motion.div>
  );
}
export default SobreMim ;