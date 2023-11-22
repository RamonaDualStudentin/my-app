
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
          <label htmlFor='First Name'>First Name </label>
          <input type="text" id="first-name" name="first-name" placeholder="First Name" required />
          <label htmlFor='Last Name'>Last Name </label>
          <input type="text" id="last-name" name="last-name" placeholder="Last Name" required />
        </div>
      </div>
      <div className="address">
        <label htmlFor="address">Address*</label>

        <div className="address-fields">

          <label htmlFor="Street Address">Street Address* </label>
          <input type="text" id="Street Address" name="Street Address" placeholder="Street Address" required />



          <label>Street Address Line 2 </label>
          <input type="text" id="Street Address Line 2" name="Street Address Line 2" placeholder="Street Address Line 2" required />

          <label>City </label>
          <input type="text" id="City" name="City" placeholder="City" required />

          <label>State/Province </label>
          <input type="text" id="State/Province" name="State/Province" placeholder="State/Province" required />

          <label>Postal / Zip Code </label>

          <input type="text" id="Postal / Zip Code" name="Postal / Zip Code" placeholder="Postal / Zip Code" required />
        </div>

        <div className="phone-number">
          <label>Phone Number* </label>

          <input type="" id="phone-number" name="phone-number" placeholder="(000)000-0000" required />
        </div>
        <div className="email">
          <label>Email </label>

          <input type="text" id="email" name="email" placeholder="ex:email@yahoo.com" required />
        </div>
      </div>

      {/* Feedback Section */}
      <div className="feedback">
        <label>How did you hear about us?* </label>
        <select >
          <option value="Please select">Please select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          {/*add more if needed*/}
        </select>

        <div className="please-specify">
          <label>Please specify* </label>
          <input type="text" />


        </div>

        <div className="feedback-comment">
          <label>Feedback about us: </label>
          <input type="text" />
        </div>

        <div className="suggestions">
          <label>Suggestions if any for further improvement: </label>
          <input type="text" />
        </div>

        <div className="recommendation">
          <label>Will you be willing to recommend us? </label>
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


