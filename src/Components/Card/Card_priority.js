import React from "react";
import "./Card_priority.css";
import { AiOutlineEllipsis } from "react-icons/ai";
import { BsFillRecordFill } from "react-icons/bs";


function cardPriority({ card, users }) {
  const assignedUser = users.find((user) => user.id === card.userId);
  const userInitials = assignedUser ? getUserInitials(assignedUser.name) : "";

  return (
    <div className="Card">
      <div className="card_top">
        <div className="card_top_labels">
          <span className="left-content">{card.id}</span>
          <span className="right-content ">
            <span className="userinitials">{userInitials}</span>
          </span>
        </div>
      </div>
      <div className="card_title">
        {card.title}{" "}
        {/*Add multi language supoort -Enable multi
        language support*/}
        <i class="fa-solid fa-user"></i>
      </div>
      <div className="card_footer">
        {/* <AlertCircle />
        <Circle /> */}
        <span >... &nbsp;&nbsp; <BsFillRecordFill className="fill"/> {card?.tag[0]}</span>
      </div>
    </div>
  );
}

function getUserInitials(name) {
  const nameParts = name.split(" ");
  const initials = nameParts
    .map((part) => part[0])
    .join("")
    .toUpperCase();
  return initials;
}

export default cardPriority;
