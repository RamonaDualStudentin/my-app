import React from "react";
import "./styling for the components/quickSelect.css";

function quickSelect() {
  return( <div className="quickSelect">
  <h1 className="quick-select-title">Hello,[Whatever User is Logged in] </h1>

  <div>
    <input type="text" className="quick-select-search" placeholder="Search for assets by name=you'll be directed to the diagram view"/></div>
  
  
  </div>);
}

export default quickSelect;
