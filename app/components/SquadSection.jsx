import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import clsx from 'clsx'

export default function SquadSection() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1))
    }

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))
    }

    // Array of images for the slides
    const images = [
        'https://i.pinimg.com/550x/db/5c/17/db5c177111ffc115c88cec8a0121411f.jpg',
        'https://wallpapers.com/images/hd/bollywood-hero-hrithik-roshan-red-tika-kgwag8gxmjpb6gq9.jpg',
        'https://st4.depositphotos.com/1030375/27152/i/450/depositphotos_271521394-stock-photo-portrait-of-young-hero-woman.jpg',
    ]

    return (
        <div className="relative max-w-4xl mx-auto">
            {/* Background decorative circles */}
            <div className="absolute -left-40 top-1/2 transform -translate-y-1/2">
                <div className="w-80 h-80 rounded-full opacity-20 bg-gradient-to-r from-blue-600 to-purple-600" />
            </div>
            <div className="absolute -right-40 top-1/2 transform -translate-y-1/2">
                <div className="w-80 h-80 rounded-full opacity-20 bg-gradient-to-r from-purple-600 to-blue-600" />
            </div>

            {/* Main content */}
            <div className="relative">

                <div className="aspect-square w-96 mx-auto rounded-3xl overflow-hidden shadow-2xl relative">
                    <button
                        onClick={handlePrevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/50 rounded-full p-2 hover:bg-gray-800 transition-colors"
                    >
                        <ChevronLeftIcon className="w-6 h-6 text-white" />
                    </button>
                    <img
                        src={images[currentSlide]}
                        alt="Tech Squad"
                        className="w-full h-full object-cover"
                    />
                    <button
                        onClick={handleNextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/50 rounded-full p-2 hover:bg-gray-800 transition-colors"
                    >
                        <ChevronRightIcon className="w-6 h-6 text-white" />
                    </button>
                </div>

                {/* Side images */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-40">
                    <img
                        src={images[(currentSlide === 0 ? 2 : currentSlide - 1)]}
                        alt="Side Image"
                        className="w-full h-full object-cover opacity-50 blur-md transition-all duration-300"
                    />
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-40">
                    <img
                        src={images[(currentSlide === 2 ? 0 : currentSlide + 1)]}
                        alt="Side Image"
                        className="w-full h-full object-cover opacity-50 blur-md transition-all duration-300"
                    />
                </div>

                {/* Squad info */}
                <div className="text-center mt-8">
                    <div className="inline-block bg-green-900/30 px-4 py-1 rounded-full">
                        <span className="text-green-400 text-sm">5 Members</span>
                    </div>
                    <h2 className="text-white text-4xl font-bold mt-4">Tech Titans</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        The artists behind the visuals. These design superheroes bring
                        ideas to life, painting our projects with creativity and imagination
                    </p>
                    <a
                        href="#"
                        className="inline-block mt-6 text-green-400 hover:text-green-300 transition-colors"
                    >
                        Our design team is growing. Apply Now ➤
                    </a>
                </div>

                {/* Slide indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {[0, 1, 2].map((index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={clsx(
                                'w-2 h-2 rounded-full transition-colors',
                                currentSlide === index ? 'bg-blue-500' : 'bg-gray-600'
                            )}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
