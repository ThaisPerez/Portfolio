import './styles.css'
import { BrowserRouter as Router } from "react-router-dom";

export default function Card(props) {
  return (
    <Router>
    <div className='Cards'>
      <img className='imgSuporte' src={props.img} alt=""></img>
      <span>{props.titulo}</span>
      <p>{props.subtitulo}</p>
      
      </div>
      </Router>
  )
}
