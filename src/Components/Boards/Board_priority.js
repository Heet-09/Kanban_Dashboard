import React, { useState, useEffect, useContext } from "react";
import { MoreHorizontal } from "react-feather";
import "./Board_name.css";
import Card from "../Card/Card_priority";
import { AppContext } from "../../App";
const obj = {
  0: "No priority",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Urgent"  
}

function Board_priority({ selectedOrdering,data}) {
  console.log(selectedOrdering);
  console.log(data)
  const [sorted, setSorted] = useState([]);
  const [ticketsData, setTicketsData] = useState({ tickets: [], users: [] });
  // const { ticketsData } = useContext(AppContext)
// console.log('Context', data)

  useEffect(() => {
    // Simulate API fetch and set data
    console.log("data is " + ticketsData);
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      ); // Replace with your API URL
      const jsonData = await response.json(); // Parse response JSON
      setTicketsData((prev) => ({
        ...prev,
        tickets: jsonData.tickets,
        users: jsonData.users,
      }));
      setTicketsData(jsonData); // Set the fetched data in the state

      const priority_set = new Set();
      jsonData.tickets.forEach((ticket) => priority_set.add(ticket.priority));
      setSorted([...priority_set].sort((a, b) => b - a));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // console.log(sorted);
  console.log(ticketsData);

  const sortPerPriority = (setOrdering, array) => {
    if (setOrdering === "priority") {
      array.sort((a, b) => {
        return b.priority - a.priority;
      });

      return array;
    }
  };
  return (
    <>
      {sorted.map((sorted_number) => {
        const cardsPerPriority = ticketsData.tickets.filter(
          (ticket) => ticket.priority === sorted_number
        );
        console.log(cardsPerPriority);
        return (
          <div className="board">
            <div className="board_top">
              <p className="board_top_title">
                ☮&nbsp; {obj[sorted_number]} &nbsp; &nbsp; 2
              </p>
              <div className="plus-icon">+ ...</div>
            </div>
            <div className="board_cards">
              {cardsPerPriority.map((card) => {
                return <Card data={card} />;
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Board_priority;
