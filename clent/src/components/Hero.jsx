import React from "react";
import { FaRocket } from "react-icons/fa";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      className="text-white min-h-screen py-4 relative bg-gray-950 mb-[-60px]
"
    >
      {/* Background Dotted Lines Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {" "}
        {/* absolute, inset-0, z-0, pointer-events-none */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`vertical-line-leaders-${i}`}
            className="absolute top-0 bottom-0 border-l border-dashed border-gray-600"
            style={{ left: `${20 * (i + 1)}%` }}
          />
        ))}
      </div>
      {/* Main Content (Header, Hero Section, etc.) */}
      <div className="relative z-10">
        {" "}
        {/* Add 'relative' and 'z-10' to bring content to front */}
        <div className="container mx-auto">
          <div
            className="flex justify-between items-center px-5 py-3 border border-blue-400 rounded-xl"
            style={{
              height: "78px",
              background:
                "linear-gradient(90deg, #384563ff, #16243bff, #16243bff)", // glacier-style dark blue gradient
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="flex items-center gap-3 relative top-[70px] left-[10px]">
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
            </div>

            <div className="flex items-center">
              <button
                type="button"
                className="flex items-center gap-2 text-white text-sm font-medium px-6 py-2 
             bg-gradient-to-r from-purple-600 to-purple-800 
             shadow-md 
             hover:from-purple-700 hover:to-purple-900 
             focus:outline-none focus:ring-4 focus:ring-purple-300"
                style={{ borderRadius: "999px" }} // This overrides any Tailwind class if needed
              >
                <FaRocket size={16} />
                <span style={{ textDecoration: "underline" }}>Connect</span>
              </button>
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
          {/* <div className="mb-4 flex justify-center">
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
          </div> */}
          <a
            href="https://www.producthunt.com/posts/awesome-framer-motion-components"
            target="__blank"
            className="no-underline group mb-8 cursor-pointer relative rounded-full p-[2px] text-xs font-semibold leading-6 inline-block"
            style={{
              textDecoration: "none",
              backgroundImage: `
      radial-gradient(80.38% 222.5% at -13.75% -12.36%, #8ec1c4ff 0%, rgba(255, 255, 255, 0) 100%),
      radial-gradient(80.69% 208.78% at 108.28% 112.58%, #EABFFF 0%, rgba(135, 38, 183, 0) 100%)
    `,
            }}
          >
            <div
              className="relative flex space-x-2 items-center z-10 rounded-full py-1.5 px-6"
              style={{
                background: `linear-gradient(90deg, #b6d0d5ff 0%, #d0d0d0ff 100%)`, // gradient background matching image
              }}
            >
              <span className="text-black text-base font-bold  decoration-1  underline-offset-[6px]">
                Save up to 50% on fees with our competitive pricing 🎉
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                />
              </svg>
            </div>
          </a>

          {/* Headings */}
          <div className="text-center">
            <div className="relative group inline-block">
              <a
                href="https://react-portfolio-seven-pied.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
                style={{ textDecoration: "none" }}
              >
                <h1
                  className="text-[20rem] font-extrabold text-black leading-none cursor-pointer"
                  style={{ fontSize: "4rem", fontWeight: "700" }}
                >
                  New Era of SEO Research
                </h1>
              </a>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex items-center gap-3 bg-black text-white text-sm px-3 py-2 rounded shadow-lg whitespace-nowrap z-10">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
    />
  </svg>
  <span>https://react-portfolio-seven-pied.vercel.app/</span>
</div>

            </div>
          </div>

         <div className="relative group inline-block">
  <a
    href="https://react-portfolio-seven-pied.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer"
    style={{ textDecoration: "none" }}
  >
    <h2
      className="font-bold mb-3"
      style={{ fontSize: "4rem", fontWeight: "700", color: "#F1A77D" }}
    >
      AI APIs
    </h2>
  </a>

  {/* Tooltip */}
  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex items-center gap-2 bg-black text-white text-sm px-3 py-2 rounded shadow-lg whitespace-nowrap z-10">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
      />
    </svg>
    <span>https://react-portfolio-seven-pied.vercel.app/</span>
  </div>
</div>


          {/* Paragraphs */}
          <div className="max-w-2xl mx-auto">
            <p className="text-white text-center mb-2 text-lg hover:underline hover:decoration-blue-500 hover:decoration-2 inline-block">
              Empowering small teams to achieve big business outcomes. A
              complete financial infrastructure for the next generation
            </p>
          </div>

          <p
            className="  text-base mt-3 hover:underline hover:decoration-blue-500 hover:decoration-2 inline-block"
            style={{ fontSize: "1.2rem", fontWeight: "700", color: "#F1A77D" }}
          >
            Built for the future of work.
          </p>
        </div>
      </div>{" "}
    </div>
  );
}
