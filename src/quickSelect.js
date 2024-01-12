
import React, { useState } from 'react';

import "./styling for the components/quickSelect.css";
import Zone from "./zone";

function QuickSelect() {
  
  const [switchOn, setSwitchOn] = useState(false);
  const handleSwitchChange = () => {
    setSwitchOn(!switchOn);
  };

  return( 
  <div className="quickSelect">
  <h1 className="quick-select-title">Hello,[Whatever User is Logged in] </h1>
  <h2>Quick select</h2>
  <p>
    By default you'll only get results from your zone - turn it off and you'll see all zones
  </p>
  <div className="label-container">
      <span>Search only my zones & regions</span>
  <label className="switch">
        <input type="checkbox" checked={switchOn} onChange={handleSwitchChange} />
        <span className="slider"></span>
      </label>
      </div>
      <Zone />

    </div>
  
  
 
  );
}

export default QuickSelect ;
