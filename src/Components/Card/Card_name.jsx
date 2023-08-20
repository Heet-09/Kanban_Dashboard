import React from "react";
import "./Card_name.css";
import { BsFillRecordFill } from "react-icons/bs"

function Card({ticket}) {
  return (
    <div className="Card">
      <div className="card_top">
        <div className="card_top_labels">
          <span className="left-content">{ticket.id}</span>
          <span className="right-content">
          </span>
        </div>
      </div>
      <div className="card_title">
        {ticket.title}
      </div>
      <div className="card_footer">
        <span>
          ... &nbsp;&nbsp; <BsFillRecordFill className="fill" /> {ticket?.tag[0]}
        </span>
      </div>
    </div>
  );
}

export default Card;
