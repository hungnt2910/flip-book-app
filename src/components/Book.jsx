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
    "https://firebasestorage.googleapis.com/v0/b/swp391-milkmartsystem.appspot.com/o/MLN%2Fpage1.jpg?alt=media&token=01fea9ee-0776-4ede-9c87-06ccddce3a23",
    "https://firebasestorage.googleapis.com/v0/b/swp391-milkmartsystem.appspot.com/o/MLN%2Fpage2.jpg?alt=media&token=81da009f-1bd6-4e17-a868-dca00d160a87",
    "https://firebasestorage.googleapis.com/v0/b/swp391-milkmartsystem.appspot.com/o/MLN%2Fpage3.jpg?alt=media&token=69bd2a1c-8901-40f8-b2e6-23c6f9cc2870",
    "https://firebasestorage.googleapis.com/v0/b/swp391-milkmartsystem.appspot.com/o/MLN%2Fpage4.jpg?alt=media&token=8005c897-f6a3-4363-b9a8-5335d911d3f1",
    "https://firebasestorage.googleapis.com/v0/b/swp391-milkmartsystem.appspot.com/o/MLN%2Fpage5.jpg?alt=media&token=d7332c55-004a-4f90-a906-7d4bd42e646f",
    "https://firebasestorage.googleapis.com/v0/b/swp391-milkmartsystem.appspot.com/o/MLN%2Fpage6.jpg?alt=media&token=e446432a-071c-4a3e-9207-0906b037e47f",
    "https://firebasestorage.googleapis.com/v0/b/swp391-milkmartsystem.appspot.com/o/MLN%2Fpage7.jpg?alt=media&token=8a3d8f1a-684a-42b5-87b9-552975e23769",
    "https://firebasestorage.googleapis.com/v0/b/swp391-milkmartsystem.appspot.com/o/MLN%2Fpage8.jpg?alt=media&token=44828a73-5543-4d1e-882b-a8966eced227",
    "https://firebasestorage.googleapis.com/v0/b/swp391-milkmartsystem.appspot.com/o/MLN%2Fpage9.jpg?alt=media&token=7ebb3264-c29e-4d46-a0cb-4c6006f06f68",
    "https://firebasestorage.googleapis.com/v0/b/swp391-milkmartsystem.appspot.com/o/MLN%2Fpage10.jpg?alt=media&token=786d7cff-d4cb-4f92-98c2-25aad899b9ee",
    "https://firebasestorage.googleapis.com/v0/b/swp391-milkmartsystem.appspot.com/o/MLN%2Fpage11.jpg?alt=media&token=9ef27ccf-9465-40c2-8b20-b1fdac619d2f"
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
