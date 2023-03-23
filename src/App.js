import Navbar from './components/Navbar';
import Container from './components/Container';
import Perfil from './assets/perfil.svg';
import ContainerExperiencias from './components/ContainerExperiencias';
import Ipam from './assets/ipam.svg';
import Uniron from './assets/uniron.svg';
import Samar from './assets/samar.svg';
import Coimbra from './assets/coimbra.svg';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="Todo">
      <Navbar />

      <div className="Container">
        <div className="ContainerHeader">
          <div className="Container-Img">
            <p>
              Olá, meu nome é Thais, trabalho atualmente como técnica de garantia da qualidade.
              Gosto de desafios novos para poder adquirir novos conhecimentos e sou apaixonada por
              tecnologia.
            </p>
            <div className="ContainerCard">
              <Container titulo="Redes de computadores" cor="#2864D9"/>
              <Container titulo="Informática  Básica" cor="#2864D9" />
              <Container titulo="Sistemas Operacionais" cor="#6D28D9" />
              <Container titulo="React" cor="#2864D9" />
              <Container titulo="CSS" cor="#3D12EC" />
              <Container titulo="HTML" cor="#FF3D00" />
              <Container titulo="Bootstrap" cor="#6D28D9" />
              <Container titulo="PHP" cor="#6D28D9" />
              <Container titulo="Selenium" cor="#28D944" />
            </div>
          </div>
        </div>
        <div className="Content-img">
          <img src={Perfil} alt="" />
        </div>
      </div>

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
      <Carousel/>
    </div>
  );
}

export default App;
