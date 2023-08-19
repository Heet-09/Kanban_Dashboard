import React, { useState,useEffect } from "react";
import "./App.css";
import Dropdown from "./Components/Dropdown/Dropdown.js";
import BoardStatus from "./Components/Boards/board_status";
import BoardName from "./Components/Boards/Board_name";
import BoardPriority from "./Components/Boards/Board_priority";


function App() {
   const [ticketsData, setTicketsData] = useState({ tickets: [], users: [] });
  const [selectedGrouping, setSelectedGrouping] = useState("name");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const jsonData = await response.json();
      setTicketsData((prev) => ({...prev, tickets: jsonData.tickets, users: jsonData.users}))
      setTicketsData(jsonData); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }


  const [selectedOrdering, setSelectedOrdering] = useState("");

  return ticketsData ? (
    <>
      <div className="app">
        <div className="app_navbar">
          <Dropdown
            selectedGrouping={selectedGrouping}
            setSelectedGrouping={setSelectedGrouping}
            setOrdering={setSelectedOrdering}
            setTicketsData={setTicketsData}
            data={ticketsData}
          />
        </div>
        <div className="app_outer">
          {selectedGrouping === "priority" ? (
            <div className="app_boards">
              <BoardPriority
                data={ticketsData}
                selectedOrdering={selectedOrdering}
              />
            </div>
          ) : null}
          {selectedGrouping === "name" ? (
            <div className="app_boards">
              <BoardName
                data={ticketsData}
                selectedOrdering={selectedOrdering}
              />
            </div>
          ) : null}
          {selectedGrouping === "status" ? (
            <div className="app_boards">
              <BoardStatus
                selectedOrdering={selectedOrdering}
                data={ticketsData}
              />
            </div>
          ) : null}
        </div>
      </div>
    </>
  ) : null;
}

export default App;
