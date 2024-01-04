import React from "react";
import "./styling for the components/serviceRequestcards.css";

function ServiceRequestCard({ name, date, status, zone, region }) {
  return (
    <div className="card-container">
      <div className="card">
        <h3>{name}</h3>
        <p>Date: {date}</p>
        <p>Status: {status}</p>
        <p>Zone: {zone}</p>
        <p>Region: {region}</p>
      </div>
    </div>
  );
}

export default ServiceRequestCard;
