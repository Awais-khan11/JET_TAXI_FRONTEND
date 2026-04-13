import React, { useState, useEffect } from "react";
import { Mail, Calendar } from "lucide-react";
import golfImage from "../assets/images/golf.jpg";

const BookARideSection = ({ setActivePage }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="shimmery-booking-section">
      <div className="bg-image-container"></div>

      <div className="content-wrapper">
        <div className="inner-content">
          <h2
            className="heading"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Book a Ride Today
          </h2>

          <p className="description-text">
            Professional taxi service in St Andrews, Scotland. Offering reliable
            airport transfers, local taxi services, corporate travel, and
            long-distance journeys across Fife and beyond. 24/7 service with
            modern, comfortable vehicles.
          </p>

          <div className="btn-group">
            <button
              onClick={() => setActivePage("contact")}
              className="btn-common btn-outline"
            >
              <Mail size={20} /> Contact Us
            </button>

            <button
              onClick={() => setActivePage("contact", "book-ride-form")}
              className="btn-common btn-dreamy"
            >
              <Calendar size={20} /> Book a Ride Now
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .shimmery-booking-section {
          position: relative;
          width: 100%;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          overflow: hidden;
          background-color: #002147;
        }

        .bg-image-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url(${golfImage});
          background-size: cover;
          background-position: center;
          z-index: 1;
        }

        /* Dreamy Animated Overlay */
        .bg-image-container::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(-45deg, 
            rgba(0, 33, 71, 0.85), 
            rgba(0, 51, 102, 0.75), 
            rgba(0, 26, 51, 0.9)
          );
          background-size: 300% 300%;
          animation: shimmerFlow 8s ease infinite;
        }

        @keyframes shimmerFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .content-wrapper {
          position: relative;
          max-width: 1320px;
          width: 100%;
          z-index: 2;
          text-align: center;
        }

        .inner-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .heading {
          font-size: ${isMobile ? "32px" : "52px"}; /* Same as your original */
          font-weight: 900;
          margin: 0 0 20px 0;
          letter-spacing: -1px;
          line-height: 1.1;
          color: #ffffff;
        }

        .description-text {
          font-size: ${isMobile ? "15px" : "18px"}; /* Same as your original */
          line-height: 1.6;
          color: #e0e0e0;
          margin-bottom: 40px;
          font-weight: 400;
        }

        .btn-group {
          display: flex;
          flex-direction: ${isMobile ? "column" : "row"};
          gap: 15px;
          justify-content: center;
          align-items: center;
        }

        .btn-common {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 16px 32px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          width: ${isMobile ? "100%" : "auto"};
          min-width: 200px;
        }

        .btn-outline {
          background-color: transparent;
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
        }

        .btn-outline:hover {
          border-color: #ffffff;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .btn-dreamy {
          background-color: #ffffff;
          border: 2px solid #ffffff;
          color: #002147;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .btn-dreamy:hover {
          transform: translateY(-2px);
          background-color: #f0f0f0;
        }
      `}</style>
    </section>
  );
};

export default BookARideSection;
