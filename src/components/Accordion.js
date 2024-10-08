import React, { useState } from 'react';

const Accordion = ({ country }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        {country.name} {isOpen ? '-' : '+'}
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>Capital: {country.capital}</p>
          <p>Currency: {country.currency}</p>
          <p>Emoji: {country.emoji}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
