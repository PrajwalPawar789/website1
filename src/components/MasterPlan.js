import React from "react";
import aboutImage from "../images/Masterplan.webp";

const Masterplan = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center">
      {/* Centered Heading */}
      <h1
        className="text-center font-bold mb-8"
        style={{
          color: "#06a34e",
          fontSize: "30px",
          fontFamily: "Inter, sans-serif",
          marginTop: "50px", // Moves the heading lower on the page
        }}
      >
        Kolte Patil CANVAS - Master Plan
      </h1>

      {/* Full Background Image */}
      <div className="relative h-full w-full">
        <div className="absolute inset-0 bg-cover bg-center">
          <img
            src={aboutImage}
            alt="About Us"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Padding or Margin Below Heading */}
      <div className="mt-8"></div> {/* Adds margin below the image */}
    </div>
  );
};

export default Masterplan;
