import React from 'react';
import {FiPrinter, FiPlayCircle} from 'react-icons/fi'

import './styles.css';

const AsideMenu = () => {
  return (
    <aside>
      <ul>
        <li>
          <FiPlayCircle size={20} />
          <button type="button">Play</button>
        </li>
        <li>
          <FiPrinter size={20} />
          <button type="button">Print</button>
        </li>
      </ul>
    </aside>
  )
}

export default AsideMenu;