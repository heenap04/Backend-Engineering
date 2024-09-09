import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import Join from './pages/Join';
import UserInput from './pages/UserInput';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Set HomePage as the default route */}
        <Route path="/join" element={<Join />} />  {/* Join page route */}
        {/* Add more routes here as needed */}
        <Route path="/user-input" element={<UserInput />} /> {/* Add route for UserInput */}
      </Routes>
    </Router>
  );
}

export default App;
