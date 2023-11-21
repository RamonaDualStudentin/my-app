
import React from 'react';
import './CustomerDetailsform.css';


function CustomerDetailsform() {
  return (
    <div className="customer-details-container">



      {/* Customer Details  */}
      <div className="customer-details">
        <label>Customer  Details :</label>

      </div>

      <div className="Full Name">
        <label htmlFor="full-name">Full Name*</label>
        <div className="name-fields">
          <input type="text" id="first-name" name="first-name" placeholder="First Name" required />
          <input type="text" id="last-name" name="last-name" placeholder="Last Name" required />
        </div>
      </div>
      <div className="address">
        <label htmlFor="address">Address*</label>

        <div className="adress-fields">


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
          <option value="Please select">Please select</option>
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


      </div>
    </div>
  );
};

export default CustomerDetailsform;


