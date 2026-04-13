import React from "react";
import { motion } from "framer-motion";

const CompanyStats = () => {
  const stats = [
    { label: "Rides Completed", value: "5,000+" },
    { label: "Years Experience", value: "10+" },
    { label: "Customer Satisfaction", value: "99.98%" },
    { label: "Hours of Service", value: "24h" },
  ];

  const TaxiRow = ({ offset = false }) => (
    <div
      className={`flex w-full h-[16px] md:h-[18px] ${
        offset ? "ml-[-25px] md:ml-[-30px]" : ""
      }`}
    >
      {Array(200)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`min-w-[25px] md:min-w-[30px] h-full ${
              i % 2 === 0 ? "bg-[#cbd5e1]" : "bg-black"
            }`}
          />
        ))}
    </div>
  );

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="relative w-full bg-black flex flex-col overflow-hidden">
        <motion.div
          className="flex flex-col w-[400%]"
          animate={{ x: [0, -150] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <TaxiRow />
          <TaxiRow offset={true} />
        </motion.div>
      </div>

      <div className="h-8 md:h-10 w-full bg-white"></div>

      <div className="relative w-full bg-[#001C3D] py-12 md:py-16 flex items-center justify-center overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg
            viewBox="0 0 1200 400"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,200 C300,150 400,250 600,200 C800,150 900,250 1200,200"
              fill="transparent"
              stroke="#cbd5e1"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 text-center">
            {stats.map((item, index) => (
              <div key={index} className="flex flex-col items-center group">
                <h3 className="text-[#cbd5e1] text-4xl md:text-5xl lg:text-7xl font-black mb-2 leading-none tracking-tighter transition-transform duration-300 group-hover:scale-110">
                  {item.value}
                </h3>

                <p className="text-slate-400 font-bold text-[10px] md:text-xs lg:text-[13px] uppercase tracking-[0.25em] opacity-80">
                  {item.label}
                </p>

                <div className="w-8 h-[2px] bg-[#bdc3c7] mt-4 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
