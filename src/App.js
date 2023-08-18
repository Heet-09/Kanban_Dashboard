// import logo from './logo.svg';
import React, { useState,useEffect, createContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Board_status from './Components/Boards/board_status';
import Dropdown from "./Components/Dropdown/Dropdown.js";
import Board_status from "./Components/Boards/board_status";
import Board_name from "./Components/Boards/Board_name";
import Board_priority from "./Components/Boards/Board_priority";

// export const AppContext = createContext()

function App() {
   const [ticketsData, setTicketsData] = useState({ tickets: [], users: [] });
  const [selectedGrouping, setSelectedGrouping] = useState("name");
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


  const [selectedOrdering, setSelectedOrdering] = useState("");

  console.log("this is parent data" + ticketsData);
  console.log(selectedOrdering)
  return (
    ticketsData ? (<>
        {/* <Router>
          <Routes>
            {/* <Route exact path="/" component={Home} /> }
            <Route path="/name" component={<Board_name data={ticketsData} />} />
            <Route path="/priority" component={Board_priority} />
            <Route path="/status" component={Board_status} />
          </Routes>
        </Router> */}

      <div className="app">
        <div className="app_navbar">
          <Dropdown
            selectedGrouping={selectedGrouping}
            setSelectedGrouping={setSelectedGrouping}
            setOrdering={setSelectedOrdering}
          />
        </div>
        <div className="app_outer">
          {selectedGrouping == "priority" ? (
            <div className="app_boards">
              {/* Based on priority */}
              <Board_priority selectedOrdering={selectedOrdering}data={ticketsData} />
              {/* selectedOrdering={selectedOrdering} */}
            </div>
          ) : null}
          {selectedGrouping == "name" ? (
            <div className="app_boards">
              {/* Based on Name */}
              <Board_name />
            </div>
          ) : null}
          {selectedGrouping == "status" ? (
            <div className="app_boards">
              {/* Based on Status */}
              <Board_status />
              <Board_status />
              <Board_status />
              <Board_status />
              <Board_status />
            </div>
          ) : null}
        </div>
      </div>
    </>) : null
  );
}

export default App;
