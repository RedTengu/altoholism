import './Description.css';

function Description({text, srcIcon, altIcon}) {
  return (
    <li className='description-elem'>
      <img className='description-elem__icon' src={srcIcon} alt={altIcon} />
      <p className='description-elem__text'>
        {text}
      </p>
    </li>
  );
}

export default Description;