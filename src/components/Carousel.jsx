// import React from "react";

// const Carousel = () => {
//   return (
//     <div id="default-carousel" className="relative w-full" data-carousel="slide">
//       <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//           <img
//             src="https://picsum.photos/800/600?random=1"
//             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             alt="Slide 1"
//           />
//         </div>
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//           <img
//             src="https://picsum.photos/800/600?random=2"
//             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             alt="Slide 2"
//           />
//         </div>
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//           <img
//             src="https://picsum.photos/800/600?random=3"
//             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             alt="Slide 3"
//           />
//         </div>
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//           <img
//             src="https://picsum.photos/800/600?random=4"
//             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             alt="Slide 4"
//           />
//         </div>
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//           <img
//             src="https://picsum.photos/800/600?random=5"
//             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             alt="Slide 5"
//           />
//         </div>
//       </div>
//       <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//         <button
//           type="button"
//           className="w-3 h-3 rounded-full"
//           aria-current="true"
//           aria-label="Slide 1"
//           data-carousel-slide-to="0"
//         ></button>
//         <button
//           type="button"
//           className="w-3 h-3 rounded-full"
//           aria-current="false"
//           aria-label="Slide 2"
//           data-carousel-slide-to="1"
//         ></button>
//         <button
//           type="button"
//           className="w-3 h-3 rounded-full"
//           aria-current="false"
//           aria-label="Slide 3"
//           data-carousel-slide-to="2"
//         ></button>
//         <button
//           type="button"
//           className="w-3 h-3 rounded-full"
//           aria-current="false"
//           aria-label="Slide 4"
//           data-carousel-slide-to="3"
//         ></button>
//         <button
//           type="button"
//           className="w-3 h-3 rounded-full"
//           aria-current="false"
//           aria-label="Slide 5"
//           data-carousel-slide-to="4"
//         ></button>
//       </div>
//       <button
//         type="button"
//         className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-prev
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg
//             className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 6 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M5 1 1 5l4 4"
//             />
//           </svg>
//           <span className="sr-only">Previous</span>
//         </span>
//       </button>
//       <button
//         type="button"
//         className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-next
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg
//             className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 6 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m1 9 4-4-4-4"
//             />
//           </svg>
//           <span className="sr-only">Next</span>
//         </span>
//       </button>
//     </div>
//   );
// };

// export default Carousel;


import React, { useState } from "react";

const Carousel = () => {
  const images = [
    "/Carousel_img_5.jpg",
    "/Carousel_img_4.jpg",
    "/Carousel_img_3.jpg",
    "/Carousel_img_2.jpg",
    "/Carousel_img_1.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="relative w-full">
      <div className="relative h-56 overflow-hidden md:h-65">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className={`absolute block w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
          ❮
        </span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
          ❯
        </span>
      </button>
    </div>
  );
};

export default Carousel;

