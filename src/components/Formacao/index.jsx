import './styles.css'
import Uniron from './../../assets/uniron.png'

export default function Cursos() {
  return (
        <div class="Teste">
         <div>
      <div class="containerCursos">
        <div class="card">
          <div class="face face1">
            <div class="content">
            <img src={Uniron} alt="" />
                <h3>Sistemas de Informação</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
            <h5>2022</h5>
            <p>Tecnologo.</p>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="face face1">
            <div class="content">
            <img src={Uniron} alt="" />
                <h3>CST em Redes de Computadores</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
            <h5>2022</h5>
            <p>Bacharel.</p>
            </div>
          </div>
        </div>

        </div>
        </div>  
        </div>
       
   
       
     
  )
}
