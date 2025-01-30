// // import React from "react";
// // import { motion } from "framer-motion";

// // const Timeline = () => {
// //     const events = [
// //         {
// //             text: "Late Night Maggie Party for the boost",
// //             image: "https://st4.depositphotos.com/1030375/27152/i/450/depositphotos_271521394-stock-photo-portrait-of-young-hero-woman.jpg", // Replace with actual image URL
// //         },
// //         {
// //             text: "Late Night Maggie Party for the boost",
// //             image: "https://st4.depositphotos.com/1030375/27152/i/450/depositphotos_271521394-stock-photo-portrait-of-young-hero-woman.jpg",
// //         },
// //         {
// //             text: "Late Night Maggie Party for the boost",
// //             image: "https://st4.depositphotos.com/1030375/27152/i/450/depositphotos_271521394-stock-photo-portrait-of-young-hero-woman.jpg",
// //         },
// //         {
// //             text: "Late Night Maggie Party for the boost",
// //             image: "https://st4.depositphotos.com/1030375/27152/i/450/depositphotos_271521394-stock-photo-portrait-of-young-hero-woman.jpg",
// //         },
// //     ];

// //     return (
// //         <div className="relative min-h-screen bg-black flex flex-col items-center py-20">
// //             {events.map((event, index) => (
// //                 <motion.div
// //                     key={index}
// //                     className={`flex items-center w-full max-w-3xl my-10 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
// //                     initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
// //                     animate={{ opacity: 1, x: 0 }}
// //                     transition={{ duration: 0.5 }}
// //                 >
// //                     <div className="flex items-center space-x-6">
// //                         <p className="text-gray-500 hover:text-white text-xl transition-colors duration-300">{event.text}</p>
// //                         <img
// //                             src={event.image}
// //                             alt="Maggie Party"
// //                             className="w-48 h-48 object-cover rounded-lg shadow-lg transform rotate-6 transition-transform duration-300 ease-in-out hover:rotate-45"
// //                         />
// //                     </div>
// //                 </motion.div>
// //             ))}
// //         </div>
// //     );
// // };

// // export default Timeline;
import React from "react";
import { motion } from "framer-motion";

const Timeline = () => {
  const events = [
    {
      text: "Late Night Maggie Party for the boost",
      image:
        "https://st4.depositphotos.com/1030375/27152/i/450/depositphotos_271521394-stock-photo-portrait-of-young-hero-woman.jpg",
    },
    {
      text: "Late Night Maggie Party for the boost",
      image:
        "https://st4.depositphotos.com/1030375/27152/i/450/depositphotos_271521394-stock-photo-portrait-of-young-hero-woman.jpg",
    },
    {
      text: "Late Night Maggie Party for the boost",
      image:
        "https://st4.depositphotos.com/1030375/27152/i/450/depositphotos_271521394-stock-photo-portrait-of-young-hero-woman.jpg",
    },
    {
      text: "Late Night Maggie Party for the boost",
      image:
        "https://st4.depositphotos.com/1030375/27152/i/450/depositphotos_271521394-stock-photo-portrait-of-young-hero-woman.jpg",
    },
  ];

  // Calculate the positions for the path
  const getPathData = () => {
    const offsetX = 100; // Horizontal offset for the curves
    const points = events.map((_, index) => {
      const y = 100 + index * 250; // Vertical spacing between images
      const x = index % 2 === 0 ? 50 : 150; // Alternating horizontal positions
      return { x, y };
    });

    let pathData = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prevPoint = points[i - 1];
      const currentPoint = points[i];
      const controlPoint1 = { x: prevPoint.x, y: prevPoint.y + offsetX };
      const controlPoint2 = { x: currentPoint.x, y: currentPoint.y - offsetX };
      pathData += ` C ${controlPoint1.x} ${controlPoint1.y}, ${controlPoint2.x} ${controlPoint2.y}, ${currentPoint.x} ${currentPoint.y}`;
    }

    return pathData;
  };

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center py-20">
      {/* SVG Path */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 800" // Adjust viewBox based on your content
        preserveAspectRatio="none"
      >
        <path
          d={getPathData()}
          stroke="#202020"
          strokeWidth="20"
          fill="transparent"
          vector-effect="non-scaling-stroke" // Ensures consistent stroke width
        />
      </svg>

      {/* Events */}
      {events.map((event, index) => (
        <motion.div
          key={index}
          className={`flex items-center w-full max-w-3xl my-12 ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="flex items-center space-x-6">
            <p className="text-gray-500 hover:text-white text-3xl font-bold transition-colors duration-300 z-10 max-w-xs">
              {event.text}
            </p>
            <img
              src={event.image}
              alt="Maggie Party"
              className="w-64 h-80 object-cover rounded-lg shadow-lg transform rotate-3 transition-all duration-300 ease-in-out hover:scale-125 hover:rotate-12 filter brightness-50 hover:brightness-100"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
