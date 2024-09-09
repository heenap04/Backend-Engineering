import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Join.css'; // Import the CSS file for styling

const Join = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button clicks for navigation
  const handleSignUp = () => {
    navigate('/user-input'); // Navigate to the UserInputPage
  };

  return (
    <div className="join-container">
      <div className="join-form">
        {/* "Join Medium" Heading */}
        <h2 className="join-title">Join Medium</h2>

        {/* Sign Up Buttons */}
        <button className="join-button" onClick={handleSignUp}>
          <img src="google-icon.svg" alt="Google" className="icon" /> Sign Up with Google
        </button>
        <button className="join-button" onClick={handleSignUp}>
          <img src="facebook-icon.svg" alt="Facebook" className="icon" /> Sign Up with Facebook
        </button>
        <button className="join-button" onClick={handleSignUp}>
          <img src="email-icon.svg" alt="Email" className="icon" /> Sign Up with Email
        </button>

        {/* Existing Account Link */}
        <p className="existing-account">Already have an account? <a href="/sign-in">Sign in</a></p>

        {/* Disclaimer */}
        <p className="terms-disclaimer">
          Click “Sign up” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.
        </p>
      </div>
    </div>
  );
};

export default Join;
