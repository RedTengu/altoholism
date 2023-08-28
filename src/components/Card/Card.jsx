import { Link } from 'react-router-dom';

import './Card.css';

function Card({ imgName, path, text }) {
  return (
    <li className='card'>
      <Link className='card__link' to={path}>
        <div className='card__img' style={{
          backgroundImage: `url(/images/${imgName}.jpg)`,
          backgroundRepeat: 'no-repeat'
        }}>
          <p className='card__text'>{text}</p>
        </div>
      </Link>
    </li>
  );
}

export default Card;