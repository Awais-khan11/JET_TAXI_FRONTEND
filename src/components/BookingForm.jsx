import React, { useState } from "react";
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
  LuChevronDown,
  LuSend,
} from "react-icons/lu";
import premiumComfortImg from "../assets/images/mengolf.png";
import Form from "./Form";

const BookingForm = ({ setActivePage }) => {
  
  return (
    <section className="bg-white py-12 px-4 w-full font-sans">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10 text-left">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-[2px] bg-[#bdc3c7]"></div>
            <span className="text-[#7f8c8d] font-bold uppercase tracking-wider text-[11px]">
              Secure a Taxi
            </span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#002B5B] tracking-tight">
            Book Your Ride Today
          </h2>
          <p className="text-gray-500 text-[15px] mt-2 max-w-2xl leading-relaxed font-medium">
            Fill out the form below and we'll confirm your booking within
            minutes. Choose to pay now or later - your convenience is our
            priority.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-white border border-gray-100 rounded-xl p-5 md:p-7 shadow-sm">
            <Form></Form>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-xl overflow-hidden h-[380px] shadow-xl">
              <img
                src={premiumComfortImg}
                alt="Premium Comfort"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001C3D] to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-1.5 uppercase tracking-tight">
                  Premium Comfort
                </h4>
                <p className="text-[13px] opacity-90 mb-3 font-light">
                  Experience luxury travel with our modern fleet.
                </p>
                <div className="flex items-center gap-1.5 text-[#bdc3c7] font-bold text-[12px]">
                  <LuBadgeCheck size={16} /> 5-STAR RATED SERVICE
                </div>
              </div>
            </div>

            <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-7 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md border border-gray-50">
                  <LuPhoneCall className="text-[#002B5B]" size={20} />
                </div>
                <h4 className="text-[17px] font-bold text-[#002B5B]">
                  Immediate Assistance?
                </h4>
              </div>
              <p className="text-gray-500 text-[13px] mb-5 font-medium leading-relaxed">
                Our team is available 24/7 to help with your booking.
              </p>
              <a
                href="tel:07862006604"
                className="block w-full bg-gradient-to-r from-[#bdc3c7] to-[#7f8c8d] text-[#001C3D] text-center font-black py-3.5 rounded-md text-[15px] hover:shadow-lg transition-all"
              >
                CALL 07862 006604
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
