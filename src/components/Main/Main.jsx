import { Routes, Route } from 'react-router-dom';

import MainMenu from '../MainMenu/MainMenu';
import NotFound from '../NotFound/NotFound';
import Role from '../Role/Role';

import './Main.css';

function Main() {
  return (
    <main className='content'>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<MainMenu />} />
        <Route path='novice' element={<Role />} />
      </Routes>
    </main>
  );
}

export default Main;