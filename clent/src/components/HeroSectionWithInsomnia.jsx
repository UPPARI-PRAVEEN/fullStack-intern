"use client"; // If you are using React Server Components or similar, keep this. Otherwise, it can be removed.
import React from "react";
import { motion } from "framer-motion"; // Assuming you have framer-motion installed for animations
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight"; // Adjust path as per your project structure

export function HeroSectionWithInsomnia({}) {
  return (
   <>
    <div className="relative min-h-[75vh] bg-[#060417] text-white flex flex-col items-center justify-center p-4 overflow-hidden">
     
{[...Array(5)].map((_, i) => (
  <div
    key={`vertical-line-leaders-${i}`}
    className="absolute top-0 bottom-0 border-l border-dashed border-gray-600"
    style={{ left: `${20 * (i + 1)}%` }}
  />
))}

      <HeroHighlight className="relative z-10 py-16">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mb-8"
        >
          With insomnia, nothing&apos;s real. Everything is far away. Everything
          is a{" "}
          <Highlight className="text-blue-400 dark:text-blue-400">
            copy, of a copy, of a copy.
          </Highlight>
        </motion.h1>

        <p
          className="
    text-[#F1A77D]
    text-center
    text-sm md:text-base
    max-w-6xl mx-auto
    mb-12
    underline
    decoration-transparent
    hover:decoration-blue-500
    decoration-solid
    decoration-2
    underline-offset-4
    transition-colors duration-300 ease-in-out
  "
        >
          Everything you need to handle payments for your SaaS business. With
          the best in class components and templates, stand out from the crowd
          and get more attention to your website. Trusted by founders and
          entrepreneurs from all over the world. With the best in class
          components and templates, stand out from the crowd and get more
          attention to your website. Trusted by founders and entrepreneurs from
          all over the world. With the best in class components and templates,
          stand out from the crowd and get more attention to your website.
          Trusted by founders and entrepreneurs from all over the world.
        </p>

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-full py-2 px-4 shadow-lg border border-gray-700 max-w-2xl mx-auto mt-15">
          <div className="flex items-center -space-x-3">
            <img
              src="https://randomuser.me/api/portraits/women/1.jpg" // Replace with actual image paths
              alt="User 1"
              className="w-8 h-8 rounded-full border-2 border-gray-600"
            />
            <img
              src="https://randomuser.me/api/portraits/men/2.jpg" // Replace with actual image paths
              alt="User 2"
              className="w-8 h-8 rounded-full border-2 border-gray-600"
            />
            <img
              src="https://randomuser.me/api/portraits/women/3.jpg" // Replace with actual image paths
              alt="User 3"
              className="w-8 h-8 rounded-full border-2 border-gray-600"
            />
          </div>
          <span className="text-sm text-gray-300">
            We'd love to show you the magic of Help Scout.
          </span>
          <button className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors duration-200 whitespace-nowrap">
            Book a Demo
          </button>
          <button
            className="
            flex items-center justify-center
            w-6 h-6 rounded-full
            hover:bg-red-700
            text-white text-lg font-bold leading-none
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50
          "
            aria-label="Close" // Good for accessibility
          >
            &times; {/* HTML entity for a multiplication sign / 'x' */}
          </button>
        </div>
      </HeroHighlight>
    </div>
     <div className="relative w-full py-20 bg-[#060417] text-white overflow-hidden">
      {/* Dashed background lines - Vertical (reusing from previous sections) */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`vertical-line-support-${i}`}
          className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gray-700 to-transparent opacity-30"
          style={{ left: `${20 * (i + 1)}%` }}
        />
      ))}

      {/* Main white content container */}
      <div className="relative z-10 bg-white text-gray-800 rounded-2xl shadow-xl max-w-7xl mx-auto p-8 md:p-12 lg:p-16">
        {/* Section Title */}
      <h2 className="text-4xl md:text-4xl lg:text-6xl font-bold text-left mb-8 md:mb-12 leading-tight max-w-md ">
    The new recipe for delightful support
  </h2>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row  gap-4 mb-16">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition-colors duration-200 shadow-md">
            Start for Free
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg text-lg font-semibold transition-colors duration-200">
            See Pricing
          </button>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Unlimited Seats */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="mb-4">
              <img
                src="https://randomuser.me/api/portraits/women/4.jpg" // Replace with actual avatar group image
                alt="Avatar Group"
                className="w-24 h-24 rounded-full object-cover border-4 border-purple-300" // Example styling for avatar circle
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Unlimited seats</h3>
            <p className="text-gray-600">
              Connect everyone and every team to the voice of the customer.
            </p>
          </div>

          {/* Card 2: Integrated AI */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="mb-4">
              {/* This is a placeholder for the chat bubble/AI icon */}
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center p-4">
                <svg
                  className="w-full h-full text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.105A9.764 9.764 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Integrated AI</h3>
            <p className="text-gray-600">
              No add-ons or fees. AI is included, even on the Free plan.
            </p>
          </div>

          {/* Card 3: Zero dead ends */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="mb-4">
              {/* Placeholder for the logo/icon */}
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center p-4">
                <svg
                  className="w-full h-full text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Zero dead ends</h3>
            <p className="text-gray-600">
              A platform optimized for customer delight over deflection.
            </p>
          </div>
        </div>
      </div>
    </div>
   </>
  );
}
