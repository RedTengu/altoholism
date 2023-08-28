import CardList from '../CardList/CardList';
import Card from '../Card/Card';

import './Role.css';

function Role() {
  return (
    <section className='role'>
      <h1 className='title-card'>Выбери свою роль</h1>
      <CardList>
        <Card imgName='warrior' 
              text='Танк'  
              path='/' />
        <Card imgName='paladin' 
              text='Лекарь' 
              path='/' />
        <Card imgName='mage' 
              text='Урон'  
              path='/' />
        <Card imgName='druid' 
              text='Гибрид' 
              path='/' />
      </CardList>
    </section>
  );
}

export default Role;