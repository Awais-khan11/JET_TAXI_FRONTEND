import React from "react";
import { LuCalendarCheck, LuBadgeCheck, LuNavigation } from "react-icons/lu";

const HowItWorks = ({ setActivePage }) => {
  const steps = [
    {
      id: 1,
      icon: <LuCalendarCheck size={40} className="text-[#002B5B]" />,
      title: "Book your ride",
      description:
        "Call us or use the online form with your pickup location and time.",
    },
    {
      id: 2,
      icon: <LuBadgeCheck size={40} className="text-[#002B5B]" />,
      title: "Get instant confirmation",
      description:
        "Receive quick confirmation by SMS or phone with driver details.",
    },
    {
      id: 3,
      icon: <LuNavigation size={40} className="text-[#002B5B]" />,
      title: "Enjoy the journey",
      description:
        "Your professional driver will arrive on time in a clean, modern vehicle.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 md:py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M0,500 C200,400 300,600 500,500 C700,400 800,600 1000,500"
            stroke="#bdc3c7"
            fill="transparent"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <div className="w-8 md:w-10 h-[3px] bg-gradient-to-r from-[#bdc3c7] to-[#7f8c8d]"></div>
            <span className="text-[#bdc3c7] font-bold uppercase tracking-[0.2em] text-[10px] md:text-sm">
              How it works
            </span>
            <div className="w-8 md:w-10 h-[3px] bg-gradient-to-r from-[#7f8c8d] to-[#bdc3c7]"></div>
          </div>

          {/* Responsive Font Size: text-3xl on mobile, text-5xl on desktop */}
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight leading-[1.2]">
            Simple steps to ride <br className="md:hidden" /> with Jet Taxi
          </h2>
          <p className="text-gray-400 text-sm md:text-lg max-w-xl mx-auto md:mx-0">
            Book in minutes, get confirmation fast, and travel in comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-16">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-6 md:mb-8">
                {/* Responsive Circle Size */}
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#bdc3c7] via-[#f8f9fa] to-[#94a3b8] rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-lg shadow-white/5">
                  {/* Icon scales for mobile */}
                  <div className="scale-75 md:scale-100">{step.icon}</div>
                </div>
                <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-8 h-8 md:w-10 md:h-10 bg-black border-2 border-[#bdc3c7] rounded-full flex items-center justify-center font-bold text-[#bdc3c7] text-sm md:text-base">
                  {step.id}
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-[280px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setActivePage("contact")}
            className="w-full md:w-auto cursor-pointer bg-gradient-to-r from-[#002B5B] to-[#001C3D] text-white font-black py-4 px-10 rounded-lg hover:from-white hover:to-[#bdc3c7] hover:text-black transition-all duration-300 shadow-xl uppercase tracking-widest text-[11px]"
          >
            Book your taxi now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
