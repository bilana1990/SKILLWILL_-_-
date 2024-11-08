import React from 'react';

function HeavyComponent({ filter }) {
  const data = ['React', 'Vue', 'Angular', 'Svelte'];
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Filtered Data:</h2>
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default HeavyComponent;