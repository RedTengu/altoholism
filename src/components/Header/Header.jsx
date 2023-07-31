import './Header.css';

// добавить лого

function Header() {
  return (
    <header className='header'>
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