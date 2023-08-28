import { Link } from 'react-router-dom';

import './NotFound.css';
import khadgar from '../../images/khadgar-head.png'

function NotFound() {
  return (
    <section className='not-found'>
      <img className='not-found__img' src={khadgar} alt="Голова Кадгара" />
      <h1 className='not-found__title'>Упс, такой страницы нет...</h1>
      <Link className='not-found__link main-btns' to='/'>На главную</Link>
    </section>
  );
}

export default NotFound;