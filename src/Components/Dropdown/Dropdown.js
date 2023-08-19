import React, { useState } from "react";
import "./Dropdown.css";
// You can create a CSS file for styling
import { useNavigate } from 'react-router-dom';

const Dropdown = ({selectedGrouping, setSelectedGrouping, setOrdering, data, setTicketsData}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOrdering, setSelectedOrdering] = useState("");

  const handleGroupingChange = (event) => {
    setSelectedGrouping(event.target.value);
    console.log(event.target.value);
  };

  const handleOrderingChange = (event) => {
    setSelectedOrdering(event.target.value);
    setOrdering(event.target.value)
    // sortTickets(data.tickets)
    setTicketsData((prev) => ({...prev, tickets: data.tickets}))

  };
  // const history = useNavigate();

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  // sorting function
  // const sortTickets = (tickets) => {
  //   tickets.sort((a, b) => {
  //     let strA = a.title.toLowerCase()
  //     let strB = b.title.toLowerCase()
  //     if(strA < strB) return -1;
  //     if(strA > strB) return 1
  //     return 0
  //   })
  //   setTicketsData(prev => ({...prev, tickets: data.tickets}))
  // }

  // const handleGroupingChange = (event) => {
  //   const selectedValue = event.target.value;
  //   setSelectedGrouping(selectedValue);

  //   // Redirect to the selected board
  //   history.push(`/${selectedValue}`);
  // };

  

  return (
    <div className="dropdown-container">
      <button className="toggle-button" onClick={toggleOptions}>
        iii Display d
      </button>
      {showOptions && (
        <>
          <div className="dropdown">
            Grouping
            <select value={selectedGrouping} onChange={handleGroupingChange}>
              <optgroup >
                <option value="name">Name</option>
                <option value="priority">Priority</option>
                <option value="status">Status</option>
              </optgroup>
            </select>
          </div>
          <div className="dropdown">
            Ordering
            <select value={selectedOrdering} onChange={handleOrderingChange}>
              <optgroup>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </optgroup>
            </select>
          </div>
        </>
      )}
    </div>
  );
};

export default Dropdown;
