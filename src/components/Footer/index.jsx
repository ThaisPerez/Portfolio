import "./styles.css";
import Linkedin from "./../../assets/linkedin.svg"
import Whatsapp from "./../../assets/whatsapp.svg"


export default function Footer (){
  return (
    <div className=" footerContainer">
      <div className=" footerLinkedin">
        <img src={Linkedin} alt="" />
      </div>
      <div className=" footerWhatsapp">
        <img src={Whatsapp} alt="" />
      </div>
  
    </div>
  );
}