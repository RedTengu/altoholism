import { Link } from 'react-router-dom';

import Description from '../Description/Description';

import engineeringIcon from '../../images/engineering-icon.jpg';
import sadIcon from '../../images/sad-icon.jpg';
import bookIcon from '../../images/book-icon.jpg';
import './MainMenu.css';

function MainMenu() {
  return (
    <section className='main-menu'>
      <h1 className='main-menu__title'>Добро пожаловать в Альтоголизм!</h1>
      <ul className='main-menu__description-list'>
        <Description 
          text="Я создал это приложение, чтобы помочь найти свой игровой класс как новичкам, так и продвинутым игрокам." 
          srcIcon={engineeringIcon}
          altIcon="Шестеренка" />
        <Description 
          text="У всех из нас был этот момент, когда ты прыгаешь с класса на класс, в попытке найти своего мейн-персонажа." 
          srcIcon={sadIcon}
          altIcon="Грустное лицо" />
        <Description 
          text="Я разработал два понятных алгоритма расчета для двух уровней сложности. Надеюсь это поможет вам!" 
          srcIcon={bookIcon}
          altIcon="Гриммуар" />
      </ul>
      <nav className='main-menu__complexity'>
        <ul className='main-menu__complexity-list'>
          <li>
            <Link className='main-menu__complexity-link main-btns' to='novice'>Новичок</Link>
          </li>
          <li>
            <Link className='main-menu__complexity-tutorial' to='link' target='_blank'>Как пользоваться?</Link>
          </li>
          <li>
            <Link className='main-menu__complexity-link main-btns' to='advanced'>Продвинутый</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default MainMenu;