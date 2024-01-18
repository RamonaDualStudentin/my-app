import React from "react";
import ServiceRequestCard from "./serviceRequestcards";

function ServiceRequest() {
  const cardData = [
    {
      name: "Card 1",
      changeDetected: "2023-01-01",
      status: "Pending",
      zone: "A",
      region: "X",
      otherBalances: "Other balance 1",
    },
    {
      name: "Card 2",
      changeDetected: "2023-02-15",
      status: "Completed",
      zone: "B",
      region: "Y",
      otherBalances: "Other balance 2",
    },
    {
      name: "Card 3",
      changeDetected: "2023-03-20",
      status: "In Progress",
      zone: "C",
      region: "Z",
      otherBalances: "Other balance 3",
    },
    {
      name: "Card 4",
      changeDetected: "2023-04-10",
      status: "Pending",
      zone: "D",
      region: "Namur 70",
      otherBalances: "Other balance 4",
    },
  ];

  return (
    <div className="serviceRequest">
      <h2>Your Service Requests</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cardData.map((card, index) => (
          <ServiceRequestCard
            key={index}
            changeDetected={card.changeDetected}
            zone={card.zone}
            status={card.status}
            otherBalances={card.otherBalances}
          />
        ))}
      </div>
    </div>
  );
}

export default ServiceRequest;

