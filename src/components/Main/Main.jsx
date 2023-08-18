import Description from '../Description/Description';

import engineeringIcon from '../../images/engineering-icon.jpg';
import sadIcon from '../../images/sad-icon.jpg';
import bookIcon from '../../images/book-icon.jpg';
import './Main.css';

function Main() {
  return (
    <main className='content'>
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
              <a className='main-menu__complexity-link main-btns' href='#'>Новичок</a>
            </li>
            <li>
              <a className='main-menu__complexity-tutorial' href='#'>Как пользоваться?</a>
            </li>
            <li>
              <a className='main-menu__complexity-link main-btns' href='#'>Продвинутый</a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}

export default Main;