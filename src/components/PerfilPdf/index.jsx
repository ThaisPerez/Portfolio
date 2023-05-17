
import './styles.css'
import ExamplePdf from './../../assets/teste.pdf';

export default function PerfilPdf() {
    return (
     
<div>

<div class="wrap">
<a
  href={ExamplePdf}
  download="Curriculo-Thais Perez"
  target="_blank"
  rel="noreferrer"
>
<button class="button">Baixar Currículo</button>
</a>
</div>
</div>
)}













