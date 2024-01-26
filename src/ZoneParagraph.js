import React from 'react';
import "./styling for the components/ZoneParagraph.css";
const ZoneParagraph = ({ zone }) => {
 return(
  <div className="round-icon">
<p><strong>Zone:</strong> {zone}</p>
    </div>

 )
};

export default ZoneParagraph;