import './Header.css';
import logo from '../../images/logo.png'

function Header() {
  return (
    <header className='header'>
      <a className='logo-link' href="#"><img className='logo' src={logo} alt='Логотип Альтоголизм' /></a>
      <ul className='header__lang-list'>
        <li>
          <button className='header__lang-btn header__lang-btn_type_active' type='button' aria-label='Переключиться на русский язык'>
            Ru
          </button>
        </li>
        <li>
          <button className='header__lang-btn' type='button' aria-label='Переключиться на английский язык'>
            En
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Header;