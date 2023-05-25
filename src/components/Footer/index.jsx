import "./styles.css";
import Git from './../../assets/git.png'
import Whatsapp from './../../assets/whatsapp.svg'
import Linkedin from './../../assets/linkedin.svg'
import Figma from './../../assets/figma.png'
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
    <i class="fa fa-twitter" aria-hidden="true"></i>
    <img className="imgcontato"  src={Whatsapp} alt="" />
      <span> - Whastapp</span>
    </a>
  </li>
  <li>
    <a href="https://www.figma.com/file/YPUZCk3vaSggaB0fNcQ8VF/Projetos-Publicos?type=design&node-id=0%3A1&t=cPCoT4cIslVb4t70-1">
      <i class="fa fa-instagram" aria-hidden="true"></i>
      <img className="imgcontato"  src={Figma} alt="" />
      <span> - Figma</span>
    </a>
  </li>
  </ul>
  </div>
    </Router>
  );
}