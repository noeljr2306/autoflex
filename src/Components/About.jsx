import React, { useState, useEffect } from "react";
import {
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaShieldAlt,
} from "react-icons/fa";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    cars: 0,
    customers: 0,
    locations: 0,
    years: 0,
  });

  useEffect(() => {
    setIsVisible(true);
    const animateCounters = () => {
      const targets = { cars: 500, customers: 15000, locations: 50, years: 12 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setCounters({
          cars: Math.floor(targets.cars * progress),
          customers: Math.floor(targets.customers * progress),
          locations: Math.floor(targets.locations * progress),
          years: Math.floor(targets.years * progress),
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepTime);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { label: "Premium Cars", value: counters.cars, suffix: "+" },
    { label: "Happy Customers", value: counters.customers, suffix: "+" },
    { label: "Locations", value: counters.locations, suffix: "+" },
    { label: "Years Experience", value: counters.years, suffix: "" },
  ];
  const features = [
    {
      icon: <FaCheckCircle className="w-8 h-8" />,
      title: "Best Prices",
      description:
        "Competitive rates with no hidden fees. Get the best value for your money.",
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "24/7 Support",
      description:
        "Round-the-clock customer service to assist you whenever you need help.",
    },
    {
      icon: <FaMapMarkerAlt className="w-8 h-8" />,
      title: "Multiple Locations",
      description:
        "Convenient pickup and drop-off locations across major cities.",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Fully Insured",
      description:
        "All our vehicles come with comprehensive insurance coverage.",
    },
  ];
  return (
    <section className="padding-x padding-y bg-gray-50" id="about">
      <div
        className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h1 className="font-bold text-zinc-600 text-4xl mb-6">
          About <span className="text-blue-600">AutoFlex</span>
        </h1>
        <p className="text-xl font-light max-w-2xl mx-auto">
          Your trusted partner for premium car rentals. We provide exceptional
          vehicles and outstanding service to make every journey memorable.
        </p>
      </div>

      <div
        className={`mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value.toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-zinc-700 mb-6">
            Why Choose AutoFlex?
          </h2>
          <p className="text-gray-600 mb-6">
            With over a decade of experience in the car rental industry, we've
            built our reputation on providing reliable, affordable, and
            convenient transportation solutions.
          </p>
          <p className="text-gray-600 mb-8">
            From compact city cars to luxury SUVs, we offer a diverse range of
            vehicles to meet every need and budget. Our commitment to customer
            satisfaction and transparent pricing has made us the preferred
            choice for thousands of travelers.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-300">
            Learn More About Us
          </button>
        </div>

        <div
          className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop&crop=center"
            alt="Luxury car fleet"
            className="rounded-lg shadow-lg w-full h-80 object-cover"
          />
        </div>
      </div>

      <div
        className={`transform transition-all duration-1000 delay-900 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold text-center text-zinc-700 mb-12">
          What Makes Us Special
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
