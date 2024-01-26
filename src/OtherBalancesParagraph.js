import React from 'react';
import "./styling for the components/OtherBalancesParagraph.css";
const OtherBalancesParagraph = ({ otherBalances }) => {
 return (
 

  <div className="round-icon">
    <p><strong>Other balances affected:</strong> {otherBalances}</p>
     </div>
   );
};

export default OtherBalancesParagraph; 