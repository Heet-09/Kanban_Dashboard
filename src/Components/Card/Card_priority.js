import React from "react";
import "./Card_priority.css";
import { AlertCircle, Circle } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ card, users }) {
  const assignedUser = users.find((user) => user.id === card.userId);
  const userInitials = assignedUser ? getUserInitials(assignedUser.name) : "";

  return (
    <div className="Card">
      <div className="card_top">
        <div className="card_top_labels">
          <span className="left-content">{card.id}</span>
          <span className="right-content ">{userInitials}</span>
        </div>
      </div>
      <div className="card_title">
        ✔{card.title}{" "}
        {/*Add multi language supoort -Enable multi
        language support*/}
        <i class="fa-solid fa-user"></i>
      </div>
      <div className="card_footer">
        {/* <AlertCircle />
        <Circle /> */}
        <span className="card_footer_left">...</span>
        <span>... &nbsp;&nbsp; O {card?.tag[0]}</span>
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

export default Card;
