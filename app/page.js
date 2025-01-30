"use client";
import { useState } from "react";
import SquadSection from "../app/components/SquadSection";
import Herohine from "../app/components/Herohine";
import Footer from "../app/components/Footer";
import TimeLine from "../app/components/TimeLine";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  // State for image and title in the top section
  const [imageSource, setImageSource] = useState(
    "https://st4.depositphotos.com/1030375/27152/i/450/depositphotos_271521394-stock-photo-portrait-of-young-hero-woman.jpg"
  );
  const [title, setTitle] = useState("Singers");
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleImageClick = () => {
    setIsOverlayVisible(true);
    setTimeout(() => {
      if (
        imageSource ===
        "https://st4.depositphotos.com/1030375/27152/i/450/depositphotos_271521394-stock-photo-portrait-of-young-hero-woman.jpg"
      ) {
        setImageSource(
          "https://wallpapers.com/images/hd/bollywood-hero-hrithik-roshan-red-tika-kgwag8gxmjpb6gq9.jpg"
        );
        setTitle("Comedian");
      } else if (
        imageSource ===
        "https://wallpapers.com/images/hd/bollywood-hero-hrithik-roshan-red-tika-kgwag8gxmjpb6gq9.jpg"
      ) {
        setImageSource(
          "https://i.pinimg.com/550x/db/5c/17/db5c177111ffc115c88cec8a0121411f.jpg"
        );
        setTitle("Dancer");
      } else {
        setImageSource(
          "https://st4.depositphotos.com/1030375/27152/i/450/depositphotos_271521394-stock-photo-portrait-of-young-hero-woman.jpg"
        );
        setTitle("Singers");
      }
      setIsOverlayVisible(false);
    }, 500);
  };

  // Bottom section - images grid
  const images = [
    "https://i.pinimg.com/550x/db/5c/17/db5c177111ffc115c88cec8a0121411f.jpg",
    "https://i.pinimg.com/550x/db/5c/17/db5c177111ffc115c88cec8a0121411f.jpg",
    "https://i.pinimg.com/550x/db/5c/17/db5c177111ffc115c88cec8a0121411f.jpg",
    "https://i.pinimg.com/550x/db/5c/17/db5c177111ffc115c88cec8a0121411f.jpg",
    "https://i.pinimg.com/550x/db/5c/17/db5c177111ffc115c88cec8a0121411f.jpg",
    "https://i.pinimg.com/550x/db/5c/17/db5c177111ffc115c88cec8a0121411f.jpg",
    "https://i.pinimg.com/550x/db/5c/17/db5c177111ffc115c88cec8a0121411f.jpg",
    "https://i.pinimg.com/550x/db/5c/17/db5c177111ffc115c88cec8a0121411f.jpg",
  ];

  const isInLastRow = (index, totalImages) => {
    const itemsPerRow = 4;
    return index >= totalImages - itemsPerRow;
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] relative overflow-hidden">
      {/* Top Section */}
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="flex flex-row items-center relative">
          <h2 className="text-8xl font-bold text-white z-10">{title}</h2>
          <div
            className="relative w-[600px] h-[600px] rounded-full overflow-hidden border-8 border-red-500 transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
            onClick={handleImageClick}
          >
            <Image
              src={imageSource}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-500 ease-in-out"
            />
            {isOverlayVisible && (
              <div className="absolute inset-0 bg-orange-500 rounded-full animate-overlay-slide-up"></div>
            )}
          </div>
          <div className="ml-16 text-center">
            <h3 className="text-gray-400 text-4xl">
              Choose
              <br />
              from 100+
              <br />
              Categories
            </h3>
            <a href="#" className="text-red-400 mt-6 text-xl block">
              Explore all categories →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Toggle buttons */}
        <div className="flex justify-center space-x-4 mb-16">
          <button className="bg-white text-black px-8 py-2 rounded-full focus:outline-none transition-all duration-300">
            Photos
          </button>
          <button className="bg-[#1A1A1A] text-white px-8 py-2 rounded-full focus:outline-none transition-all duration-300 hover:bg-[#252525]">
            Videos
          </button>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-square relative group"
            >
              <div
                className={`w-full h-full overflow-hidden ${
                  isInLastRow(index, images.length)
                    ? "rounded-2xl"
                    : index % 2 === 0
                    ? "rounded-full"
                    : "rounded-2xl"
                }`}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-gray-600"></div>
          <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        </div>
      </div>

      <div className="min-h-screen bg-[#0A0A0A]">
        <main className="container mx-auto px-4 py-16">
          <TimeLine />
        </main>
      </div>

      {/* Meet Our Starclinch Squads */}
      <div className="min-h-screen bg-[#0A0A0A]">
        <main className="container mx-auto px-4 py-16">
          <h1 className="text-center text-5xl font-bold text-white mb-16">
            Meet Our Starclinch Squads
          </h1>
          <SquadSection />
        </main>
      </div>
      {/* Meet Our Starclinch Squads */}
      <div className="min-h-screen bg-[#0A0A0A]">
        <main className="container mx-auto px-4 py-16">
          <Herohine />
        </main>
      </div>
      <div className="min-h-screen bg-[#0A0A0A]">
        <main className="container mx-auto px-4 py-16">
          <Footer />
        </main>
      </div>
    </div>
  );
}