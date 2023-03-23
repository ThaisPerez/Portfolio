import './styles.css'

export default function Card(props) {
  return (
    <div className='Card'>
      <span>{props.titulo}</span>
      <div class="progress">  <div className="progress-value" style={{background: props.cor}}>70%</div></div>
      
    </div>
    
  )
}
