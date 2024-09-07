import React from 'react';
import './mainsection.css';

const MainSection = () => {
  return (
    <main className="main-section">
      <div className="text-content">
        <h1>Human stories & ideas</h1>
        <p>A place to read, write, and deepen your understanding</p>
        <button className="start-reading">Start reading</button>
      </div>
      <div className="image-content">
        {/* Include the image component or link to image */}
        <img src="path/to/your/image.png" alt="Illustration" />
      </div>
    </main>
  );
};

export default MainSection;

