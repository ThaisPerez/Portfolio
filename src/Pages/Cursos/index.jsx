import './styles.css'
import Teste from '../../assets/1.png'

export default function Cursos() {
  return (
  
      <div class="container">
        <div class="card">
          <div class="face face1">
            <div class="content">
            <img src={Teste} alt="" />
                <h3>Design</h3>
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
            <img src={Teste} alt="" />
                <h3>Code</h3>
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
            <img src={Teste} alt="" />
                <h3>Launch</h3>
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
  )
}
