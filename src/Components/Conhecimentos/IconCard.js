import "./IconCard.css"


const IconCard = (props) => {
  return (
    <div className={"IconBox"} >
      {props.SVG}
    </div>
  )
}

export default IconCard;