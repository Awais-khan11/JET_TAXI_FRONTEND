import { FaCarSide, FaPhoneAlt, FaStar, FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import imageSlide from "../ImageSlides";

export const BackGroundSlider = ({ setActivePage }) => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentState((prev) =>
        prev === imageSlide.length - 1 ? 0 : prev + 1,
      );
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentState]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
      {imageSlide.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentState
              ? "opacity-70 scale-105"
              : "opacity-0 scale-100"
          }`}
          style={{ backgroundImage: `url(${slide.url})` }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/60 z-10" />

      <div className="relative z-50 flex flex-col justify-center h-full w-full px-6 sm:px-12 text-white pt-20 sm:pt-32 max-w-[1200px] mx-auto overflow-x-hidden">
        <h1
          className="text-[28px] sm:text-[50px] lg:text-[70px] leading-[1.1] mb-6 max-w-full break-words"
          style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 800,
            letterSpacing: "-1px",
            color: "#ffffff",
          }}
        >
          St Andrews' Fastest & <br className="hidden sm:block" />
          Finest Taxi Service.
        </h1>

        <p className="hidden sm:block text-[16px] text-white/70 max-w-[600px] mb-8 font-medium leading-relaxed border-l-2 border-[#002B5B] pl-4">
          Proudly serving the heart of St Andrews, offering dependable transport
          for residents, students, businesses, and visitors alike.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => setActivePage("contact")}
            className="cursor-pointer w-full sm:w-auto flex items-center justify-center gap-3 bg-[#002B5B] text-white px-8 py-4 rounded-[4px] font-black uppercase text-[11px] tracking-widest hover:bg-[#001C3D] transition-all shadow-xl active:scale-95 border border-[#002B5B]"
          >
            <FaCarSide size={20} /> Book a Ride
          </button>

          <button
            onClick={() => setActivePage("contact")}
            className="cursor-pointer w-full sm:w-auto flex items-center justify-center gap-3 border border-white/30 bg-white/5 backdrop-blur-md px-8 py-4 rounded-[4px] font-black uppercase text-[11px] tracking-widest hover:bg-white hover:text-black transition-all active:scale-95"
          >
            <FaPhoneAlt size={14} /> I Need a Ride Now
          </button>
        </div>

        <div className="mt-10 sm:mt-12 flex items-center gap-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-black italic">
                5.0
              </span>
              <div className="flex text-[#94a3b8] gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} fill="currentColor" color="yellow" />
                ))}
              </div>
            </div>
            <p className="text-[10px] uppercase tracking-widest font-bold text-white/40 mt-1">
              Trusted by hundreds
            </p>
          </div>
        </div>
      </div>

    
    </div>
  );
};
