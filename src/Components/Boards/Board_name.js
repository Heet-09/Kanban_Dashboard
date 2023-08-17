import React, {useState, useEffect} from "react";
import { MoreHorizontal } from "react-feather";
import "./Board_name.css";
import Card from "../Card/Card_name.js";

function Board_name() {
  const [ticketsData, setTicketsData] = useState({ tickets: [], users: [] });
  useEffect(() => {
    // Simulate API fetch and set data
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      ); // Replace with your API URL
      const jsonData = await response.json(); // Parse response JSON
      setTicketsData((prev) => ({...prev, tickets: jsonData.tickets, users: jsonData.users}))
      setTicketsData(jsonData); // Set the fetched data in the state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  console.log(ticketsData)
  return (
    <>
    {
      ticketsData.users.map(usr => {
        const ticketsPerUser = ticketsData.tickets.filter(ticket => ticket.userId === usr.id)
        console.log(ticketsPerUser)
        return(
          <div className="board">
          <div className="board_top">
        <p className="board_top_title">{usr.name}</p>
        <div className="plus-icon">+ ...</div>
        </div>
        <div className="board_cards">
        {
          ticketsPerUser.map(ticket => {
            return <Card ticket={ticket}/>
          })
        }
        </div>
        </div>
          )
      })
      }
    </>
    );
}

export default Board_name;
