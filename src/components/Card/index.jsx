import './styles.css'


export default function Card(props) {
  return (
    <div className='Card'>
      <span>{props.titulo}</span>
      <div class="progress">  <div className={`progress-value ${props.porcentagem}`} style={{background: props.cor}}>{props.valor}</div></div>
    <div>
        </div>
        </div>
    
  )
}
