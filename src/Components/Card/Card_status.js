import React from 'react'
import "./Card_status.css"
import { AlertCircle, Circle, Smile } from "react-feather";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function Card() {
  return (
    <div className="Card">
      <div className="card_top">
        <div className="card_top_labels">
            <img src='confirmation.jpg' alt =""></img>
          <span className="left-content">CAM-5</span>
          <span className="right-content">
            {/* <Smile className='simile_icon' /> */}
            <img className=''/>
          </span>
        </div>
      </div>
      <div className="card_title">
        Add multi language supoort -Enable multi language support
        <i class="fa-solid fa-user"></i>
      </div>
      <div className="card_footer">
        {/* <AlertCircle />
        <Circle /> */}
       
        <span>Feature Request</span>
      </div>
    </div>
  );
}

export default Card
