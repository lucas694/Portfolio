import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="FooterContainer">
      <div className="Footer1">
        <span>
          <h1 className={"CopyF"}>© {currentYear} Lucas Cardoso</h1>
        </span>
      </div>
    </div>
  )
}
export default Footer;