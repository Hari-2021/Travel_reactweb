import React from 'react';
import './Destinations.css';

function Destinations() {
  return (
    <div className="destinations-container">
      <h1>Top Destinations</h1>
      <div className="destinations-list">
        <div className="destination-card">
          <img src="https://source.unsplash.com/400x300/?paris" alt="Paris" />
            <p>Paris</p>
        </div>
        <div className="destination-card">
          <img src="https://source.unsplash.com/400x300/?new-york" alt="New York" />
          <p>New York</p>
        </div>
        <div className="destination-card">
          <img src="https://source.unsplash.com/400x300/?tokyo" alt="Tokyo" />
          <p>Tokyo</p>
        </div>
        <div className="destination-card">
          <img src="https://source.unsplash.com/400x300/?Rome" alt="Rome" />
          <p>Rome</p>
        </div>
        <div className="destination-card">
          <img src="https://source.unsplash.com/400x300/?switzerland" alt="Switzerland" />
          <p>switzerland</p>
        </div>
        <div className="destination-card">
          <img src="https://source.unsplash.com/400x300/?london" alt="London" />
          <p>London</p>
        </div>
        <div className="destination-card">
          <img src="https://source.unsplash.com/400x300/?Bali" alt="Bali" />
          <p>Bali</p>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
