
import React from "react";

function Icons({ onClick, icon }) {
  return (
    <div className="clickable-zone" onClick={onClick}>
      {icon}
    </div>
  );
}

export default Icons;
