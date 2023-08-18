  import React from "react";
import "./Card_name.css";
import { AlertCircle, Circle, Smile } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ticket}) {
  return (
    <div className="Card">
      <div className="card_top">
        <div className="card_top_labels">
          <span className="left-content">{ ticket.id }</span>
          <span className="right-content">
            {/* <Smile className="simile_icon" /> */}
          </span>
        </div>
      </div>
          <div className="card_title">
              {/* <span> ✔</span> */}
         ✔ {ticket.title}{ticket.priority}
        <i class="fa-solid fa-user"></i>
      </div>
      <div className="card_footer">
        {/* <AlertCircle />
        <Circle /> */}
        {/* <span className="card_footer_left">...</span> */}
        <span >
          <img className="icon-range"/>
          &nbsp;&nbsp; O {ticket.tag[0]}</span>
      </div>
    </div>
  );
}

export default Card;
