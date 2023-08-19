import React, { useState, useEffect, useContext } from "react";
import { MoreHorizontal } from "react-feather";
import "./Board_status.css";
import Card from "../Card/Card_status.js";
import { FiCircle} from "react-icons/fi";

function Board_status({selectedOrdering,data}) {
  let boardStatus = {
    "Backlog": 1,
    "Todo": 2,
    "In progress": 3,
    "Done": 4,
    "Cancelled": 5,
  };

  const [sorted, setSorted] = useState([]);

  useEffect(() => {
    // Simulate API fetch and set data
    const status_set = new Set();
    data.tickets.forEach((ticket) => status_set.add(ticket.status));
    setSorted([...status_set].sort((a, b) => boardStatus[a] - boardStatus[b]));
  }, []);

  return sorted ? (
    <>
      {sorted.map((sorted_value) => {
        const cardsPerStatus = data.tickets.filter(
          (ticket) => ticket.status === sorted_value
        );

        const totalNumber = cardsPerStatus.length;
        return (
          <div className="board">
            <div className="board_top">
              <p className="board_top_title">
                {" "}
                <FiCircle /> &nbsp;&nbsp;{sorted_value} {totalNumber}
              </p>
              <div className="plus-icon">+ ...</div>
            </div>
            <div className="board_cards">
              {cardsPerStatus
                .sort((a, b) => {
                  if (selectedOrdering === "title") {
                    // Sort by title
                    return a.title.localeCompare(b.title);
                  } else if (selectedOrdering === "priority") {
                    // Sort by priority
                    return a.priority - b.priority;
                  } else {
                    // Default: No sorting
                    return 0;
                  }
                })
                .map((card) => {
                  return <Card data={card} users={data.users} />;
                })}
            </div>
          </div>
        );
      })}
    </>
  ) : null;
}

export default Board_status;
