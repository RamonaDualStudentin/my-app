import React from "react";
import "./styling for the components/serviceRequestcards.css";


    function ServiceRequestCard({ changeDetected, zone, status, otherBalances }) {
      return (
        <div class="card">
          <div class="card-header">Substation Name</div>
          <div class="card-body">
            <p><strong>Change detected:</strong> {changeDetected}</p>
            <p><strong>Zone:</strong> {zone}</p>
            <p><strong>Status:</strong> {status}</p>
            <strong>Other balances affected:</strong> {otherBalances}
          </div>
        </div>
      );
    }
  


export default ServiceRequestCard;
