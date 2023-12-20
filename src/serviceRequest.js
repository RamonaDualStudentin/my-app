import React from "react";
import ServiceRequestcards from "./serviceRequestcards";

function ServiceRequest() {
  
  const cardData = [
    { name: "Card 1", date: "2023-01-01", status: "Pending", zone: "A", region: "X" },
    { name: "Card 2", date: "2023-02-15", status: "Completed", zone: "B", region: "Y"},
    { name: "Card 3", date: "2023-03-20", status: "In Progress", zone: "C", region: "Z" },
    { name: "Card 4", date: "2023-04-10", status: "Pending", zone: "D", region: "Namur 70 "},
  ];

  return (
    <div className="serviceRequest">
      {cardData.map((card, index) => (
        <ServiceRequestcards key={index} {...card} />
      ))}
    </div>
  );
}

export default ServiceRequest;