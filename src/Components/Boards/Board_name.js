import React, { useState, useEffect } from "react";
import "./Board_name.css";
import Card from "../Card/Card_name.js";


function Board_name({ data, selectedOrdering }) {
  

  const sortedUsers = data.users
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));
  console.log(sortedUsers);
  
  const userInitials = assignedUser ? getUserInitials(assignedUser.name) : "";

  return (
    <>
      {sortedUsers.map((usr) => {
        const ticketsPerUser = data.tickets.filter(
          (ticket) => ticket.userId === usr.id
        );
        const totalNumber = ticketsPerUser.length;
        return (
          <div className="board" key={usr.id}>
            <div className="board_top">
              <p className="board_top_title">
                {usr.name} {totalNumber}
              </p>
              <div className="plus-icon">+ ...</div>
            </div>
            <div className="board_cards">
              {ticketsPerUser
                .sort((a, b) => {
                  if (selectedOrdering === "title") {
                    // Sort by title
                    return a.title.localeCompare(b.title);
                  } else if (selectedOrdering === "priority") {
                    return a.priority - b.priority;
                  } else {
                    return 0;
                  }
                })
                .map((ticket) => {
                  return <Card ticket={ticket} key={ticket.id} />;
                })}
            </div>
          </div>
        );
      })}
    </>
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
export default Board_name;
