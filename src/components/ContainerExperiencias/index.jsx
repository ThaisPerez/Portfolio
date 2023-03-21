import './styles.css'

export default function Card(props) {
  return (
    <div className='Card'>
      <img className='imgSuporte' src={props.img} alt=""></img>
      <span>{props.titulo}</span>
      <a>{props.subtitulo}</a>
      </div>

  )
}
