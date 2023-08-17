import React, { useState } from "react";
import "./Dropdown.css";
// You can create a CSS file for styling
import { useNavigate } from 'react-router-dom';

const Dropdown = ({selectedGrouping,setSelectedGrouping}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOrdering, setSelectedOrdering] = useState("");

  const handleGroupingChange = (event) => {
    setSelectedGrouping(event.target.value);
    console.log(event.target.value);
  };

  const handleOrderingChange = (event) => {
    setSelectedOrdering(event.target.value);

  };
  // const history = useNavigate();

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

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
                <option value="optionA">Priority</option>
                <option value="optionB">Title</option>
              </optgroup>
            </select>
          </div>
        </>
      )}
    </div>
  );
};

export default Dropdown;
