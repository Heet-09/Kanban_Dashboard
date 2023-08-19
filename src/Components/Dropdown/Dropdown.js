import React, { useState } from "react";
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

  const handleGroupingChange = (event) => {
    setSelectedGrouping(event.target.value);
    console.log(event.target.value);
  };

  const handleOrderingChange = (event) => {
    setSelectedOrdering(event.target.value);
    setOrdering(event.target.value);
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
            Grouping
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
            Ordering
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
