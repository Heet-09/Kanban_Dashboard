import React, { useState, useEffect } from "react";
import "./Dropdown.css";
import { LiaSlidersHSolid } from "react-icons/lia";
import { FaAngleDown } from "react-icons/fa";

const Dropdown = ({
  selectedGrouping,
  setSelectedGrouping,
  setOrdering,
  data,
  setTicketsData,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOrdering, setSelectedOrdering] = useState("");

  useEffect(() => {
    // Load saved state from localStorage during component initialization
    const savedSelectedGrouping = localStorage.getItem("selectedGrouping");
    if (savedSelectedGrouping) {
      setSelectedGrouping(savedSelectedGrouping);
    }

    const savedSelectedOrdering = localStorage.getItem("selectedOrdering");
    if (savedSelectedOrdering) {
      setSelectedOrdering(savedSelectedOrdering);
      setOrdering(savedSelectedOrdering);
    }
  }, []);

  const handleGroupingChange = (event) => {
    const newSelectedGrouping = event.target.value;
    setSelectedGrouping(newSelectedGrouping);
    localStorage.setItem("selectedGrouping", newSelectedGrouping); // Save the selected grouping to local storage
  };

  const handleOrderingChange = (event) => {
    const newSelectedOrdering = event.target.value;
    setSelectedOrdering(newSelectedOrdering);
    setOrdering(newSelectedOrdering);
    localStorage.setItem("selectedOrdering", newSelectedOrdering); // Save the selected ordering to local storage
    setTicketsData((prev) => ({ ...prev, tickets: data.tickets }));
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="dropdown-container">
      <button className="toggle-button" onClick={toggleOptions}>
        <LiaSlidersHSolid />
        Display <FaAngleDown />
      </button>
      {showOptions && (
        <div className="dropdown">
          <div className="Group">
            <h1 className="Option-title">Grouping</h1>
            <select
              className="select-group"
              value={selectedGrouping}
              onChange={handleGroupingChange}
            >
              <FaAngleDown />
              <option className="Option" value="name">
                Name <FaAngleDown />
              </option>
              <option value="priority">Priority</option>
              <option value="status">Status</option>
            </select>
          </div>
          <br />
          <div className="Order">
            <h1 className="Option-title">Ordering</h1>
            <select
              className="select-order"
              value={selectedOrdering}
              onChange={handleOrderingChange}
            >
              {/* <FaAngleDown /> */}
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
