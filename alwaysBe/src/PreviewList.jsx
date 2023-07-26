import React from 'react';
import './index.css';

const PreviewList = ({ items, onItemClick }) => {
  return (
    <ul className="preview-list">
      {items.map((item, index) => (
        <li key={item.url || index} onClick={() => onItemClick(item)}>
          {/* Display the preview content for each planet */}
          <h3>{item.name}</h3>
          <p>Climate: {item.climate}</p>
          <p>Population: {item.population}</p>
          {/* You can add more content here as needed */}
        </li>
      ))}
    </ul>
  );
};

export default PreviewList;
