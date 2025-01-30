import { motion } from "framer-motion";

const VideoGallery = ({ videos }) => {
  return (
    <div className="relative flex flex-col items-center mt-8">
      {/* Semi-Circular Background Effect */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-gray-900 to-transparent rounded-full"></div>

      {/* Video Thumbnails Container */}
      <div className="relative w-[90%] overflow-x-auto flex gap-6 px-6 py-4 scrollbar-hide">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="min-w-[300px] h-[400px] rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={video.image}
              alt={`Video thumbnail ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
