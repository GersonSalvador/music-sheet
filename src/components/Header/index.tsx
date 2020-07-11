import React from 'react';
import {FiUser} from 'react-icons/fi'

import './styles.css';

const Header = () => {
  return (
    <header>
      <h1>
        Fur Elise
      </h1>
      <span>-</span>
      <h3>
        Ludvig van Beethoven
      </h3>
      <div className="user">
        <FiUser size={24}/>
      </div>
    </header>
  )
}

export default Header;
