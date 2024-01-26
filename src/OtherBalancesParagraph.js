import React from 'react';
import "./styling for the components/OtherBalancesParagraph.css";
const OtherBalancesParagraph = ({ otherBalances }) => {
 return <p><strong>Other balances affected:</strong> {otherBalances}</p>;
};

export default OtherBalancesParagraph; 