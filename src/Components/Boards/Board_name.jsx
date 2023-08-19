import React/*, { useState, useEffect } */from "react";
import "./Board_name.css";
import Card from "../Card/Card_name.jsx";


function BoardName({ data, selectedOrdering }) {
  

  const sortedUsers = data.users
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));
  return (
    <>
      {sortedUsers.map((usr) => {
        const ticketsPerUser = data.tickets.filter(
          (ticket) => ticket.userId === usr.id
        );
        const totalNumber = ticketsPerUser.length;
        console.log(ticketsPerUser);
        return (
          <div className="board" key={usr.id}>
            <div className="board_top">
              <p className="board_top_title">
                <span className="userinitials">{getUserInitials(usr.name)}</span>
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
export default BoardName;
