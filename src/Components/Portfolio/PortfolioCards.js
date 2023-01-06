import "./PortfolioCards.css"
import {motion} from "framer-motion";
import React from 'react';
import Modal from 'react-modal';
import {FaGithub} from "react-icons/fa";

const PortfolioCards = (props) => {
//Modal
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="PortfolioCards-Container">
      <div className="Card-Image">
        <img src={props.CardImage} alt="" className={"ImgCard"}/>
      </div>

      <div className={"Card-Desc"}>
        <h1 className={"Card-Descricao"}> {props.CardDesc} </h1>
        <div className={"CardBtnSec"}>
          <motion.button whileTap={{ scale: 0.8 }} className={"Card-Button"} onClick={openModal}> Veja Demo </motion.button>
          <a href={props.GitLink} target="_blank"><FaGithub className={"IconClass mt-4 ml-4"}/></a>
        </div>
      </div>
      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={"ModalStyle"}
      >
        <iframe className="FrameClass" src={props.Site}/>
      </Modal>
    </div>
  )
}
export default PortfolioCards;