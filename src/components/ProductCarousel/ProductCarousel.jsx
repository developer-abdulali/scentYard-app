// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const CustomPrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} custom-prev-arrow`}
//       style={{ ...style, display: "block", left: "-25px", zIndex: 1 }}
//       onClick={onClick}
//     >
//       <i className="fas fa-chevron-left text-2xl text-white"></i>
//     </div>
//   );
// };

// const CustomNextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} custom-next-arrow`}
//       style={{ ...style, display: "block", right: "-25px", zIndex: 1 }}
//       onClick={onClick}
//     >
//       <i className="fas fa-chevron-right text-2xl text-white"></i>
//     </div>
//   );
// };

// const ProductCarousel = ({ images }) => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="carousel-container max-w-lg mx-auto h-full">
//       <Slider {...settings}>
//         {images && images.length > 0 ? (
//           images.map((img, index) => (
//             <div key={index} className="container mx-auto h-full">
//               <img
//                 src={img}
//                 alt={`Additional Image ${index + 1}`}
//                 className="w-full h-screen object-cover"
//                 onError={(e) => {
//                   console.error(`Failed to load image: ${img}`, e);
//                 }}
//               />
//             </div>
//           ))
//         ) : (
//           <div>No additional images available</div>
//         )}
//       </Slider>
//     </div>
//   );
// };

// export default ProductCarousel;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute right-3 text-white text-2xl fas fa-chevron-right !important`}
      style={{ ...style, display: "block", position: "absolute" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute left-3 text-white text-2xl fas fa-chevron-left !important`}
      style={{ ...style, display: "block", position: "absolute" }}
      onClick={onClick}
    />
  );
}

const ProductCarousel = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container max-w-lg mx-auto h-full">
      <Slider {...settings} className="relative">
        {images && images.length > 0 ? (
          images.map((img, index) => (
            <div key={index} className="container mx-auto h-full">
              <img
                src={img}
                alt={`Additional Image ${index + 1}`}
                className="w-full h-screen object-cover"
                onError={(e) => {
                  console.error(`Failed to load image: ${img}`, e);
                }}
              />
            </div>
          ))
        ) : (
          <div>No additional images available</div>
        )}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
