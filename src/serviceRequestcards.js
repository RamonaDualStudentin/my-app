import React from 'react';
import "./styling for the components/serviceRequestcards.css";

import ChangeDetectedParagraph from './ChangeDetectedParagraph';
import ZoneParagraph from './ZoneParagraph';
import StatusParagraph from './StatusParagraph';
import OtherBalancesParagraph from './OtherBalancesParagraph';

const ServiceRequestCard = ({ changeDetected, zone, status, otherBalances }) => {
 return (
    <div class="card">
      <div class="card-header">Substation Name</div>
      <div class="card-body">
        <ChangeDetectedParagraph changeDetected={changeDetected} />
        <a class="review-changes-button" href="substation.html">Go to substation to review changes →</a>
        <ZoneParagraph zone={zone} />
        <StatusParagraph status={status} />
        <OtherBalancesParagraph otherBalances={otherBalances} />
      </div>
    </div>
 );
};

export default ServiceRequestCard;