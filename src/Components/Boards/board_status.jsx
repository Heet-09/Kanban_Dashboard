import React, { useState, useEffect} from "react";
import "./Board_status.css";
import Card from "../Card/Card_status.jsx";
import { FiCircle} from "react-icons/fi";

function BoardStatus({selectedOrdering,data}) {
  let boardStatus = {
    "Backlog": 1,
    "Todo": 2,
    "In progress": 3,
    "Done": 4,
    "Cancelled": 5,
  };

  const [sorted, setSorted] = useState([]);

  useEffect(() => {
    const status_set = new Set();
    data.tickets.forEach((ticket) => status_set.add(ticket.status));
    setSorted([...status_set].sort((a, b) => boardStatus[a] - boardStatus[b]));
  }, [boardStatus, data]);

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
                    return a.title.localeCompare(b.title);
                  } else if (selectedOrdering === "priority") {
                    return a.priority - b.priority;
                  } else {
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

export default BoardStatus;



