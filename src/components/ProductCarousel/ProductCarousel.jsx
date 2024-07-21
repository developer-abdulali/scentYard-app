import React, { useState } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const ProductCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <>
      <div className="h-screen relative flex items-center justify-between p-4">
        <button
          className="absolute left-0 text-white bg-gray-500 md:bg-transparent px-4 py-2 rounded-full focus:outline-none "
          onClick={handlePrevClick}
        >
          <HiArrowNarrowLeft />
        </button>
        {images && images.length > 0 ? (
          <div
            key={currentIndex}
            id={`item${currentIndex + 1}`}
            className="flex-grow"
          >
            <img
              src={images[currentIndex]}
              className="w-full h-full object-cover md:max-w-lg md:mx-auto md:h-screen"
              alt={`Carousel item ${currentIndex + 1}`}
            />
          </div>
        ) : (
          <div>Image not found</div>
        )}
        <button
          className="absolute right-0 text-white px-4 z-10 bg-gray-500 md:bg-transparent py-2 rounded-full focus:outline-none "
          onClick={handleNextClick}
        >
          <HiArrowNarrowRight />
        </button>
      </div>
    </>
  );
};

export default ProductCarousel;
