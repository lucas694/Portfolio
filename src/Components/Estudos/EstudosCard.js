import "./EstudosCard.css"

const EstudosCard = (props) => {
  return (
    <div className="EstudosCardContainer">
      <div className={"IconDiv"}>
        <img src={props.IconEstudos} alt="Icone de um computador" className={"IconCard"}/>
      </div>
      <div className={"EstudosCardContent"}>
        <h1 className={"EstudosCardTittle"}> {props.Tittle1}</h1>
        <h1 className={"EstudosCardTittle"}> {props.Tittle2}</h1>
        <h1 className={"EstudosCardText"}> {props.CardText} </h1>
      </div>
    </div>
  )
}
export default EstudosCard