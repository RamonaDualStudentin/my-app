
import React from "react";
import"./styling for the components/zoneicons.css";

function Icons({ onClick, icon }) {
  return (
    <div className="clickable-zone" onClick={onClick}>
      {icon}
    </div>
  );
}

export default Icons;
