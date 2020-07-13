import React from 'react';

import IconsList from './svg.js';

// interface svg{
//     d: string;
//     fill?: string;
//     className?: string;
// }

// interface IconsDOT{
//   icon: string;
//   size?: number;
//   color?: string;
// }

const Icons = ({icon, size = 42, color = "#646f8d"} ) => {

  const iconName = IconsList[icon]

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd">
      {
        iconName.map((item, n) => (
          item.d
            ? <path
                key={n}
                d={item.d}
                className={item.className && "fill"}
                fill={item.fill && item.fill === true ? color : 'none'}
                stroke={item.stroke && (item.stroke === true ? color : 'none')}
                stroke-linecap={item['stroke-linecap'] && item['stroke-linecap']}
              ></path>
            : <g {...item}></g>
        ))
      }
      </g>
    </svg>
  )
}

export default Icons;