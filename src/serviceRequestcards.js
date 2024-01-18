import React from "react";
import "./styling for the components/serviceRequestcards.css";

function ServiceRequestCard({ name, date, status, zone, region }) {
  return (
    <div class="card">
    <div class="card-header">Substation Name</div>
    <div class="card-body">
      <p><strong>Change detected:</strong> 08/06/23</p>              
      <p><strong>Zone:</strong> S - Region XYZ</p>
      <p><strong>Status:</strong> Pending</p>
      <strong>Other balances affected:</strong>
    </div>
  </div>
  );
}

export default ServiceRequestCard;
