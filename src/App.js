

import React from 'react';
import './CustomerDetailsPage.css'; 

const CustomerDetailsPage = () => {
  return (
    <div className="customer-details-container">
      {/* Header Section */}
      <div className="header">
        <img src="path/to/your/logo.png" alt="Logo" />
        <h1>Your Company Name</h1>
      </div>

      {/* Customer Details  */}
      <div className="customer-details">
        <div className="full-name">
          <label>First Name:</label>
          <input type="text" placeholder="First Name" />
          <label>Last Name:</label>
          <input type="text" placeholder="Last Name" />
        </div>

        <div className="address">
          <label>Street Address</label>
          <input type="text" placeholder="Street Address" />
          <label>Street Address Line 2:</label>
          <input type="text" placeholder="Street Address Line 2" />
          <label>City</label>
          <input type="text" placeholder="City" />
          <label>State/Province</label>
          <input type="text" placeholder="State/Province" />
          <label>Postal / Zip Code</label>
          <input type="text" placeholder="Postal / Zip Code" />
        </div>

        <div className="phone-number">
          {/* Include phone and email components here */}
        </div>
        <div className="email">
          {/* Include phone and email components here */}
        </div>
      </div>

      {/* Feedback Section */}
      <div className="feedback">
        <label>How did you hear about us?</label>
        <select>
          <option value="wordOfMouth">Word of Mouth</option>
          {/* Add other options as needed */}
        </select>

        <div className="please-specify">
          <label>Please Specify:</label>
          <input type="text" />
        </div>

        <div className="feedback-comment">
          <label>Feedback about us:</label>
          <textarea rows="48" />
        </div>

        <div className="suggestions">
          <label>Suggestions for further improvement:</label>
          <textarea rows="8" />
        </div>

        <div className="recommendation">
          <label>Will you be willing to recommend us?</label>
          <select>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="maybe">Maybe</option>
          </select>
        </div>

        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
};

export default CustomerDetailsPage;


