// FooterSection.js (or you can integrate this directly into App.js)
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white ">
      {/* Top Yellow Border */}
      <div className="w-full h-1 bg-yellow-400"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Industries We Serve Section */}
        <h2 className="text-4xl font-semibold inline-flex items-center gap-4 mb-12">
          Industries We Serve
          {/* <span className="block w-100 h-1 bg-orange-500"></span> */}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {/* Column 1 */}
          <div>
            <ul className="space-y-3">
              <li className="text-white hover:text-gray-300 cursor-pointer">
                Home
              </li>
              <li className="text-white hover:text-gray-300 cursor-pointer">
                Services
              </li>
              <li className="text-white hover:text-gray-300 cursor-pointer">
                Portfolio
              </li>
              <li className="text-white hover:text-gray-300 cursor-pointer">
                Consulting
              </li>
              <li className="text-white hover:text-gray-300 cursor-pointer">
                Company
              </li>
              <li className="text-white hover:text-gray-300 cursor-pointer">
                Career
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-3">
              <li className="text-white hover:text-gray-300 cursor-pointer">
                Insurance & Home Warranty
              </li>
              <li className="text-white hover:text-gray-300 cursor-pointer">
                Edu Tech & Education
              </li>
              <li className="text-white hover:text-gray-300 cursor-pointer">
                Retail Fashion & Lifestyle
              </li>
              <li className="text-white hover:text-gray-300 cursor-pointer">
                Travel & Hospitality
              </li>
              <li className="text-white hover:text-gray-300 cursor-pointer">
                Health Tech & Health Care
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul className="space-y-3">
              <li className="text-white hover:text-gray-300 cursor-pointer">
                IT Enabled Services
              </li>
              <li className="text-white hover:text-gray-300 cursor-pointer">
                Real Estate & Infrastructure
              </li>
              <li className="text-white hover:text-gray-300 cursor-pointer">
                Media & Entertainment
              </li>
              <li className="text-white hover:text-gray-300 cursor-pointer">
                Energy
              </li>
              <li className="text-white hover:text-gray-300 cursor-pointer">
                AI & MS
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <ul className="space-y-3">
              <li className="text-white hover:text-gray-300 cursor-pointer">
                Manufacturing
              </li>
              <li className="text-white hover:text-gray-300 cursor-pointer">
                Banking & Financial
              </li>
              <li className="text-white hover:text-gray-300 cursor-pointer">
                Services
              </li>
              <li className="text-white hover:text-gray-300 cursor-pointer">
                Food & Beverage
              </li>
              <li className="text-white hover:text-gray-300 cursor-pointer">
                Esport & Gaming
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Left part: Icons and Links */}
          <div className="flex items-center space-x-6 text-sm">
            {/* Placeholder for left-most icon (blue circle with question mark) */}
            <div className="bg-blue-600 rounded-full p-2">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9.252a4.486 4.486 0 011.006 1.139l.799 1.422m-2.548 4.5V16.7c0-.28.22-.5.5-.5h.5c.28 0 .5.22.5.5v.5m-3.5 0a9 9 0 11-9 0 9 9 0 019 0z"
                ></path>
              </svg>
            </div>
            <a href="#" className="flex items-center text-white hover:text-gray-300">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 10a2 2 0 01-2 2H7a2 2 0 01-2-2V8a2 2 0 012-2h10a2 2 0 012 2v10z"
                ></path>
              </svg>
              Sales
            </a>
            <a href="#" className="text-white flex items-center hover:text-gray-300">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.364 5.636a9 9 0 010 12.728m0 0l-3.27 3.27a.5.5 0 01-.707 0l-3.27-3.27m3.27-3.27a.5.5 0 01.707 0l3.27 3.27M6 18H4a2 2 0 01-2-2v-4a2 2 0 012-2h2M6 6h2a2 2 0 012 2v4a2 2 0 01-2 2H6m-2 4h4"
                ></path>
              </svg>
              Support
            </a>
            <a href="#" className="text-white flex items-center hover:text-gray-300">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-1.282-8.452-3.524m16.904-3.502L21 4m-2.147 6.002H18a2 2 0 00-2 2v3m0 0h-4M6 18h2a2 2 0 002-2v-3m0 0H8"
                ></path>
              </svg>
              Career
            </a>
          </div>

          {/* Middle part: Help Scout Banner */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center  bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-full py-2 px-4 shadow-lg border border-gray-700 max-w-4xl mx-auto ">
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

          {/* Right part: Social Media Icons */}
          <div className="flex items-center space-x-5">
            <a href="#" className="hover:text-gray-300">
              <img
                src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                alt="Facebook"
                className="h-6 w-6 filter invert"
              />
            </a>
            <a href="#" className="hover:text-gray-300">
              <img
                src="https://www.svgrepo.com/show/512399/instagram-167.svg"
                alt="Instagram"
                className="h-6 w-6 filter invert"
              />
            </a>
            <a href="#" className="hover:text-gray-300">
              <img
                src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                alt="Twitter"
                className="h-6 w-6 filter invert"
              />
            </a>
            {/* <a href="#" className="hover:text-gray-300">
              <img
                src="https://www.svgrepo.com/svg/503982/bola-basket-basketball"
                alt="LinkedIn"
                className="h-6 w-6 filter invert"
              />
            </a>
            <a href="#" className="hover:text-gray-300">
              <img
                src="https://www.svgrepo.com/show/448234/behance.svg"
                alt="Behance"
                className="h-6 w-6 filter invert"
              />
            </a> */}
          </div>
        </div>
      </div>

      {/* Bottom Yellow Border */}
      <div className="w-full h-1 bg-yellow-400"></div>
    </footer>
  );
}

export default Footer;
