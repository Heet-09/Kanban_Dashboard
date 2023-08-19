import React, { useState, useEffect } from "react";
import "./Board_name.css";
import CardPriority from "../Card/Card_priority";
import {AiOutlineCheckCircle} from "react-icons/ai"

const obj = {
  0: "No priority",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Urgent"  
}

function BoardPriority({ data, selectedOrdering }) {
  const [sorted, setSorted] = useState([]);
  console.log(typeof (data.tickets));
  

  useEffect(() => {
    const priority_set = new Set();
    data.tickets.forEach((ticket) => priority_set.add(ticket.priority));
    setSorted([...priority_set].sort((a, b) => b - a));
  }, [data]);

  return (
    <>
      {sorted.map((sorted_number) => {
        const cardsPerPriority = data.tickets.filter(
          (ticket) => ticket.priority === sorted_number
        );
        

        // Sort cards within each priority based on selectedOrdering
        const sortedCards =
          selectedOrdering === "title"
            ? cardsPerPriority.sort((a, b) => a.title.localeCompare(b.title))
            : cardsPerPriority.sort((a, b) => b.priority - a.priority);

        const totalCards = sortedCards.length;

        return (
          <div className="board" key={sorted_number}>
            <div className="board_top">
              <p className="board_top_title">
                &nbsp; <AiOutlineCheckCircle/>&nbsp;{obj[sorted_number]} &nbsp; &nbsp; {totalCards}
              </p>
              <div className="plus-icon">+ ...</div>
            </div>
            <div className="board_cards">
              {sortedCards.map((card) => (
                <CardPriority card={card} users={data.users}  />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}



export default BoardPriority;
