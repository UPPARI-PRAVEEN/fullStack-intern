import React from "react";
import { FaRocket } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <div
      className="text-white min-h-screen py-4 relative" // Add 'relative' to make z-index children work
      style={{ backgroundColor: "#0A0A1A" }}
    >
      {/* Background Dotted Lines Container */}
      <div className="absolute inset-0 z-0 pointer-events-none"> {/* absolute, inset-0, z-0, pointer-events-none */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`vertical-line-leaders-${i}`}
            className="absolute top-0 bottom-0 border-l border-dashed border-gray-600"
            style={{ left: `${20 * (i + 1)}%` }}
          />
        ))}
      </div>

      {/* Main Content (Header, Hero Section, etc.) */}
      <div className="relative z-10"> {/* Add 'relative' and 'z-10' to bring content to front */}
        <div className="container mx-auto">
          <div
            className="flex justify-between items-center px-5 py-3 border border-blue-400 rounded-xl"
            style={{ height: "78px" }}
          >
            <div
              className="flex items-center gap-3 relative top-[70px] left-[10px]"
            >
              <img
                src={logo}
                alt="WASS Logo"
                width="150"
                height="10"
                style={{
    transform: "rotate(0deg)",
    opacity: 1,
    filter: "brightness(0) invert(1)", // makes dark image white
  }}
              />
              {/* <span
                className="font-medium text-[10px] relative top-[-40px] right-[80px]"
              >
                Tech Makes Reality
              </span> */}
            </div>

            
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl px-6 py-3 flex items-center gap-2 shadow-lg">
  <FaRocket size={18} />
  <span className="text-white font-semibold text-lg">Connect</span>
</div>
          </div>
        </div>

        {/* Hero Section */}
        <div
          className="container mx-auto mt-5 py-5 px-4 rounded-3xl text-center text-gray-800"
          style={{
            background: "#D9D9D9",
            height: "470px",
            maxWidth: "1300px",
          }}
        >
          {/* Styled Button */}
          <div className="mb-4 flex justify-center">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 rounded-full border-2 border-blue-400 text-gray-800 no-underline shadow-sm transition-all duration-300 ease-in-out"
              style={{
                fontWeight: "600",
                fontSize: "0.9rem",
                backgroundColor: "#e9f8fc",
              }}
            >
              Save up to 50% on fees with our competitive pricing 🎉
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                className="ml-2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
          </div>

          {/* Headings */}
          <h1 className="font-bold mb-2 text-4xl leading-tight">
            New Era of SEO Research
          </h1>
          <h2
            className="font-bold mb-3 text-4xl text-orange-500 tracking-wider"
          >
            AI APIs
          </h2>

          {/* Paragraphs */}
          <div className="max-w-2xl mx-auto">
  <p className="text-gray-500 text-center mb-2 text-lg">
    Empowering small teams to achieve big business outcomes. A complete
    financial infrastructure for the next generation
  </p>
</div>

          <p
            className="font-semibold text-orange-500 text-base mt-3"
          >
            Built for the future of work.
          </p>
        </div>

        {/* Bottom Tagline Section */}
        <div className="text-center mt-5">
          <h3 className="font-bold">Smooth International Sales</h3>

          <p className="text-yellow-400">
            Everything you need to handle payments for your SaaS business
          </p>
        </div>
      </div> {/* End of main content wrapper */}
    </div>
  );
}