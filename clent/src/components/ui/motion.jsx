// This is a placeholder for motion. If you are using framer-motion,
// you would import motion directly from "framer-motion".
// For this example, we'll just pass through the children and props.
import React from 'react';

export const motion = {
  h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
  div: ({ children, ...props }) => <div {...props}>{children}</div>,
  // Add other HTML elements as needed (e.g., span, p)
};