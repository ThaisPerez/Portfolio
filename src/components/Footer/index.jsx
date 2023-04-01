import "./styles.css";
import Linkedin from "./../../assets/linkedin.svg"
import Whatsapp from "./../../assets/whatsapp.svg"
import Git from "./../../assets/git.png"

export default function Footer (){
  return (
    <div className=" footerContainer">
      
    <a href="https://wa.me/5569992306659">  <img src={Whatsapp} alt="" /></a>
    <a href="https://github.com/ThaisPerez"> <img src={Git} alt="" /></a>   
    <a href="https://www.linkedin.com/in/thais-perez-uch%C3%B4a-337573165/"> <img src={Linkedin} alt="" /> </a>
    </div>
  );
}