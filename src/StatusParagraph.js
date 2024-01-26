import React from 'react';
import "./styling for the components/StatusParagraph.css";

const StatusParagraph = ({ status }) => {
 return <p><strong>Status:</strong> {status}</p>;
};

export default StatusParagraph;