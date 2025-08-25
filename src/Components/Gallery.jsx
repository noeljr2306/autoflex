import React from "react";
import { popularCars, rentalCars } from "../Constants";
import { FaGasPump } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";

const Gallery = () => {
  return (
    <section className="padding-x padding-y bg-gray-50" id="gallery">
      <div className="mb-12">
        <div className=" items-center mb-6">
          <h2 className="font-extrabold text-zinc-700 text-4xl">
            Popular Cars
          </h2>
          <p className="font-light">The Cars Everyone’s Talking About</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCars.map((car) => (
            <div key={car.id} className="rounded-lg p-6 shadow-sm" style={{ backgroundColor: ` ${car.color}` }}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {car.name}
                  </h3>
                </div>
              </div>

              <div className="mb-6">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>

              <div className="flex justify-between text-gray-500 text-xs mb-4">
                <div className="flex items-center">
                  <FaGasPump className="w-4 h-4 mr-1" />
                  {car.gasoline}
                </div>
                <div className="flex items-center">
                  <GiGearStickPattern className="w-4 h-4 mr-1" />
                  {car.transmission}
                </div>
                <div className="flex items-center">
                  <FaUserFriends className="w-4 h-4 mr-1" />
                  {car.capacity}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <span className="font-bold text-xl text-gray-900">
                    {car.price}
                  </span>
                  <span className="text-gray-500 text-sm">/ day</span>
                </div>
                <button className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-2xl text-sm hover:bg-blue-700 transition-colors">
                  See details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="items-center mb-6">
          <h2 className="font-semibold text-3xl text-gray-600">
            Our available cars
          </h2>
          <p className="font-light">
            Explore Our Current Lineup, Ready to Drive Today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rentalCars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-base text-gray-900">
                    {car.name}
                  </h3>
                  <p className="text-gray-500 text-xs">{car.type}</p>
                </div>
              </div>

              <div className="mb-4">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-24 object-cover rounded"
                />
              </div>

              <div className="flex justify-between text-gray-500 text-xs mb-4">
                <div className="flex items-center">
                  <FaGasPump className="w-4 h-4 mr-1" />
                  {car.gasoline}
                </div>
                <div className="flex items-center">
                  <GiGearStickPattern className="w-4 h-4 mr-1" />
                  {car.transmission}
                </div>
                <div className="flex items-center">
                  <FaUserFriends className="w-4 h-4 mr-1" />
                  {car.capacity}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <span className="font-bold text-base text-gray-900">
                      {car.price}
                    </span>
                    <span className="text-gray-500 text-xs ml-1">/ day</span>
                  </div>
                  {car.originalPrice && (
                    <span className="text-gray-400 text-xs line-through">
                      {car.originalPrice}
                    </span>
                  )}
                </div>
                <button className="bg-blue-600 text-white px-3 py-1.5 rounded text-xs hover:bg-blue-700 transition-colors">
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
