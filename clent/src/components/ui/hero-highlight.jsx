// This is a placeholder. Replace with your actual HeroHighlight component
// from your UI library (e.g., aceternity-ui).
import React from 'react';

export const HeroHighlight = ({ children, className }) => {
  return (
    <div className={`relative w-full ${className}`}>
      {children}
    </div>
  );
};

export const Highlight = ({ children, className }) => {
  return (
    <span className={`relative z-10 ${className}`}>
      {children}
    </span>
  );
};