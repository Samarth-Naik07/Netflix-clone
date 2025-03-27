import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../otp/otp.css';

function Npassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userId,token: receivedToken} = location.state || {};
  const [otp, setOtp] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/verify-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({  token: otp }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log('OTP is correct');
      navigate(`/reset-password/${userId}/${otp}`,{state:{userId,token: receivedToken}});
    } else {
      console.log('OTP is incorrect');
      // Add your logic here for when the OTP is incorrect
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3>Enter the OTP sent on ur email </h3>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter the OTP"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Npassword;
