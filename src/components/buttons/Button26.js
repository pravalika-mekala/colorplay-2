import React, { useState } from 'react';

function Button26() {
  const [color, setColor] = useState('silver');
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [shake, setShake] = useState(false);

  const handleClick = () => {
    // Toggle color
    setColor(prev => (prev === 'silver' ? '#FFD700' : 'silver'));

    // Random movement
    const top = Math.floor(Math.random() * 100) - 50;
    const left = Math.floor(Math.random() * 100) - 50;
    setPosition({ top, left });

    // Trigger shake
    setShake(true);
    setTimeout(() => setShake(false), 300); // shake lasts 0.3s
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'relative',
        top: position.top,
        left: position.left,
        transition: 'top 0.3s ease, left 0.3s ease, background-color 0.3s ease',
        backgroundColor: color,
        color: 'black',
        border: '2px solid black',
        borderRadius: '50%',
        padding: '12px 24px',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        transform: shake ? 'translateY(-5px) translateX(2px)' : 'translateY(0)',
      }}
    >
      Amazing
    </button>
  );
}

export default Button26;