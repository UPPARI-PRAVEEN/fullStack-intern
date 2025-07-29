import React, { useEffect, useRef } from "react";
import pic from "../assets/corosel.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";

const cards = [
  {
    title: "Artificial Intelligence",
    subtitle: "You can do more with AI.",
    image: pic,
  },
  {
    title: "Product",
    subtitle: "Launching the new Apple Vision Pro.",
    image: pic2,
  },
  {
    title: "Productivity",
    subtitle: "Enhance your productivity.",
    image: pic3,
  },
  {
    title: "iOS",
    subtitle: "Photography just got better.",
    image: pic4,
  },
  {
    title: "iOS",
    subtitle: "Photography just got better.",
    image: pic,
  },
  {
    title: "iOS",
    subtitle: "Photography just got better.",
    image: pic2,
  },
  {
    title: "iOS",
    subtitle: "Photography just got better.",
    image: pic3,
  },
  {
    title: "iOS",
    subtitle: "Photography just got better.",
    image: pic4,
  }, {
    title: "iOS",
    subtitle: "Photography just got better.",
    image: pic2,
  },
  {
    title: "iOS",
    subtitle: "Photography just got better.",
    image: pic3,
  },
  {
    title: "iOS",
    subtitle: "Photography just got better.",
    image: pic4,
  },
];

const Carousel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollBy({
          left: 400,
          behavior: "smooth",
        });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
   <div className="relative bg-gray-950 text-white pt-1 pb-6 pl-[50px] pr-[5px]  overflow-hidden">
  {/* Vertical dotted lines */}
  {[...Array(5)].map((_, i) => (
    <div
      key={`vertical-line-${i}`}
      className="absolute top-0 bottom-0 border-l border-dashed border-gray-600"
      style={{ left: `${20 * (i + 1)}%` }}
    />
  ))}

  {/* Title and description */}
  <div className="text-center mb-10 relative z-10">
   <a href="https://react-portfolio-seven-pied.vercel.app/" target="_blank">
  <h2
    className="text-6xl font-bold underline cursor-pointer text-white decoration-white"
    style={{ fontSize: "2.5rem", fontWeight: "700" }}
  >
    Smooth International Sales
  </h2>
</a>



    <p className="text-sm text-orange-300 mt-2">
      Everything you need to handle payments for your SaaS business
    </p>
  </div>

  {/* Carousel */}
  <div
    ref={containerRef}
    className="relative z-10 flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar"
  >
    {cards.map((card, index) => (
      <div
        key={index}
        className="min-w-[380px] md:min-w-[380px] h-[600px] bg-cover bg-center rounded-xl shadow-md p-6 flex flex-col justify-end"
        style={{ backgroundImage: `url(${card.image})` }}
      >
       
      </div>
    ))}
  </div>
</div>

  );
};

export default Carousel;
