import "./PortfolioCards.css"
import {motion} from "framer-motion";
import React from 'react';
import Modal from 'react-modal';




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
        <img src={props.CardImage} alt="Calculadora" className={"ImgCard"}/>
      </div>

      <div className={"Card-Desc"}>
        <h1 className={"Card-Descricao"}> {props.CardDesc} </h1>
        <motion.button whileTap={{ scale: 0.8 }} className={"Card-Button"} onClick={openModal}> Veja Demo </motion.button>
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