import './styles.css'
import Profile from '../../assets/profile.gif'
import Caret from '../../assets/Caret.svg'

function Navbar() {

  return (
    <div className="container">
      <nav className='Navbar'>
        <div></div>
        <div className="containerText">
          <a >Início</a>
          <a>Sobre mim </a>
          <div className='NavbarContent'>
            <img src={Profile} alt="" />
            <span>Thais Perez</span>
            <img src={Caret} alt="" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;