// pages/index.js
"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const slides = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/550x/db/5c/17/db5c177111ffc115c88cec8a0121411f.jpg",
    title: "Nora Fatehi",
    description: "Performed at a grand event in Pune, making the night unforgettable.",
    date: "14 March 2023",
  },
  {
    id: 2,
    image:
      "https://wallpapers.com/images/hd/bollywood-hero-hrithik-roshan-red-tika-kgwag8gxmjpb6gq9.jpg",
    title: "Hrithik Roshan",
    description: "Starred in a breathtaking performance in Mumbai.",
    date: "23 March 2023",
  },
  {
    id: 3,
    image:
      "https://st4.depositphotos.com/1030375/27152/i/450/depositphotos_271521394-stock-photo-portrait-of-young-hero-woman.jpg",
    title: "Bollywood Heroine",
    description: "Dazzled the audience in a high-profile brand launch.",
    date: "5 April 2023",
  },
];

export default function HeroCarousel() {
  const [swiper, setSwiper] = useState(null);

  return (
    <div className="relative min-h-screen bg-[#111827] text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Diagonal Top-Left Banner */}
      <div className="absolute top-10 left-[-20px] bg-gradient-to-r from-black via-gray-700 to-black text-white text-lg font-bold px-6 py-3 rotate-[-30deg]">
  <marquee scrollamount="20">
    ★ HIGHEST OF THE SHOW ★ HIGHEST OF THE SHOW ★ HIGHEST OF THE SHOW ★
  </marquee>
</div>

{/* Diagonal Bottom-Right Banner */}
<div className="absolute bottom-10 right-[-100px] bg-gradient-to-r from-black via-gray-700 to-black text-white text-lg font-bold px-6 py-3 rotate-[140deg]">
  <marquee scrollamount="26">
    ★ HIGHEST OF THE SHOW ★ HIGHEST OF THE SHOW ★ HIGHEST OF THE SHOW ★
  </marquee>
</div>

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-10 text-center">
        Recent Shows Made Star <br /> Studded via StarClinch
      </h1>

      <div className="relative w-full max-w-5xl flex items-center">
        {/* Left Navigation Button */}
        <button
          onClick={() => swiper?.slidePrev()}
          className="absolute left-0 bg-black/50 p-3 rounded-full hover:bg-black/70 transition-all z-10"
        >
          <ChevronLeftIcon className="h-8 w-8 text-white" />
        </button>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiper}
          navigation={false}
          loop={true}
          className="w-full px-12"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="flex justify-center">
              <div className="flex items-center w-4/5 gap-8">
                {/* Enlarged Image */}
                <div className="w-1/2">
                  <div className="rounded-t-[50%] overflow-hidden w-full aspect-[3/4]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Left-aligned Text Beside Image */}
                <div className="w-1/2 text-left">
                  <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-gray-300 text-xl mb-4">{slide.description}</p>
                  <span className="text-gray-400 text-lg">{slide.date}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Navigation Button */}
        <button
          onClick={() => swiper?.slideNext()}
          className="absolute right-0 bg-black/50 p-3 rounded-full hover:bg-black/70 transition-all z-10"
        >
          <ChevronRightIcon className="h-8 w-8 text-white" />
        </button>
      </div>
    </div>
  );
}
