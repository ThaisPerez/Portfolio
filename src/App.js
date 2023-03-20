import Navbar from './components/Navbar';
import Container from './components/Container'
import Perfil from './assets/perfil.svg'
function App() {
  return (
    <div>
      <Navbar />
      <div className="Container">
        <div className='Content'>
        <p>
          Olá, meu nome é Thais, trabalho atualmente como técnica de garantia da qualidade. Gosto de desafios novos para poder adquirir novos conhecimentos e sou apaixonada por tecnologia.
        </p>
        <div className='ContainerCard'>
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
        <div className='Content-img'>
          <img src={Perfil} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
