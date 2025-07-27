import React from 'react';

// Reusable ActivityCard component (remains the same)
const ActivityCard = ({ iconBg, iconColor, iconPath, title, subtitle, timeAgo }) => (
  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm mb-4 last:mb-0">
    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 ${iconBg}`}>
      {iconPath ? (
        <svg
          className={`w-6 h-6 ${iconColor}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath}></path>
        </svg>
      ) : (
        // Placeholder for user icon if path is not provided
        <svg
          className={`w-6 h-6 ${iconColor}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      )}
    </div>
    <div className="flex-grow">
      <p className="text-gray-800 font-semibold text-base">{title}</p>
      <p className="text-gray-500 text-sm">{subtitle}</p>
    </div>
    {timeAgo && <span className="text-gray-400 text-xs ml-4 flex-shrink-0">{timeAgo}</span>}
  </div>
);


export function IndustryLeadersSection() {
  // Dummy data for the cards to populate the columns
  const activityData = [
    { type: 'signed_up', title: 'User signed up', subtitle: 'Magic UI', timeAgo: '10m ago' },
    { type: 'payment', title: 'Payment received', subtitle: 'Magic UI', timeAgo: '15m ago' },
    { type: 'event', title: 'New event', subtitle: 'Magic UI', timeAgo: '2m ago' },
    { type: 'message', title: 'New message', subtitle: 'Magic UI', timeAgo: '5m ago' },
    { type: 'signed_up', title: 'User signed up', subtitle: 'Magic UI', timeAgo: '10m ago' },
    { type: 'payment', title: 'Payment received', subtitle: 'Magic UI', timeAgo: '20m ago' },
    { type: 'event', title: 'New event', subtitle: 'Magic UI', timeAgo: '7m ago' },
    { type: 'message', title: 'New message', subtitle: 'Magic UI', timeAgo: '12m ago' },
    { type: 'signed_up', title: 'User signed up', subtitle: 'Magic UI', timeAgo: '25m ago' },
    { type: 'payment', title: 'Payment received', subtitle: 'Magic UI', timeAgo: '30m ago' },
    { type: 'event', title: 'New event', subtitle: 'Magic UI', timeAgo: '35m ago' },
    { type: 'message', title: 'New message', subtitle: 'Magic UI', timeAgo: '40m ago' },
    { type: 'signed_up', title: 'User signed up', subtitle: 'Magic UI', timeAgo: '45m ago' },
    { type: 'payment', title: 'Payment received', subtitle: 'Magic UI', timeAgo: '50m ago' },
    { type: 'event', title: 'New event', subtitle: 'Magic UI', timeAgo: '55m ago' },
    { type: 'message', title: 'New message', subtitle: 'Magic UI', timeAgo: '1h ago' },
  ];

  // Helper to map type to Tailwind classes and SVG path (remains the same)
  const getActivityIconProps = (type) => {
    switch (type) {
      case 'signed_up':
        return {
          iconBg: 'bg-yellow-100',
          iconColor: 'text-yellow-500',
          iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
        };
      case 'payment':
        return {
          iconBg: 'bg-green-100',
          iconColor: 'text-green-500',
          iconPath: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
        };
      case 'event':
        return {
          iconBg: 'bg-blue-100',
          iconColor: 'text-blue-500',
          iconPath: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4',
        };
      case 'message':
        return {
          iconBg: 'bg-pink-100',
          iconColor: 'text-pink-500',
          iconPath: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.105A9.764 9.764 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
        };
      default:
        return {};
    }
  };

  return (
    <div className="relative w-full bg-[#060417] text-white overflow-hidden">

      {/* Dashed background lines Container - Vertical */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={`vertical-line-leaders-${i}`}
            className="absolute top-0 bottom-0 border-l border-dashed border-gray-600"
            style={{ left: `${20 * (i + 1)}%` }}
          />
        ))}
      </div>

      {/* Section Content - Add relative z-10 to bring it to front */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          The Choice of 80+ Industry Leaders
        </h2>
        {/* Sub-heading/Paragraph */}
         <p className="text-lg text-[#F1A77D] text-center mb-16 underline">Everything you need to handle payments for your SaaS business</p>


        {/* Columns of Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - max-h-[600px] and overflow-hidden */}
          <div className="bg-gray-100 rounded-2xl p-6 shadow-xl max-h-[600px] overflow-hidden">
            {activityData.slice(0, 8).map((activity, index) => {
              const iconProps = getActivityIconProps(activity.type);
              return (
                <ActivityCard
                  key={`col1-${index}`}
                  title={activity.title}
                  subtitle={activity.subtitle}
                  timeAgo={activity.timeAgo}
                  {...iconProps}
                />
              );
            })}
          </div>

          {/* Column 2 - max-h-[600px] and overflow-hidden */}
          <div className="bg-gray-100 rounded-2xl p-6 shadow-xl max-h-[600px] overflow-hidden">
            {activityData.slice(0, 8).map((activity, index) => {
              const iconProps = getActivityIconProps(activity.type);
              return (
                <ActivityCard
                  key={`col2-${index}`}
                  title={activity.title}
                  subtitle={activity.subtitle}
                  timeAgo={activity.timeAgo}
                  {...iconProps}
                />
              );
            })}
          </div>

          {/* Column 3 - max-h-[600px] and overflow-hidden */}
          <div className="bg-gray-100 rounded-2xl p-6 shadow-xl max-h-[600px] overflow-hidden">
            {activityData.slice(0, 8).map((activity, index) => {
              const iconProps = getActivityIconProps(activity.type);
              return (
                <ActivityCard
                  key={`col3-${index}`}
                  title={activity.title}
                  subtitle={activity.subtitle}
                  timeAgo={activity.timeAgo}
                  {...iconProps}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}