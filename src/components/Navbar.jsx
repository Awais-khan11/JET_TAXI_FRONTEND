import React, { useState, useEffect } from "react";
import { LuCalendarDays } from "react-icons/lu";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = ({ setActivePage, activePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Reviews", id: "reviews" },
    { name: "FAQ", id: "faq" },
    { name: "Contact Us", id: "contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed left-0 w-full flex justify-between items-center px-3 sm:px-10 transition-all duration-500 z-50 ${
          isScrolled
            ? "top-0 py-3 bg-white shadow-xl text-black"
            : "top-0 sm:top-[38px] py-4 bg-transparent border-b border-white/10 text-white"
        }`}
      >
        {/* BACKGROUND SHAPE */}
        <div
          className={`absolute top-0 left-0 h-full bg-[#001C3D] pointer-events-none transition-all duration-700 ease-in-out hidden lg:block z-0 ${
            isScrolled ? "w-[28%] opacity-100" : "w-0 opacity-0"
          }`}
          style={{
            clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
          }}
        ></div>

        {/* LOGO */}
        <div
          className="flex flex-col cursor-pointer relative z-10"
          onClick={() => setActivePage("home")}
        >
          <h1
            className={`text-[20px] sm:text-[28px] font-black italic leading-none tracking-tighter ${isScrolled ? "lg:text-white" : ""}`}
          >
            St andrew taxi
          </h1>
          <span className="text-[20px] sm:text-[10px] font-bold text-[#fff] tracking-[0.3em] uppercase mt-1 ">
            24/7
          </span>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-2 relative z-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              className={`cursor-pointer px-5 py-2 text-[13px] transition-all rounded-[4px] ${
                activePage === link.id
                  ? "bg-[#002B5B] text-white shadow-md"
                  : isScrolled
                    ? "text-gray-800 hover:text-[#002B5B]"
                    : "text-white hover:text-[#94a3b8]"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 sm:gap-4 relative z-10">
          <button
            onClick={() => setActivePage("contact")}
            className={`cursor-pointer hover:bg-[#001C3D] hover:text-white hidden sm:flex items-center gap-2 px-6 py-2.5 text-[11px] font-black uppercase tracking-widest transition-all border rounded-[2px] ${
              isScrolled
                ? "bg-[#002B5B] text-white border-[#002B5B]"
                : "bg-white/10 text-white border-white/30"
            }`}
          >
            <LuCalendarDays size={16} />
            Book a Ride
          </button>

          <button
            onClick={() => setIsOpen(true)}
            className={`cursor-pointer outline-none p-1 transition-colors ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            <HiOutlineMenuAlt3 size={30} />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-[#001C3D]/60 backdrop-blur-sm z-[2000] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {/* SIDEBAR */}
        <div
          className={`absolute right-0 top-0 h-full w-[280px] bg-white transition-transform duration-500 transform flex flex-col shadow-2xl ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* HEADER */}
          <div className="flex justify-between items-center p-5 border-b border-gray-100">
            <div className="flex flex-col">
              <h1 className="text-lg font-black italic text-black leading-none">
                St Andrews Taxi
              </h1>
              <span className="text-[7px] font-bold text-[#002B5B] tracking-widest uppercase mt-0.5">
                ST ANDREWS
              </span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-black transition-colors"
            >
              <HiX size={24} />
            </button>
          </div>

          {/* LINKS */}
          <div className="flex flex-col py-4 flex-grow overflow-y-auto">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActivePage(link.id);
                  setIsOpen(false);
                }}
                className={`cursor-pointer px-6 py-4 text-left text-[13px] font-bold uppercase tracking-wider transition-all flex items-center justify-between ${
                  activePage === link.id
                    ? "text-[#002B5B] bg-blue-50/50 border-r-4 border-[#002B5B]"
                    : "text-gray-600 hover:bg-gray-50 border-r-4 border-transparent"
                }`}
              >
                {link.name}
                {activePage === link.id && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#002B5B]" />
                )}
              </button>
            ))}
          </div>

          {/* FOOTER */}
          <div className="p-6 bg-gray-50 border-t border-gray-100">
            <div className="space-y-4">
              <div>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">
                  Call for Booking
                </p>
                <a
                  href="tel:07862006604"
                  className="text-xl font-black text-black hover:text-[#002B5B] transition-colors"
                >
                  +447999435333
                </a>
              </div>

              <button
                onClick={() => {
                  setActivePage("contact");
                  setIsOpen(false);
                }}
                className="cursor-pointer w-full bg-[#002B5B] text-white hover:bg-[#001C3D] font-bold py-3.5 rounded-lg uppercase text-[11px] tracking-widest shadow-lg transition-all duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
