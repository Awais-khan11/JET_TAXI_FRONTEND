import React from "react";
import { MapPin, Phone, Navigation } from "lucide-react";

const Reviews = ({ setActivePage }) => {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2222.123456789!2d-2.8023456789!3d56.3412345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48865860d5c07743%3A0x89f6d499426f343c!2sBell%20St%2C%20St%20Andrews%20KY16%209UR%2C%20UK!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s";

  return (
    /* h-screen aur overflow-y-auto zaroori hai taake mobile par scroll chal sake */
    <div className="w-full h-screen bg-[#003366] flex flex-col font-sans overflow-y-auto md:overflow-hidden">
      {/* 1. Heading - Mobile par thoda kam padding, Desktop par zyada */}
      <div className="w-full pt-[90px] md:pt-[110px] pb-4 px-6 md:px-10 flex items-center gap-3"></div>

      {/* 2. Main Container - Mobile par auto height, Desktop par fixed height */}
      <div className="w-full flex flex-col md:flex-row flex-grow px-6 md:px-10 pb-10 md:pb-8 gap-6 h-auto md:h-[calc(100vh-180px)]">
        {/* Left Side: Map - Mobile par fix height 300px, Desktop par flex height */}
        <div className="w-full h-[300px] md:h-full md:flex-[1.8] relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl shrink-0">
          <iframe
            src={mapUrl}
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right Side: Info Card */}
        <div className="w-full md:flex-[1] flex shrink-0">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 text-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl w-full flex flex-col justify-center relative overflow-hidden">
            <div className="relative z-10 text-center md:text-left">
              <h3 className="font-black text-xl md:text-2xl mb-1">
                St Andrews Taxi
              </h3>
              <p className="text-blue-100/70 mb-5 text-sm">
                St Andrews, Scotland
                <br />
                <span className="bg-yellow-400 text-[#003366] px-3 py-1 rounded-md font-black text-[10px] mt-2 inline-block">
                  POSTAL CODE: KY16 9UR
                </span>
              </p>

              {/* Buttons Grid */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+447999435333"
                  className="flex flex-col items-center justify-center bg-white text-[#003366] py-4 md:py-3 rounded-2xl active:scale-95 transition-all shadow-lg"
                >
                  <Phone size={20} className="mb-1" />
                  <span className="font-bold text-[10px] md:text-[9px] uppercase">
                    Call Now
                  </span>
                </a>

                <a
                  href="https://maps.app.goo.gl/YourLink"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center bg-yellow-400 text-[#003366] py-4 md:py-3 rounded-2xl active:scale-95 transition-all shadow-lg"
                >
                  <Navigation size={20} className="mb-1" />
                  <span className="font-bold text-[10px] md:text-[9px] uppercase">
                    Directions
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
