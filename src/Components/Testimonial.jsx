import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../Constants";

const Testimonial = () => {
  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "15+", label: "Cities Worldwide" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <section className="relative py-20 overflow-hidden" id="testimonial">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-600 mb-6 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-xl font-light max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust AutoFlex for their
            premium car rental experience
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-500 text-zinc-100 backdrop-blur-lg rounded-2xl p-6 border border-white/20 cursor-pointer transition-all duration-300 group-hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-blue-500 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-6">
                <FaQuoteLeft className="text-zinc-600 text-3xl group-hover:text-white/60 transition-colors duration-300" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
              </div>

              <p className="text-white text-lg leading-relaxed mb-6 group-hover:text-white/95 transition-colors duration-300">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-white/30 group-hover:ring-white/50 transition-all duration-300"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-blue-200 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white/80 text-sm font-medium">
                    {testimonial.carType}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
