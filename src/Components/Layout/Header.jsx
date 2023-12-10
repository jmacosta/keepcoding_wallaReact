import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo_horizontal.svg';
import { UseAuth } from '../../pages/auth/context';
import './header.css';
const Header = ({ className }) => {
  const { isLogged, onLogout } = UseAuth();
  return (
    <header className={'header'}>
      <div className='logo'>
        <Link to='/adverts'>
          <img src={logo} />
        </Link>
      </div>
      <nav>
        <ul>
          <NavLink to='/adverts' end>
            <li>Ver últimos anuncios</li>
          </NavLink>

          <NavLink to='/adverts/new'>
            <li>Crear anuncio</li>
          </NavLink>
          <li className='logout' onClick={onLogout}>
            Logout
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
