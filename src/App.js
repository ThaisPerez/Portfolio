import Navbar from './components/Navbar';
import Card from './components/Card';
import Perfil from './assets/perfil.png';
import ContainerExperiencias from './components/ContainerExperiencias';
import Ipam from './assets/ipam.svg';
import Uniron from './assets/uniron.svg';
import Samar from './assets/samar.svg';
import Coimbra from './assets/coimbra.svg';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Cursos from './Pages/Cursos';

function App() {
  return (
    <div name="inicio">
      <div className="Todo">
        <Navbar />

        <div className="Container">
          <div className="ContainerHeader">
            <div className="Container-Img">
            <p id="tituloNome">
                Thais Perez 
              </p>

              <p id="Texto">
                Trabalho atualmente no cargo quality assurance jr na Distribuidora Coimbra.
                Gosto de desafios novos para poder adquirir novos conhecimentos.
              </p>
              <div className="ContainerCard">
                <Card porcentagem="progress-value-65" valor="65%" titulo="Redes de computadores" cor="#2864D9" />
                <Card porcentagem="progress-value-80" valor="80%" titulo="Informática  Básica" cor="#2864D9" />
                <Card porcentagem="progress-value-80" valor="80%" titulo="Sistemas Operacionais" cor="#6D28D9" />
                <Card porcentagem="progress-value-15" valor="15%" titulo="React" cor="#2864D9" />
                <Card porcentagem="progress-value-30" valor="30%" titulo="CSS" cor="#3D12EC" />
                <Card porcentagem="progress-value-30" valor="30%" titulo="HTML" cor="#FF3D00" />
                <Card porcentagem="progress-value-45" valor="45%" titulo="Bootstrap" cor="#6D28D9" />
                <Card porcentagem="progress-value-30" valor="30%" titulo="PHP" cor="#6D28D9" />
                <Card porcentagem="progress-value-30" valor="30%" titulo="Cypress" cor="#28D944" />
              </div>
            </div>
          </div>
          <div className="Content-img">
            <img src={Perfil} alt="" />
          </div>
        </div>
      </div>
      <div name="formacao">
      <div className="textoFormacao">
        <p id='formacao'>Formação</p></div>
      <div className="grid-container-formacao">
        <ContainerExperiencias
          class="grid-item"
          img={Uniron}
          titulo="Sistema de informação"
          subtitulo="Bacharel."
        />
        <ContainerExperiencias
          class="grid-item"
          img={Uniron}
          titulo="CST em Redes de Computadores"
          subtitulo="Tecnólogo."
        />
      </div>

      <div className="textoExperencia">
        <p id="experiencia"> Experiências</p></div>
      <div className="grid-container-experiencia">
        <ContainerExperiencias
          class="grid-item"
          img={Ipam}
          titulo="Estágio - CPD"
          subtitulo="Manuntenção, formação, instalação, limpeza."
        />
        <ContainerExperiencias
          class="grid-item"
          img={Uniron}
          titulo="Analista de redes e de Comunicação "
          subtitulo="Manuntenção, formação, instalação, limpeza.."
        />
        <ContainerExperiencias
          class="grid-item"
          img={Samar}
          titulo="Auxiliar Administrativo"
          subtitulo="Manuntenção, formação, instalação, limpeza."
        />
        <ContainerExperiencias
          class="grid-item"
          img={Coimbra}
          titulo="Técnico de qualidade"
          subtitulo="Teste com cypress, selenium, montagem de cenarios "
        />
 </div>
      </div>

      <div className="textoFormacao">
        <p id='formacao'>Cursos</p></div>

        <div name="cursos">
      <Cursos >
      </Cursos>
      </div>
      <div name="projetos">
      <div className='carousel'>
        <Carousel />
        </div>
      </div>
      <div name="contato">
      <Footer />
      </div>
      <div className="ContainerCard">

      </div>

    </div>

  );
}

export default App;
