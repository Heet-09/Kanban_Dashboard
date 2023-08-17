import React from 'react'
import {MoreHorizontal}from 'react-feather'
import"./Board_status.css"
import Card from '../Card/Card_status.js';

function Board_status() {
  return (
    <div className="board">
      <div className="board_top">
        
        <p className="board_top_title"> O To-Do 2</p>
        <div className="plus-icon">
          + ...
        </div>
      </div>
      <div className="board_cards">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Board_status
