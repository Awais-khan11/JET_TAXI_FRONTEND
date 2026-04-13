import React, { useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import {
  LuUser,
  LuMail,
  LuPhone,
  LuMapPin,
  LuCalendar,
  LuClock,
  LuUsers,
  LuWallet,
  LuChevronDown,
  LuSend,
  LuLoader
} from "react-icons/lu";
const Form = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    route: "",
    date: "",
    time: "",
    passengers: 1,
    paymentMethod: "pickup"
  });

  const routes = [
    // Airport Transfers
    { label: "St Andrews → Edinburgh Airport", value: "st-andrews-edinburgh" },
    { label: "Edinburgh Airport → St Andrews", value: "edinburgh-st-andrews" },
    { label: "St Andrews → Glasgow Airport", value: "st-andrews-glasgow" },
    { label: "Glasgow Airport → St Andrews", value: "glasgow-st-andrews" },

    // Local Routes
    { label: "Crail → St Andrews", value: "crail-st-andrews" },
    { label: "St Andrews → Elie", value: "st-andrews-elie" },
    { label: "Elie → St Andrews", value: "elie-st-andrews" }
  ];
  const [loading, setLoading] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [codeInput, setCodeInput] = useState("");
  const [verifying, setVerifying] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  console.log(import.meta.env.VITE_BACKEND_URL)

  const BaseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${BaseUrl}/api/send-code`,
        formData
      );
      console.log(res.data);
      if (res.data.status === "ok") {
        setCodeInput("");
        setShowCodeModal(true);
      } else {
       toast.error(res.data.message);
      }

    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
       toast.error("Server error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  const handleVerifyCode = async () => {
    try {
      setVerifying(true);
      const res = await axios.post(
        "https://jet-taxi-backend.vercel.app/api/confirm-booking",
        { email: formData.email, code: codeInput }
      );

      if (res.data.status === "ok") {
       toast.success("Booking confirmed! We will contact you soon.");
        setCodeInput("");
        setShowCodeModal(false);
      } else {
       toast.error("Invalid Code Try Again!");
      }

    } catch (error) {
      console.error(error);

      if (error.response) {

          toast.error(error.response.data.message);
      } else {
        toast.error("Server error. Please try again.");
      }

    } finally {
      setVerifying(false);
    }
  };

  return (
    <div>
      <form className="space-y-5" onSubmit={handleSubmit} id="book-ride-form">

        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-[16px] font-bold text-[#002B5B]">
            <LuUser className="text-[#bdc3c7]" size={18} /> Personal
            Information
          </h3>

          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-md text-[14px] outline-none focus:border-[#bdc3c7] transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-gray-700 flex items-center gap-1.5">
                <LuMail size={14} className="text-gray-400" /> Email
                Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-md text-[14px] outline-none focus:border-[#bdc3c7]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-gray-700 flex items-center gap-1.5">
                <LuPhone size={14} className="text-gray-400" /> Phone
                Number
              </label>
              <div className="flex border border-gray-200 rounded-md overflow-hidden focus-within:border-[#bdc3c7]">
                <div className="bg-gray-100 px-2.5 flex items-center gap-1 border-r border-gray-200 cursor-pointer">
                  <img
                    src="https://flagcdn.com/w20/gb.png"
                    alt="UK"
                    className="w-4 opacity-80"
                  />
                  <LuChevronDown size={12} className="text-gray-500" />
                </div>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full px-4 py-3 text-[14px] outline-none bg-gray-50/50"
                />
              </div>
            </div>
          </div>
        </div>


        {/* Trip Details */}
        <div className="space-y-4 pt-2">
          <h3 className="flex items-center gap-2 text-[16px] font-bold text-[#002B5B]">
            <LuMapPin className="text-[#bdc3c7]" size={18} /> Trip Details
          </h3>

          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-gray-700">
              Select Route
            </label>
            <div className="relative">
              <select
                name="route"
                value={formData.route}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-md text-[14px] outline-none appearance-none focus:border-[#bdc3c7] 
  ${formData.route === "" ? "text-gray-400" : "text-black"}`}
              >
                <option value="" disabled>
                  Choose your route
                </option>

                {routes.map((route, index) => (
                  <option key={index} value={route.value}>
                    {route.label}
                  </option>
                ))}
              </select>
              <LuChevronDown
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                size={16}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-gray-700 flex items-center gap-1.5">
                <LuCalendar size={14} className="text-gray-400" /> Pickup
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="April 4th, 2026"
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-md text-[14px] outline-none focus:border-[#bdc3c7]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-gray-700 flex items-center gap-1.5">
                <LuClock size={14} className="text-gray-400" /> Pickup
                Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                placeholder="09 : 00 AM"
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-md text-[14px] outline-none focus:border-[#bdc3c7]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-gray-700 flex items-center gap-1.5">
              <LuUsers size={14} className="text-gray-400" /> Number of
              Passengers
            </label>
            <input
              type="number"
              name="passengers"
              value={formData.passengers}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  passengers: Math.max(1, parseInt(e.target.value) || 1)
                }))
              }
            />
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <h3 className="flex items-center gap-2 text-[16px] font-bold text-[#002B5B]">
            <LuWallet className="text-[#bdc3c7]" size={18} /> Payment
            Option
          </h3>

          <div
            className={`border-[1.5px] rounded-lg p-3 md:p-4 flex items-center gap-3 transition-all ${formData.paymentMethod === "pickup"
              ? "border-[#002B5B] bg-[#002B5B]/5"
              : "border-gray-200"
              }`}
          >
            <div
              className={`shrink-0 w-4 h-4 rounded-full border ${formData.paymentMethod === "pickup"
                ? "border-4 border-[#002B5B] bg-white"
                : "border-gray-300"
                }`}
            ></div>

            <div className="min-w-0">
              <p className="font-bold text-[13px] md:text-[14px] text-gray-900 truncate">
                Pay on Pickup
              </p>
              <p className="text-[11px] md:text-[12px] text-gray-500 truncate">
                Pay the driver when they arrive
              </p>
            </div>
          </div>

        </div>

        <button
          type="submit"
          disabled={loading}
          className={`cursor-pointer w-full bg-[#002B5B] text-white font-extrabold py-4 rounded-md flex items-center justify-center gap-2 
    transition-all text-[12px] md:text-[13px] uppercase tracking-widest shadow-lg active:scale-[0.98]
    ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-[#bdc3c7] hover:text-[#002B5B]"}`}
        >
          {loading ? "Submitting This can take a moment..." : <><LuSend size={15} /> Submit Booking Request</>}
        </button>
      </form>
      {showCodeModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white p-6 rounded-md w-80 flex flex-col gap-4">
            <h2 className="text-lg font-bold">Enter Verification Code</h2>
            <input
              type="text"
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value)}
              placeholder="Enter code sent to your email"
              className="border px-3 py-2 rounded-md w-full"
            />
            <button
              type="button"
              onClick={handleVerifyCode}
              disabled={verifying}
              className="bg-[#002B5B] text-white py-2 rounded-md flex items-center justify-center gap-2  transition-all duration-200"
            >
              {verifying ? (
                <>
                  <LuLoader className="animate-spin" size={16} />
                  verifying wait a moment...
                </>
              ) : (
                "Verify Code"
              )}
            </button>
            <button
              type="button"
              onClick={() => {
                setShowCodeModal(false);
                setCodeInput("");
              }}
              className="text-gray-500 py-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Form