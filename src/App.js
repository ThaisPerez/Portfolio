import Navbar from './components/Navbar';
import Container from './components/Container';
import Perfil from './assets/perfil.svg';
import ContainerExperiencias from './components/ContainerExperiencias';
import Ipam from './assets/ipam.svg';
import Uniron from './assets/uniron.svg';
import SAMAR from './assets/samar.svg';
import Coimbra from './assets/coimbra.svg';

function App() {
  return (
    <div>
      <Navbar />
      <div className="Container">
        
        <div className='ContainerHeader'>
        <div className="Content">
          <p>
            Olá, meu nome é Thais, trabalho atualmente como técnica de garantia da qualidade. Gosto
            de desafios novos para poder adquirir novos conhecimentos e sou apaixonada por
            tecnologia.
          </p>
          <div className="ContainerCard">
            <Container titulo="Redes de computadores" />
            <Container titulo="Informática  Básica" />
            <Container titulo="Sistemas Operacionais" />
            <Container titulo="React" />
            <Container titulo="CSS" />
            <Container titulo="HTML" />
            <Container titulo="Bootstrap" />
            <Container titulo="PHP" />
            <Container titulo="Selenium" />
            </div>
          </div>
        </div>
        <div className="Content-img">
          <img src={Perfil} alt="" />
        </div>
        <ContainerExperiencias
          img={Ipam}
          titulo="Estágio - CPD"
          subtitulo="Manuntenção, formação, instalação, limpeza."
        />
        <ContainerExperiencias
          img={Uniron}
          titulo="Analista de redes e de Comunicação "
          subtitulo="Manuntenção, formação, instalação, limpeza."
        />
        <ContainerExperiencias
          img={SAMAR}
          titulo="Estágio - CPD"
          subtitulo="Manuntenção, formação, instalação, limpeza."
        />
        <ContainerExperiencias
          img={Coimbra}
          titulo="Técnico de qualidade"
          subtitulo="Teste com cypress, selenium, montagem de cenarios "
        />
      </div>
    </div>
  );
}

export default App;
