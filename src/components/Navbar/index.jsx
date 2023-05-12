/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles.css'
import Profile from '../../assets/profile.gif'
import { Link } from 'react-scroll'


function Navbar() {

  return (
    <div className="container">
      <nav className='Navbar'>
        <div></div>
        <div className="containerText">
        <div className="container">
            <nav>
                <Link spy={true} smooth={true} offset={50} duration={250} to="inicio">Início</Link>
                <Link spy={true} smooth={true} offset={50} duration={250} to="formacao">Formação</Link>
                <Link spy={true} smooth={true} offset={50} duration={250} to="cursos">Cursos</Link>
                <Link spy={true} smooth={true} offset={50} duration={250} to="projetos">Projetos</Link>                
                <Link spy={true} smooth={true} offset={50} duration={250} to="contato">Contatos</Link>
            </nav>
        </div>
               <img src={Profile} alt="" />
          </div>
        
      </nav>
    </div>
  );
}

export default Navbar;