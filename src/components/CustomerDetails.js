import React, { useState } from 'react';
import './src/CustomerDetails.css';

const CustomerDetailsForm = () => {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [streetAddressLine2, setStreetAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');

  return (
    <div>
      <h2>Customer Details</h2>

      {/* Fullname Feld */}
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      {/* Adresse Feld */}
      <div>
        <label htmlFor="streetAddress">Street Address:</label>
        <input
          type="text"
          id="streetAddress"
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="streetAddressLine2">Street Address Line 2:</label>
        <input
          type="text"
          id="streetAddressLine2"
          value={streetAddressLine2}
          onChange={(e) => setStreetAddressLine2(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="state">State/Province:</label>
        <input
          type="text"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="postalCode">Postal/Zip Code:</label>
        <input
          type="text"
          id="postalCode"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CustomerDetailsForm;

