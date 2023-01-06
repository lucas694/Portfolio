import "./ConhecimentosCard.css"
const ConhecimentosCard = (props) => {
  return(
      <div className={"ContainerCards"} >
        <div className={"SpanBox"}>
          <span>{props.langName}</span>
        </div>
        <div onMouseEnter={() => {props.setShowText(props.langDescription)}}
             onMouseLeave={() => {props.setShowText("*passe o cursor do mouse no card para ler*")}}>
          <div className={"IconBox"} >
            {props.Icon}
          </div>
        </div>
      </div>
  )
};export default ConhecimentosCard;