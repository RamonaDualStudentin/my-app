import React from "react";

function ServiceRequestcards({ name, date, status, zone, region }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Date: {date}</p>
      <p>Status: {status}</p>
      <p>Zone: {zone}</p>
      <p>Region: {region}</p>
    </div>
  );
}

export default ServiceRequestcards;