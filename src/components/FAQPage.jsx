import React, { useState } from "react";
import { Plus, Minus, MessageCircle, Phone } from "lucide-react";
import taxiM1 from "../assets/images/taxiM1.png";
import golfDefault from "../assets/images/golfDefault.png";

const FAQPage = ({ setActivePage }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const brandBlue = "#002147";

  const faqs = [
    {
      question: "How do I book a taxi with Jet Taxi St Andrews?",
      answer:
        "You can book easily through our website booking form, or by calling our 24/7 dispatch center.",
    },
    {
      question: "What areas do you cover?",
      answer:
        "We primarily cover St Andrews and all major UK airports including Edinburgh, Glasgow, and Dundee.",
    },
    {
      question: "How much does a taxi ride cost?",
      answer:
        "Prices vary based on distance and vehicle type. Get an instant quote on our booking page.",
    },
    {
      question: "Can I pay by card or do you only accept cash?",
      answer:
        "We accept all major credit/debit cards, contactless payments, and cash.",
    },
    {
      question: "Do you provide airport transfers?",
      answer:
        "Yes, we specialize in transfers to and from all major Scottish airports.",
    },
    {
      question: "Are your drivers licensed and insured?",
      answer:
        "Yes, all our drivers are fully licensed and insured for your safety.",
    },
    {
      question: "Can I book a taxi for someone else?",
      answer:
        "Yes, you can book a taxi for someone else by providing their details during the booking process.",
    }, {
      question: "What is your cancellation policy?",
      answer:
        "We offer a flexible cancellation policy. Please refer to our terms and conditions for more details."
    },
  ];

  const styles = {
    section: {
      padding: "40px 0",
      backgroundColor: "#fff",
      fontFamily: "Poppins, sans-serif",
    },
    container: "max-w-[1320px] mx-auto px-5 flex flex-col lg:flex-row gap-10",
    leftContent: "flex-[1.1] w-full",
    tagLine: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "10px",
    },
    brandBar: { height: "4px", width: "24px", backgroundColor: brandBlue },
    tagText: {
      color: brandBlue,
      fontSize: "11px",
      fontWeight: "800",
      letterSpacing: "1.5px",
    },
    mainHeading:
      "text-2xl lg:text-[36px] font-extrabold text-black mb-3 tracking-tighter",
    subHeading:
      "text-[14px] lg:text-[15px] text-gray-500 mb-6 lg:mb-8 leading-relaxed",
    faqScrollArea:
      "max-h-[450px] lg:max-h-[500px] overflow-y-auto pr-1 custom-scrollbar",
    faqItem: (isOpen) => ({
      border: isOpen ? `1.5px solid ${brandBlue}` : "1.5px solid #f2f2f2",
      borderRadius: "12px",
      marginBottom: "12px",
      transition: "all 0.2s ease",
      backgroundColor: isOpen ? "#f8fafc" : "transparent",
    }),
    questionText: (isOpen) => ({
      fontSize: "14px",
      fontWeight: "700",
      color: isOpen ? brandBlue : "black",
    }),
    rightImageContainer:
      "hidden lg:block flex-[0.9] rounded-[24px] overflow-hidden h-[600px]",
  };

  return (
    <div className="w-full">
      <div
        className="relative min-h-[300px] lg:h-[400px] flex items-center px-6 pt-16 lg:pt-24"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${taxiM1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1320px] w-full mx-auto">
          <span className="text-white text-[10px] lg:text-[12px] font-bold uppercase tracking-widest mb-3 block">
            📍 St Andrews, Scotland
          </span>
          <h1
            className="text-white text-3xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Frequently Asked <br className="hidden lg:block" /> Questions
          </h1>
        </div>
      </div>

      <section style={styles.section} className="lg:py-20">
        <div className={styles.container}>
          <div className={styles.leftContent}>
            <div style={styles.tagLine}>
              <div style={styles.brandBar}></div>
              <span style={styles.tagText}>FAQ</span>
            </div>
            <h2 className={styles.mainHeading}>Common Inquiries</h2>
            <p className={styles.subHeading}>
              Browse our frequently asked questions below for quick answers.
            </p>

            <div className={styles.faqScrollArea}>
              {faqs.map((faq, index) => (
                <div key={index} style={styles.faqItem(openIndex === index)}>
                  <div
                    className="p-4 lg:p-5 flex justify-between items-center cursor-pointer"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? -1 : index)
                    }
                  >
                    <span style={styles.questionText(openIndex === index)}>
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <Minus
                        size={18}
                        style={{ color: brandBlue }}
                        className="shrink-0"
                        strokeWidth={3}
                      />
                    ) : (
                      <Plus
                        size={18}
                        className="text-gray-400 shrink-0"
                        strokeWidth={3}
                      />
                    )}
                  </div>
                  <div
                    style={{
                      maxHeight: openIndex === index ? "200px" : "0",
                      overflow: "hidden",
                      transition: "all 0.3s ease-in-out",
                      padding:
                        openIndex === index ? "0 16px 20px 16px" : "0 16px",
                    }}
                  >
                    <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-[#f8fafc] rounded-2xl border border-gray-100 flex flex-col items-center text-center sm:text-left sm:items-start sm:flex-row sm:justify-between gap-6">
              <div className="flex flex-col items-center sm:flex-row gap-4">
                <div
                  style={{ backgroundColor: brandBlue }}
                  className="p-3.5 rounded-full shadow-lg shadow-blue-900/10"
                >
                  <MessageCircle size={24} color="#fff" />
                </div>
                <div>
                  <h4
                    style={{ color: brandBlue }}
                    className="text-[17px] font-extrabold mb-1"
                  >
                    Still have questions?
                  </h4>
                  <p className="text-[13px] text-gray-500 font-medium">
                    Our team is available 24/7 to assist you.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setActivePage("contact"); 
                    setTimeout(() => {        
                      const element = document.getElementById("book-ride-form");
                      if (element) {
                        const yOffset = -80; 
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }, 100);
                  }}
                  style={{ backgroundColor: brandBlue }}
                  className="w-full sm:w-auto text-white font-bold py-3.5 px-8 rounded-xl text-[13px] active:scale-95 transition-all shadow-md"
                >
                  Book Now
                </button>
                <button
                  onClick={() => window.open("tel:+447999435333")}
                  style={{ borderColor: brandBlue, color: brandBlue }}
                  className="w-full sm:w-auto bg-white border-2 font-bold py-3.5 px-8 rounded-xl text-[13px] flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                  <Phone size={14} strokeWidth={3} /> Call Us
                </button>
              </div>
            </div>
          </div>

          <div className={styles.rightImageContainer}>
            <img
              src={golfDefault}
              alt="Taxi Service"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>
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
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: ${brandBlue}44; border-radius: 10px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background: ${brandBlue}; }
      `}</style>
    </div>
  );
};

export default FAQPage;
