import './styles.css'
import Teste from '../../assets/1.png'
import NavBar from './../../components/Navbar'
import Java from './../../assets/java.png'
import Git from './../../assets/github.png'
import Html from './../../assets/html.png'

export default function Cursos() {
  return (
        <div class="Teste">
         <NavBar/>
         <div>
      <div class="containerCursos">
        <div class="card">
          <div class="face face1">
            <div class="content">
            <img src={Java} alt="" />
                <h3>JavaScript</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
            <a href="http://localhost:3000/">Read More</a>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="face face1">
            <div class="content">
            <img src={Git} alt="" />
                <h3>Git e GitHub</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
            <a href="http://localhost:3000/">Read More</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
            <img src={Html} alt="" />
                <h3>HTML5,CSS3 e JS</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
            <a href="http://localhost:3000/">Read More</a>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
            <a href="http://localhost:3000/">Read More</a>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  )
}
