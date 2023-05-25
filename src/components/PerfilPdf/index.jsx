
import './styles.css'
import ExamplePdf from './../../assets/teste.pdf';


export default function PerfilPdf() {
    return (
     
<div class="wrap">
<a
  href={ExamplePdf}
  download="Curriculo"
  target="_blank"
  rel="noreferrer"
>
<botao class="botaoPerfil">Baixar Currículo</botao>
</a>
</div>

)}













