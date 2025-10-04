import React, { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import page1 from "../../public/page1.jpg"

function Book() {
  const [dimensions, setDimensions] = useState({ width: 700, height: 600 });

  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      let bookWidth, bookHeight;

      if (screenWidth < 640) {
        // mobile
        bookWidth = Math.min(screenWidth * 0.9, 350);
        bookHeight = Math.min(screenHeight * 0.6, 450);
      } else if (screenWidth < 768) {
        // tablet
        bookWidth = Math.min(screenWidth * 0.8, 500);
        bookHeight = Math.min(screenHeight * 0.7, 550);
      } else if (screenWidth < 1024) {
        // small desktop
        bookWidth = Math.min(screenWidth * 0.7, 600);
        bookHeight = Math.min(screenHeight * 0.75, 600);
      } else {
        // large desktop
        bookWidth = 700;
        bookHeight = 600;
      }

      setDimensions({ width: bookWidth, height: bookHeight });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // 👇 Replace your text pages with an array of image URLs
  const pageImages = [
    "../../public/page1.jpg",
    "../../public/page2.jpg",
    "../../public/page3.jpg",
    "../../public/page4.jpg",
    "../../public/page5.jpg",
    "../../public/page6.jpg",
    "../../public/page7.jpg",
    "../../public/page8.jpg",
    "../../public/page9.jpg",
    "../../public/page10.jpg",
    "../../public/page11.jpg"
    // ... add as many as you want
  ];

  return (
    <div className="flex justify-center items-center w-full h-full p-4">
      <HTMLFlipBook
        width={dimensions.width}
        height={dimensions.height}
        maxShadowOpacity={0.5}
        drawShadow={true}
        showCover={true}
        size="stretch"
        minWidth={300}
        maxWidth={800}
        minHeight={400}
        maxHeight={700}
        className="shadow-2xl"
      >
        {pageImages.map((src, index) => (
          <div key={index} className=" bg-white w-full h-full">
            <img
              src={src}
              alt={`Page ${index + 1}`}
              className="w-full h-full object-fixed"
            />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}

export default Book;
