import "./styles.css";
import Git from './../../assets/git.png'
import Whatsapp from './../../assets/whatsapp.svg'
import Linkedin from './../../assets/linkedin.svg'
import { BrowserRouter as Router } from "react-router-dom";


export default function Footer (){
  return (
    <Router>
    <div className="ContainerFooter">
    <ul>
  <li>
    <a href="portfolio-thaisp.netlify.app/#">
    <i class="fa fa-twitter" aria-hidden="true"></i>
    <img src={Linkedin} alt="" />
      <span> -Linkedin</span>
    </a>
  </li>
  <li>
    <a href="portfolio-thaisp.netlify.app/#">
    <img className="imgcontato" src={Git} alt="" />
   
      <i class="fa fa-twitter" aria-hidden="true"></i>
      <span>  - GitHub</span>
    </a>
  </li>
  <li>
    <a href="portfolio-thaisp.netlify.app/#">
    <img className="imgcontato"  src={Whatsapp} alt="" />
      <span> - Whastapp</span>
    </a>
  </li>
  <li>
    <a href="portfolio-thaisp.netlify.app/#">
      <i class="fa fa-instagram" aria-hidden="true"></i>
      <span> - Instagram</span>
    </a>
  </li>
  </ul>
  </div>
    </Router>
  );
}