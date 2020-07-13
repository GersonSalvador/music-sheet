import React, {MouseEvent} from 'react';

import Icons from '../Icons'

import './styles.css';

const TopMenu = () => {

  const handleMouseOver = (e: MouseEvent) => {
    e.stopPropagation()
    e.currentTarget.setAttribute('class','active')
  }

  const handleMouseOut = (e: MouseEvent) => {
    e.stopPropagation()
    e.currentTarget.setAttribute('class','')
  }

  return (
    <div className="topmenu">
      <ul>
        <li><Icons icon="natural" /></li>
        <li><Icons icon="sharp" /></li>
        <li><Icons icon="flat" /></li>
        <li><Icons icon="naturalSharp" /></li>
      </ul>
      <ul>
        <li><Icons icon="whole" /></li>
        <li><Icons icon="half" /></li>
        <li><Icons icon="quarter" /></li>
        <li><Icons icon="eighth" /></li>
        <li><Icons icon="sixteenth" /></li>
        <li><Icons icon="thirtySecond" /></li>
        <li><Icons icon="sixtyFourth" /></li>
        <li
          onMouseOver={e => {handleMouseOver(e)}}
          onMouseOut={e => {handleMouseOut(e)}}
        >
          <Icons icon="dot" />
          <ul>
            <li><Icons icon="dot" /></li>
            <li><Icons icon="doubleDots" /></li>
          </ul>
        </li>
        <li><Icons icon="tie" /></li>
        <li
          onMouseOver={e => {handleMouseOver(e)}}
          onMouseOut={e => {handleMouseOut(e)}}
        >
          <Icons icon="tuplet2" />
          <ul>
            <li><Icons icon="tuplet2" /></li>
            <li><Icons icon="tuplet3" /></li>
            <li><Icons icon="tuplet5" /></li>
            <li><Icons icon="tuplet6" /></li>
            <li><Icons icon="tuplet7" /></li>
          </ul>
        </li>
      </ul>
      <ul>
        <li><Icons icon="ottava" /></li>
      </ul>
    </div>
  )
}

export default TopMenu;
