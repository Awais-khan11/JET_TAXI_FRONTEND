import { useState } from "react";
import { LuCalendarDays } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";

import taxiMinivan from "../assets/images/taxi-minivan.png";
import mengolf from "../assets/images/mengolf.png";
import taxiBlackdefault from "../assets/images/taxi-black-default.png";

export const ServiceGrid = ({ setActivePage }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      id: "01",
      title: "Student Transport",
      subTitle: "University of St Andrews",
      hoverText:
        "Special discounted rates for St Andrews University students. Safety and punctuality guaranteed.",
      img: taxiMinivan,
    },
    {
      id: "02",
      title: "Golf Tours",
      subTitle: "St Andrews & Beyond",
      hoverText:
        "Tailored transportation for golf enthusiasts, covering legendary courses and hidden gems.",
      img: mengolf,
    },
    {
      id: "03",
      title: "Group Bookings",
      subTitle: "Events & Families",
      hoverText:
        "Reliable, professional, and comfortable transportation services across St Andrews and Scotland.",
      img: taxiBlackdefault,
    },
    {
      id: "04",
      title: "Corporate Accounts",
      subTitle: "Business Services",
      hoverText:
        "Efficient transport solutions for businesses and VIP guests visiting the town.",
      img: taxiBlackdefault,
    },
    {
      id: "05",
      title: "Local Trips",
      subTitle: "St Andrews & Fife",
      hoverText:
        "Quick and reliable local taxi services for your everyday travel needs.",
      img: taxiMinivan,
    },
    {
      id: "06",
      title: "Airport Transfers",
      subTitle: "Scotland Wide",
      hoverText:
        "Stress-free airport transfers to and from all major Scottish airports.",
      img: mengolf,
    },
  ];

  return (
    <section className="bg-white py-16 px-4 w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={25}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative mb-10"
        >
          {services.map((service, index) => (
            <SwiperSlide key={service.id}>
              <div
                className="relative h-[500px] rounded-[20px] overflow-hidden group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.img})` }}
                ></div>

                {/* Overlays */}
                <div className="absolute inset-0 bg-black/50 z-10 transition-opacity group-hover:opacity-0"></div>
                <div
                  className={`absolute inset-0 z-20 transition-opacity duration-700 ${hoveredIndex === index ? "opacity-100 bg-gradient-to-t from-[#002B5B] via-[#002B5B]/80 to-transparent" : "opacity-0"}`}
                ></div>

                {/* Content */}
                <div className="absolute inset-0 p-8 z-30 flex flex-col justify-end text-white text-center items-center">
                  <span className="absolute top-8 left-8 text-[90px] font-black text-white/10 transition-all">
                    {service.id}
                  </span>

                  <h3 className="text-[30px] font-light leading-tight mb-1">
                    {service.title}
                  </h3>
                  <p className="text-[14px] font-extralight opacity-80 mb-4 text-[#bdc3c7]">
                    {service.subTitle}
                  </p>

                  <div
                    className={`transition-all duration-500 overflow-hidden ${hoveredIndex === index ? "max-h-24 opacity-100 mb-6" : "max-h-0 opacity-0"}`}
                  >
                    <p className="text-[15px] text-white font-light leading-snug max-w-[280px]">
                      {service.hoverText}
                    </p>
                  </div>

                  <button
                    onClick={() => setActivePage("contact")}
                    className="flex items-center gap-2 border border-white/60 px-8 py-2.5 rounded-full font-light uppercase text-[12px] tracking-widest hover:bg-white hover:text-[#002B5B] transition-all"
                  >
                    <LuCalendarDays size={14} /> Book Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination & Description */}
        <div className="mt-8 ">
          <div className="flex gap-2 mb-8 ">
            {services.map((_, i) => (
              <div
                key={i}
                className={`h-[6px] transition-all duration-300 rounded-full ${
                  activeIndex === i
                    ? "w-16 bg-[#002B5B]"
                    : "w-10 bg-[#bdc3c7]/30"
                }`}
              ></div>
            ))}
          </div>

          <p className="text-gray-500 text-[17px] font-light leading-relaxed max-w-3xl border-l-2 border-[#bdc3c7] pl-6">
            Reliable, professional, and comfortable transportation services
            across <br />
            St Andrews and Scotland. Available 24/7 for all your travel needs.
          </p>
        </div>
      </div>
    </section>
  );
};
