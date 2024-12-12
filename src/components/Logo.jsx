// Logo.js
import React from 'react';
import LogoImage from '../assets/logo/logo222.jpg';

function Logo({ width = '200px', height = '40px' }) {
  return (
    <div className="relative">
      <img
        className="rounded-lg"
        src={LogoImage}
        alt="Logo"
        style={{
          width,
          height,
          
          objectFit: 'contain', // Ensures logo maintains aspect ratio
        }}
      />
    </div>
  );
}

export default Logo;
