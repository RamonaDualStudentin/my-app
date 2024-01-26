import React from 'react';
import "./styling for the components/StatusParagraph.css";

const StatusParagraph = ({ status }) => {
 return ( 
 <div className="round-icon">
  <p><strong>Status:</strong> {status}</p>
 </div>

 );
};

export default StatusParagraph;