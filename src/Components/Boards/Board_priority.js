import React from "react";
import { MoreHorizontal } from "react-feather";
import "./Board_name.css";
import Card from "../Card/Card_priority";

function Board_priority() {
  return (
    <div className="board">
      <div className="board_top">
        <p className="board_top_title">☮&nbsp; No priority &nbsp; &nbsp; 2</p>
        <div className="plus-icon">+ ...</div>
      </div>
      <div className="board_cards">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Board_priority;
