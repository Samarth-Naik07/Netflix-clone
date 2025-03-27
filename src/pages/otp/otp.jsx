import React, { useState } from 'react';
import './otp.css';
import { useNavigate } from 'react-router-dom'

function reset() {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [sign,setSign] =useState("false");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/check-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    if (response.ok) {
      setToken(data.token),
      navigate('/Npassword',{ state: { userId: data.userId, token: data.token } });
    } else {
      alert(data.error || 'Email not found');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3>Enter your EMAIL</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit"onClick={()=>setSign("true")}>Submit</button>
        {sign ==="false"?<></>:<h5>wait for 5 sec</h5>}
        
      </form>

      {token && <p className="token">we sent you a mail token  {token}</p>}
    </div>
  );
}

export default reset;