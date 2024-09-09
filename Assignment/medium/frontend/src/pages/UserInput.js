import React, { useState } from 'react';
import './UserInput.css'; 

const UserInput = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
     
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email }),
      });

      
      const data = await response.json();

      if (response.ok) {
        alert('User created successfully!');
        
        setFullName('');
        setEmail('');
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="user-input-container">
      <h1>Medium</h1>
      <h2>Almost there!</h2>
      <p>Finish creating your account for the full Medium experience.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Your full name</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default UserInput;
