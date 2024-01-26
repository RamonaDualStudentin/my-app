import React from 'react';

const ChangeDetectedParagraph = ({ changeDetected }) => {
 return (
 

 <div className="round-icon">
      <p><strong>Change detected:</strong> {changeDetected}</p>
    </div>
  );
};

export default ChangeDetectedParagraph;