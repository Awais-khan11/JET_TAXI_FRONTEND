import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const reviews = [
    {
      name: "Lulu Asap",
      text: "Friendly and professional service, a clean and comfortable vehicle, and a driver who is courteous.",
    },
    {
      name: "Adrianna Khairil",
      text: "Abdul was very very helpful and quick! Very friendly too!",
    },
    { name: "Zarif Khairun", text: "Great service and very efficient." },
    {
      name: "Sarah Smith",
      text: "Punctual and very clean cars. Best in St Andrews.",
    },
    {
      name: "John Doe",
      text: "Excellent experience, highly recommend for airport transfers.",
    },
  ];

  const nextSlide = () => {
    const maxIndex = isMobile ? reviews.length - 1 : reviews.length - 3;
    if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  // --- GLITTER & SHINE ANIMATION CSS ---
  const shineStyle = `
    @keyframes shine {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
  `;

  const styles = {
    section: {
      padding: isMobile ? "40px 0" : "60px 0 80px 0",
      backgroundColor: "#fff",
      fontFamily: "'Inter', sans-serif",
      overflow: "hidden",
    },
    content: {
      maxWidth: "1240px",
      margin: "0 auto",
      padding: "0 20px",
    },
    heading: {
      fontSize: isMobile ? "32px" : "52px",
      fontWeight: "900",
      color: "#001C3D",
      margin: "0 0 30px 0",
      letterSpacing: "-1px",
      lineHeight: "1.2",
    },
    sliderWrapper: {
      display: "flex",
      gap: "20px",
      transition: "transform 0.5s ease-in-out",
      transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.33)}%)`,
    },
    card: {
      backgroundColor: "#fff",
      padding: isMobile ? "30px 20px" : "40px",
      borderRadius: "24px",
      border: "1px solid #e2e8f0",
      minWidth: isMobile ? "100%" : "calc(33.333% - 14px)",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      boxSizing: "border-box",
      // --- GLITTER EFFECT (Linear Gradient) ---
      background:
        "linear-gradient(110deg, #ffffff 45%, #f1f5f9 50%, #ffffff 55%)",
      backgroundSize: "200% 100%",
      animation: "shine 6s linear infinite",
      boxShadow: "0 10px 30px rgba(0,28,61,0.05)",
    },
    reviewText: {
      fontSize: isMobile ? "15px" : "17px",
      color: "#475569",
      lineHeight: "1.6",
      margin: "0 0 20px 0",
      minHeight: isMobile ? "auto" : "100px",
      fontStyle: "italic",
    },
    navBtn: {
      // --- SHINING BUTTON EFFECT ---
      background:
        "linear-gradient(110deg, #001C3D 45%, #1e40af 50%, #001C3D 55%)",
      backgroundSize: "200% 100%",
      animation: "shine 3s linear infinite",
      color: "#fff",
      border: "none",
      width: "50px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      borderRadius: "12px",
      transition: "all 0.3s ease",
    },
  };

  return (
    <section style={styles.section}>
      {/* Injecting keyframes animation */}
      <style>{shineStyle}</style>

      <div style={styles.content}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "10px",
          }}
        >
          <div
            style={{ height: "4px", width: "30px", backgroundColor: "#cbd5e1" }}
          ></div>
          <span
            style={{
              color: "#64748b",
              fontSize: "12px",
              fontWeight: "800",
              letterSpacing: "2px",
            }}
          >
            TESTIMONIALS
          </span>
        </div>

        <h2 style={styles.heading}>What Our Clients Say</h2>

        <div style={{ overflow: "hidden", width: "100%" }}>
          <div style={styles.sliderWrapper}>
            {reviews.map((rev, index) => (
              <div key={index} style={styles.card}>
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    color: "#cbd5e1",
                    zIndex: 0,
                    opacity: 0.3,
                  }}
                >
                  <Quote
                    size={isMobile ? 40 : 60}
                    fill="currentColor"
                    stroke="none"
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "4px",
                    marginBottom: "15px",
                    position: "relative",
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="yellow" color="yellow" />
                  ))}
                </div>

                <p style={styles.reviewText}>"{rev.text}"</p>
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: "800",
                    margin: 0,
                    color: "#001C3D",
                  }}
                >
                  {rev.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          <button
            onClick={prevSlide}
            style={{ ...styles.navBtn, opacity: currentIndex === 0 ? 0.3 : 1 }}
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            style={{
              ...styles.navBtn,
              opacity:
                currentIndex >=
                (isMobile ? reviews.length - 1 : reviews.length - 3)
                  ? 0.3
                  : 1,
            }}
            disabled={
              currentIndex >=
              (isMobile ? reviews.length - 1 : reviews.length - 3)
            }
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
