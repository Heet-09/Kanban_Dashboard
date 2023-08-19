import React from "react";
import "./Card_status.css";
import { BsFillRecordFill } from "react-icons/bs"


function Card_status({ data, users }) {
  const assignedUser = users.find((user) => user.id === data.userId);
  const userInitials = assignedUser ? getUserInitials(assignedUser.name) : "";

  return (
    <div className="Card">
      <div className="card_top">
        <div className="card_top_labels">
          <span className="left-content">{data?.id}</span>
          <span className="right-content">
            <span className="userinitials">{userInitials}</span>
          </span>
          {/* Other content */}
        </div>
      </div>
      <div className="card_title">{data?.title}</div>
      <div className="card_footer">
        <span>
          ... &nbsp;&nbsp; <BsFillRecordFill className="fill" /> {data?.tag[0]}
        </span>
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

export default Card_status;
