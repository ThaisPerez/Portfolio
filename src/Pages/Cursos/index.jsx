import './styles.css'
import Java from './../../assets/java.png'
import Git from './../../assets/github.png'
import Seguranca from './../../assets/seguranca.png'
import Docker from './../../assets/docker.png'
import Rede from './../../assets/rede.png'
import Banco from './../../assets/banco.png'
import Sofware from './../../assets/2.png'

export default function Cursos() {
  return (
        <div class="Teste">
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
              <p></p>
              <h5>2022</h5>
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
              <p></p>
            <a href="http://localhost:3000/">Read More</a>
            </div>
          </div>
        </div>
         
        <div class="card">
          <div class="face face1">
            <div class="content">
            <img src={Seguranca} alt="" />
                <h3>Git e GitHub</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p></p>
            <a href="http://localhost:3000/">Read More</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
            <img src={Docker} alt="" />
                <h3>Docker</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
            <p id="descricaoCurso">
           
            <h5> DOCKER Completo - Do Zero ao Avançado 2023</h5>  </p>   
              <p></p>
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
            <p id="descricaoCurso">
           teste
            </p>
              <p></p>
            <a href="http://localhost:3000/">Read More</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
            <img src={Banco} alt="" />
                <h3>Banco</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p></p>
            <a href="http://localhost:3000/">Read More</a>
            </div>
          </div>
        </div>  <div class="card">
          <div class="face face1">
            <div class="content">
            <img src={Rede} alt="" />
                <h3>Rede</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p></p>
            <a href="http://localhost:3000/">Read More</a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
            <img src={Sofware} alt="" />
                <h3>Git e GitHub</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p></p>
            <a href="http://localhost:3000/">Read More</a>
            </div>
          </div>
        </div>        
        </div>        
          </div>

          </div>
       
     
  )
}
