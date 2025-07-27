import React from "react";

export const Badge = ({ text }) => {
  return (
    <a
      href="https://www.producthunt.com/posts/awesome-framer-motion-components"
      target="_blank"
      rel="noopener noreferrer"
      className="text-decoration-none mb-3 d-inline-block"
    >
      <div
        className="d-flex align-items-center justify-content-center px-4 py-1 rounded-pill bg-dark text-white shadow"
        style={{
          position: "relative",
          fontSize: "0.75rem",
          fontWeight: "600",
          overflow: "hidden",
        }}
      >
        <span className="me-2">{text}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
        {/* Hover underline effect */}
        <div
          className="position-absolute bottom-0 start-0 end-0 mx-4"
          style={{
            height: "1px",
            background: "linear-gradient(to right, rgba(0,255,200,0), rgba(0,255,200,0.9), rgba(0,255,200,0))",
            opacity: 0.4,
          }}
        ></div>
      </div>
    </a>
  );
};
