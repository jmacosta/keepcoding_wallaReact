import logo from '../../assets/logo_horizontal.svg';
import './header.css';
const Header = ({ className }) => {
  return (
    <header className={className}>
      <div className='logo'>
        <img src={logo} />
      </div>
      <nav>
        <ul>
          <li>adverts</li>
          <li>NewAdvert</li>
          <li>Logout</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
