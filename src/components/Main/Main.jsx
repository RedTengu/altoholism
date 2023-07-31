import './Main.css';

function Main() {
  return (
    <main className='main'>
      <section className='main-menu'>
        <h1 className='main-menu__title'>Добро пожаловать в Альтоголизм!</h1>
        <div className='main-menu__description'>
          <p className='main-menu__description-text'>
            Я создал это приложение, чтобы помочь найти свой игровой класс как новичкам, так и продвинутым 
            игрокам.
          </p>
          <p className='main-menu__description-text'>
            У всех из нас был этот момент, когда ты прыгаешь с класса на класс, в попытке найти своего 
            мейн-персонажа.
          </p>
          <p className='main-menu__description-text'>
            Я разработал два понятных алгоритма расчета для двух уровней сложности. Это помогло мне и надеюсь 
            поможет вам!
          </p>
        </div>
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