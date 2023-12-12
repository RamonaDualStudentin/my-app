import React from "react";
import "./styling for the components/quickSelect.css";

function quickSelect() {
  return( <div className="quickSelect">
  <h1 className="quick-select-title">Hello,[Whatever User is Logged in] </h1>
  <h2>Quick select</h2>
  <p>
    By default you'll only get results from your zone - turn it off and you'll see all zones
  </p>
  <div className="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
  </div>
  <div>
    <input type="text" className="quick-select-search" placeholder="Search for assets by name=you'll be directed to the diagram view"/></div>
  
  
  </div>);
}

export default quickSelect;
