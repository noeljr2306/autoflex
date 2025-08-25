import React from "react";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="flex-1 padding-x xl:pt-32 pt-24">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
        </div>

        <h1 className="hero_title">
          Find, book, rent a car—quick and super{" "}
          <span className="curved">easy!</span>
        </h1>

        <p className="hero_subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <button
          className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold mt-12 text-lg"
        >
          Featured Cars
        </button>
      </div>
      <div className="hero_image-container">
        <div className="hero_image">
          <img
            src="/hero.png"
            alt="hero"
            className="w-auto xl:h-[720px] object-contain"
          />
        </div>
        <div className="hero_image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
