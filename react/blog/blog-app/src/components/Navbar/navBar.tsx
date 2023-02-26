import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div className='navBar'>
      <nav>
        <ul>
          <li>
            {' '}
            <a onClick={() => navigate('/error')}> Home </a>{' '}
          </li>
          <li>
            {' '}
            <a onClick={() => navigate('/')}> About </a>{' '}
          </li>
          <li>
            {' '}
            <a> Contact </a>{' '}
          </li>
        </ul>
      </nav>
    </div>
  );
}
