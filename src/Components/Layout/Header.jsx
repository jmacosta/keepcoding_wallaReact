import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo_horizontal.svg';
import { UseAuth } from '../../pages/auth/context';
import './header.css';
const Header = ({ className }) => {
  const { isLogged, onLogout } = UseAuth;
  return (
    <header className={className}>
      <div className='logo'>
        <Link to='/adverts'>
          <img src={logo} />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to='/adverts' end>
              Ver últimos anuncios
            </NavLink>
          </li>
          <li>
            <NavLink to='/adverts/new'>Crear anuncio</NavLink>
          </li>
          <li>Logout</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
