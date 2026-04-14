import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Calendar, Clock } from "lucide-react";
import {
  LuUser,
  LuMail,
  LuPhone,
  LuMapPin,
  LuCalendar,
  LuClock,
  LuUsers,
  LuWallet,
  LuPhoneCall,
  LuBadgeCheck,
  LuSend,
  LuChevronDown,
} from "react-icons/lu";
import Form from "./Form";
// Assets
import golfImage from "../assets/images/golf.jpg";
import premiumComfortImg from "../assets/images/mengolf.png";
import BookARideSection from "./BookARideSection";

const ContactHero = ({ setActivePage }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Brand Colors
  const brandBlue = "#002147";
  const brandLight = "#003a7d";

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full font-sans antialiased overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <div
        className="relative min-h-[80vh] md:h-[650px] flex items-center bg-black py-20 md:py-0"
        style={{
          backgroundImage: isMobile
            ? `linear-gradient(to bottom, rgba(0,33,71,0.9) 30%, rgba(0,33,71,0.6) 100%), url(${golfImage})`
            : `linear-gradient(to right, rgba(0,33,71,0.95) 20%, rgba(0,33,71,0.4) 100%), url(${golfImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1300px] w-full mx-auto px-6 mt-10 md:mt-24">
          <div className="flex items-center gap-2 text-white/90 mb-4 text-[13px] md:text-[14px] font-medium">
            <MapPin size={16} className="text-blue-300" /> St Andrews, Scotland
          </div>

          <div className="max-w-2xl">
            <h2
              className="text-white font-black leading-[1.1] tracking-tighter text-5xl md:text-8xl mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Contact Us
            </h2>
            <p className="text-white/80 text-[16px] md:text-[18px] leading-relaxed mb-10 font-medium">
              Ready to book your ride? Fill out the form below or give us a
              call. <br className="hidden md:block" />
              We're here to help you get where you need to go, comfortably and
              on time.
            </p>

            <div className="cursor-pointer flex flex-col sm:flex-row gap-6 md:gap-10">
              <div
                onClick={() => window.location.href = "tel:+447999435333"}
                className="cursor-pointer flex flex-col sm:flex-row gap-6 md:gap-10"
              >
                <div className="flex items-center gap-4 group">
                  <div
                    style={{
                      background: `linear-gradient(135deg, ${brandLight}, ${brandBlue})`,
                    }}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110"
                  >
                    <Phone size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-0.5">
                      Call Us
                    </p>
                    <p
                      className="text-white text-[16px] md:text-[19px] font-bold"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      +447999435333
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div
                  style={{
                    background: `linear-gradient(135deg, ${brandLight}, ${brandBlue})`,
                  }}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110"
                >
                  <Mail size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-0.5">
                    Email Us
                  </p>
                  <p
                    className="text-white text-[16px] md:text-[19px] font-bold"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    standrews479@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. COMPLETE BOOKING FORM SECTION */}
      <section className="bg-white py-12 md:py-16 px-4 w-full">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-8 md:mb-10 text-left">
            <div className="flex items-center gap-2 mb-2">
              <div
                style={{ backgroundColor: brandBlue }}
                className="w-6 h-[2px]"
              ></div>
              <span
                style={{ color: brandBlue }}
                className="font-bold uppercase tracking-wider text-[11px]"
              >
                Secure a Taxi
              </span>
            </div>
            <h2
              style={{ color: brandBlue }}
              className="text-2xl md:text-3xl font-extrabold tracking-tight"
            >
              Book Your Ride Today
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-white border border-gray-100 rounded-xl p-5 md:p-7 shadow-xl shadow-blue-900/5">
              <Form></Form>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-xl overflow-hidden h-[250px] md:h-[380px] shadow-2xl">
                <img
                  src={premiumComfortImg}
                  alt="Premium"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002147] to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-1.5">Premium Comfort</h4>
                  <div className="flex items-center gap-1.5 text-blue-300 font-bold text-[12px]">
                    <LuBadgeCheck size={16} /> 5-Star Rated Service
                  </div>
                </div>
              </div>
              <div className="border border-gray-100 rounded-xl p-6 md:p-7 shadow-lg bg-white text-center">
                <LuPhoneCall size={30} className="mx-auto mb-3 text-blue-900" />
                <h4
                  style={{ color: brandBlue }}
                  className="text-lg font-bold mb-4"
                >
                  Need Fast Assistance?
                </h4>
                <a
                  href="tel:07862006604"
                  style={{
                    background: `linear-gradient(135deg, ${brandBlue}, ${brandLight})`,
                  }}
                  className="block w-full text-white font-bold py-4 rounded-md shadow-md"
                >
                  Call +447999435333
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookARideSection></BookARideSection>
      <footer
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "80px 0 40px 0",
          width: "100%",
          position: "relative",
          display: "block",
          zIndex: 50,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "0 20px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              marginBottom: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2
              className="italic"
              style={{
                color: "#fff",
                margin: "10px 0 0 0",
                fontSize: "28px",
                fontWeight: "900",
                letterSpacing: "1px",
              }}
            >
              JET <span style={{ color: "#fff" }}>TAXI</span>
            </h2>
            <p
              style={{
                color: "#94a3b8",
                margin: "-5px 0 0 0",
                fontSize: "11px",
                fontWeight: "800",
                letterSpacing: "3px",
              }}
            >
              ST ANDREWS
            </p>
          </div>

          <p
            style={{
              maxWidth: "720px",
              margin: "0 auto 40px auto",
              color: "#888",
              lineHeight: "1.8",
              fontSize: "16px",
            }}
          >
            Professional taxi service in St Andrews, Scotland. Offering reliable
            airport transfers, local taxi services, corporate travel, and
            long-distance journeys across Fife and beyond.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "25px",
              marginBottom: "45px",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#1DA1F2">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#0077B5">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <radialGradient id="rg" r="150%" cx="30%" cy="107%">
                <stop stopColor="#fdf497" offset="0%" />
                <stop stopColor="#fd5949" offset="45%" />
                <stop stopColor="#d6249f" offset="60%" />
                <stop stopColor="#285AEB" offset="90%" />
              </radialGradient>
              <path
                fill="url(#rg)"
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </div>

          <div style={{ marginBottom: "50px" }}>
            <span
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "900",
                letterSpacing: "2px",
                marginBottom: "30px",
                color: "#fff",
              }}
            >
              WE ACCEPT
            </span>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "8px 15px",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg width="45" height="25" viewBox="0 0 24 24" fill="#1434CB">
                  <path d="M13.9 11h-1.4l-1 4.3c-.1.3-.3.5-.6.5h-1.9l2.2-8.3c.1-.4.4-.6.8-.6h2.2l1.3 8.9h-2.1l-.5-4.8zm-11.7.3l.1-.6c.2-1 .9-1.8 1.9-1.8h3.3l.1.5-3.3.1c-.5 0-.8.3-.9.7l-.1.6 4.3.1.1.5-5.5.1v-.1zm15.4 3.5h-1.7l-1-4.3c-.1-.3-.3-.5-.6-.5h-1.9l2.2-8.3c.1-.4.4-.6.8-.6h2.2l1.3 8.9h-2.1l-.5-4.8z" />
                </svg>
              </div>

              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "8px 15px",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg width="45" height="25" viewBox="0 0 24 24">
                  <circle
                    cx="8"
                    cy="12"
                    r="7"
                    fill="#EB001B"
                    fillOpacity="0.8"
                  />
                  <circle
                    cx="16"
                    cy="12"
                    r="7"
                    fill="#F79E1B"
                    fillOpacity="0.8"
                  />
                  <path
                    d="M12 17.5c1.7 0 3.3-.7 4.4-1.8-1.1-1.1-1.1-2.9 0-4-1.1-1.1-2.7-1.8-4.4-1.8s-3.3.7-4.4 1.8c1.1 1.1 1.1 2.9 0 4 1.1 1.1 2.7 1.8 4.4 1.8z"
                    fill="#FF5F00"
                  />
                </svg>
              </div>

              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "8px 15px",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg width="45" height="25" viewBox="0 0 24 24" fill="#000">
                  <path d="M17.5 13c-.01-2.1 1.7-3.1 1.8-3.2-1-1.4-2.4-1.6-3-1.6-1.3-.1-2.6.8-3.2.8-.7 0-1.7-.7-2.8-.7-1.4.02-2.8.8-3.5 2.1-1.5 2.6-.4 6.4 1 8.5.7 1 1.5 2.1 2.6 2.1s1.4-.7 2.7-.7 1.6.7 2.7.7c1.1 0 1.8-.9 2.5-2 .8-1.2 1.1-2.3 1.1-2.4-.02-.02-2.1-.8-2.1-3.2zm-2.8-6.9c.6-.7 1-1.7.9-2.7-1 0-1.9.5-2.5 1.2-.6.7-1 1.7-.9 2.6 1 .1 1.9-.4 2.5-1.1z" />
                </svg>
              </div>

              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "8px 15px",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg width="45" height="25" viewBox="0 0 48 48">
                  <path
                    fill="#4285F4"
                    d="M45.1 24.5c0-1.5-.1-3-.4-4.4H24.5v8.4h11.6c-.5 2.7-2 5-4.3 6.5v5.4h6.9c4-3.7 6.4-9.2 6.4-15.9z"
                  />
                  <path
                    fill="#34A853"
                    d="M24.5 45.5c5.8 0 10.7-1.9 14.3-5.2l-6.9-5.4c-1.9 1.3-4.4 2.1-7.4 2.1-5.7 0-10.5-3.8-12.2-9H5.2v5.5c3.5 7 10.7 12 19.3 12z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M12.3 28c-.4-1.3-.7-2.7-.7-4s.3-2.7.7-4V14.5H5.2c-1.4 2.8-2.2 5.9-2.2 9.2s.8 6.4 2.2 9.2l7.1-5.7z"
                  />
                  <path
                    fill="#EA4335"
                    d="M24.5 11.4c3.1 0 6 1.1 8.2 3.2l6.2-6.2C35.2 5 30.3 3 24.5 3 15.9 3 8.7 8 5.2 15l7.1 5.5c1.7-5.1 6.5-9.1 12.2-9.1z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div
            style={{
              fontSize: "13px",
              color: "#555",
              borderTop: "1px solid #1a1a1a",
              paddingTop: "40px",
              lineHeight: "2",
            }}
          >
            <p style={{ margin: "0" }}>
              © 2025 Jet Taxi St Andrews. All rights reserved.
            </p>
            <p style={{ margin: "0" }}>
              St Andrews Cabs LTD trading as Jet Taxi St Andrews | Company
              Number: SC863199
            </p>
            <p style={{ margin: "10px 0 0 0" }}>
              Developed by RR Apps Pty Ltd.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactHero;
