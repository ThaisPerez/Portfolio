import './styles.css'
import Perfil from './../../assets/perfil.svg'

export default function Card(props) {
  return (
    <div className='Card'>
      <span>{props.titulo}</span>
      <div class="progress"> <div class="progress-value">70%</div></div>
    </div>
    
  )
}
