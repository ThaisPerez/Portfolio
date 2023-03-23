import './styles.css'

export default function Card(props) {
  return (
    <div className='Cards'>
      <img className='imgSuporte' src={props.img} alt=""></img>
      <span>{props.titulo}</span>
      <p>{props.subtitulo}</p>
      </div>

  )
}
