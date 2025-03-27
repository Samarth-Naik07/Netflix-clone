import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../otp/otp.css';

function Rpassword() {
  
  const { userId, token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( { userId, newPassword  }),
      
    });
    
    const data = await response.json();
    if (response.ok) {
      alert('Password reset successful');
      navigate('/login');
    } else {
      alert(data.error || 'Password reset failed');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3>Enter the new password</h3>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter your new password"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Rpassword;