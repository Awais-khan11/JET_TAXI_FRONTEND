import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  CheckCircle2,
  Clock,
  Smartphone,
  PoundSterling,
} from "lucide-react";


import taxiMinivan from "../assets/images/taxi-minivan.png";
import mengolf from "../assets/images/mengolf.png";
import taxiBlackdefault from "../assets/images/taxi-black-default.png";

const AboutSection = ({ setActivePage }) => {
  const features = [
    {
      title: "Best Competitive Pricing",
      desc: "Guaranteed unbeatable rates without compromising on quality, comfort, or reliability.",
      
      icon: <PoundSterling className="w-4 h-4 text-[#001C3D]" />,
    },
    {
      title: "Always Punctual",
      desc: "Our commitment to punctuality means you'll never be left waiting.",
      icon: <Clock className="w-4 h-4 text-[#001C3D]" />,
    },
    {
      title: "Easy Booking Process",
      desc: "Reserve your ride effortlessly—online, by phone, or through our app.",
      icon: <Smartphone className="w-4 h-4 text-[#001C3D]" />,
    },
    {
      title: "Customer Satisfaction Guaranteed",
      desc: "Professional drivers, modern fleet, and thousands of happy customers across the region.",
      icon: <CheckCircle2 className="w-4 h-4 text-[#001C3D]" />,
    },
  ];

 
  const TaxiRow = ({ offset = false }) => (
    <div
      className={`flex w-full h-[16px] md:h-[18px] ${
        offset ? "ml-[-25px] md:ml-[-30px]" : ""
      }`}
    >
      {Array(150)
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
    <section className="pt-12 md:pt-16 bg-white overflow-hidden w-full">
  
      <div className="w-full flex flex-col lg:flex-row items-start gap-6 lg:gap-10 mb-16">
       
        <div className="w-full lg:w-[45%] grid grid-cols-2 gap-4">
          <div className="relative h-[480px] md:h-[600px] rounded-r-[40px] overflow-hidden shadow-xl">
            <img
              src={taxiMinivan}
              alt="St Andrews Taxi"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-8 left-6 bg-[#001C3D]/90 p-4 rounded-xl border border-white/10 flex items-center gap-3 shadow-lg">
              <div className="bg-[#cbd5e1] w-10 h-10 rounded-lg flex items-center justify-center text-black">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <polyline points="17 11 19 13 23 9" />
                </svg>
              </div>
              <div>
                <h4 className="text-white text-lg font-bold leading-none">
                  1,000+
                </h4>
                <p className="text-gray-400 text-[9px] uppercase font-bold tracking-widest mt-1">
                  Clients
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-center">
            <div className="h-[220px] md:h-[280px] rounded-[25px] overflow-hidden shadow border">
              <img
                src={mengolf}
                className="w-full h-full object-cover"
                alt="Golf"
              />
            </div>
            <div className="h-[220px] md:h-[280px] rounded-[25px] overflow-hidden shadow border">
              <img
                src={taxiBlackdefault}
                className="w-full h-full object-cover"
                alt="Taxi"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[55%] pl-4 md:pl-6 pr-6 lg:pr-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-8 bg-[#001C3D]"></span>
            <span className="text-[#001C3D] font-bold text-[10px] uppercase tracking-[0.3em]">
              ABOUT St Andrews Taxi 
            </span>
            <span className="h-[2px] w-8 bg-[#001C3D]"></span>
          </div>

          <h2 className="text-[22px] md:text-[32px] lg:text-[42px] font-black text-black leading-[1.1] mb-6 tracking-tight">
            Serving the Home of Golf for Over a Decade
          </h2>

          <p className="text-gray-500 text-[13px] md:text-[15px] mb-8 font-medium leading-[1.6] max-w-2xl">
            Proudly serving St Andrews, Fife, and the surrounding areas, St Andrews Taxi delivers exceptional transport solutions tailored to
            your needs.
          </p>

          <div className="flex flex-col gap-6 mb-10">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-[#f1f5f9] w-9 h-9 rounded-full flex items-center justify-center border shadow-sm shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-black font-bold text-base md:text-lg mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-xs md:text-sm leading-[1.5]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#f9fafb] p-6 rounded-2xl flex items-center gap-4 border border-gray-200 shadow-sm w-full max-w-[550px]">
            <div className="bg-[#001C3D] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white shadow-lg shrink-0">
              <Phone size={28} />
            </div>
            <div>
              <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] mb-1">
                Need a Ride? Call Us Anytime
              </p>
              <h3 className="text-[22px] md:text-[34px] font-black text-[#001C3D] leading-none tracking-tighter">
                +447999435333
              </h3>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-1 italic">
                Available 24/7
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white flex flex-col overflow-hidden">
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
    </section>
  );
};

export default AboutSection;
