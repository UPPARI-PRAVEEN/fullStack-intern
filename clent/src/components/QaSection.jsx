import React, { useState } from 'react'

const QaSection = () => {
 const [openFeature, setOpenFeature] = useState(4); // Feature 4 is open by default as per image

  const features = [
    { id: 1, title: 'Global tax compliance', content: '' },
    { id: 2, title: 'Borderless SaaS payments', content: '' },
    { id: 3, title: 'Instant payment methods', content: '' },
    {
      id: 4,
      title: 'Trials & discount codes',
      content: 'Boost conversions with flexible trial periods and customizable discount codes that seamlessly integrate with your checkout process.',
    },
    { id: 5, title: 'A.I. fraud prevention', content: '' },
    { id: 6, title: 'Failed payment recovery', content: '' },
  ];

  const handleFeatureClick = (id) => {
    setOpenFeature(openFeature === id ? null : id); // Toggle open/close
  };

  return (
   <div className="relative min-h-screen bg-gray-950 text-white p-8">
  {/* Vertical lines inside the relative container */}
  {[...Array(5)].map((_, i) => (
    <div
      key={`vertical-line-leaders-${i}`}
      className="absolute top-0 bottom-0 border-l border-dashed border-gray-600"
      style={{ left: `${20 * (i + 1)}%` }}
    />
  ))}

  <div className="relative z-10 max-w-6xl mx-auto py-12">
        <h1 className="text-5xl font-bold text-center mb-4">Smooth International Sales</h1>
        <p className="text-lg text-[#F1A77D] text-center mb-16 underline">Everything you need to handle payments for your SaaS business</p>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Navigation/Features List */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-4">
            {features.map((feature) => (
              <div key={feature.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleFeatureClick(feature.id)}
                >
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-4 text-xl font-mono">0{feature.id}</span>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <span>
                    {feature.id === openFeature ? (
                      <svg className="w-6 h-6 text-white transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    ) : (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    )}
                  </span>
                </div>
                {openFeature === feature.id && feature.content && (
                  <p className="mt-4 text-gray-300">
                    {feature.content}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Content/Details */}
          <div className="w-full lg:w-1/2 p-8 rounded-lg bg-gray-800 shadow-lg flex items-center justify-center">
            <div className="w-full max-w-md bg-gray-900 rounded-lg p-6">
              {/* Traffic light dots */}
              <div className="flex space-x-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              <h4 className="text-gray-400 text-sm mb-4">Conversion Boosters</h4>

              <div className="mb-4">
                <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg cursor-pointer">
                  <label className="flex items-center">
                    <input type="radio" name="trial" className="form-radio text-indigo-600 h-4 w-4" checked readOnly />
                    <span className="ml-3 text-white">14-day free trial</span>
                  </label>
                  <span className="text-gray-400">&gt;</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-gray-300 text-sm">
                  <span>WELCOME10</span>
                  <span className="text-gray-400">10% off first payment</span>
                </div>
                <div className="flex justify-between items-center text-gray-300 text-sm">
                  <span>ANNUAL25</span>
                  <span className="text-gray-400">25% off annual plans</span>
                </div>
                <div className="flex justify-between items-center text-gray-300 text-sm">
                  <span>EARLYBIRD</span>
                  <span className="text-gray-400">Free onboarding ($99 value)</span>
                </div>
              </div>

              <p className="mt-6 text-gray-500 text-xs">
                * Automatic discount application at checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QaSection