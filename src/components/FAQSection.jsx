import React, { useState } from "react";
import { Plus, Minus, MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import golfDefault from "../assets/images/golfDefault.png";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const brandBlue = "#002147";

  const faqs = [
    {
      question: "How do I book a taxi with St Andrews Taxi?",
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
        "All our drivers are fully licensed by the local authority and carry comprehensive insurance.",
    },
    {
      question: "What if I need to cancel or change my booking?",
      answer:
        "You can cancel or modify your booking by calling us at least 24 hours in advance.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="faq-left"
        >
          <div className="tagline">
            <div
              className="brand-bar"
              style={{ backgroundColor: brandBlue }}
            ></div>
            <span style={{ color: brandBlue }}>HAVE QUESTIONS?</span>
          </div>

          <h2 className="main-heading" style={{ color: brandBlue }}>
            Frequently Asked Questions
          </h2>
          <p className="sub-heading">
            Got a question? We've got answers. Check out our FAQ section below.
          </p>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
                className="faq-item"
                style={{
                  borderColor: openIndex === index ? brandBlue : "#f2f2f2",
                }}
              >
                <div
                  className="faq-header"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <span
                    className="question-text"
                    style={{ color: openIndex === index ? brandBlue : "#000" }}
                  >
                    {faq.question}
                  </span>
                  <div className="icon-wrapper">
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openIndex === index ? (
                        <Minus size={20} color={brandBlue} strokeWidth={3} />
                      ) : (
                        <Plus size={20} color={brandBlue} strokeWidth={3} />
                      )}
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      className="faq-answer"
                    >
                      <div className="answer-content">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="support-card"
            style={{
              backgroundColor: "#f0f4f8",
              borderColor: "rgba(0,33,71,0.1)",
            }}
          >
            <div className="support-info">
              <div
                className="icon-circle"
                style={{ backgroundColor: brandBlue }}
              >
                <MessageCircle size={24} color="#fff" fill="#fff" />
              </div>
              <div className="support-text">
                <h4 style={{ color: brandBlue }}>Still have questions?</h4>
                <p>Our friendly team is here to help.</p>
              </div>
            </div>

            <div className="button-group">
              <button
                className="btn-book"
                style={{ backgroundColor: brandBlue }}
                onClick={() => {
                  const element = document.getElementById("book-ride-form");
                  if (element) {
                    const yOffset = -80; // adjust karo header ke liye
                    const y =
                      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                Book a Ride
              </button>
              <a href="tel:+447999435333" style={{ textDecoration: "none" }}>
                   <button 
                
                className="btn-call"
                style={{ borderColor: brandBlue, color: brandBlue }}
              >
                <Phone size={18} /> Call Us
              </button>
              </a>
             
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="faq-right"
        >
          <img src={golfDefault} alt="St Andrews Taxi" />
        </motion.div>
      </div>

      <style>{`
        .faq-section { padding: 60px 0; background-color: #fff; font-family: 'Inter', sans-serif; overflow: hidden; }
        .faq-container { max-width: 1320px; margin: 0 auto; padding: 0 20px; display: flex; gap: 60px; align-items: flex-start; }
        .faq-left { flex: 1.2; width: 100%; }
        .tagline { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
        .brand-bar { height: 4px; width: 35px; border-radius: 2px; }
        .tagline span { font-size: 13px; font-weight: 800; letter-spacing: 2px; }
        .main-heading { font-size: 32px; font-weight: 900; margin-bottom: 15px; letter-spacing: -1px; line-height: 1.2; }
        .sub-heading { font-size: 15px; color: #666; margin-bottom: 30px; max-width: 500px; }
        .faq-list { margin-bottom: 30px; }
        .faq-item { border: 1px solid #f2f2f2; border-radius: 16px; margin-bottom: 12px; background: #fff; overflow: hidden; cursor: pointer; transition: border-color 0.3s ease; }
        .faq-header { padding: 18px 20px; display: flex; justify-content: space-between; align-items: center; }
        .question-text { font-weight: 700; font-size: 15px; padding-right: 15px; transition: color 0.3s ease; line-height: 1.4; }
        .answer-content { padding: 0 20px 20px 20px; }
        .answer-content p { margin: 0; color: #555; font-size: 14px; line-height: 1.6; }
        
        /* Support Card Fix */
        .support-card { padding: 24px; border-radius: 20px; display: flex; flex-direction: column; gap: 20px; border: 1px solid; }
        .support-info { display: flex; align-items: center; gap: 15px; }
        .icon-circle { padding: 12px; border-radius: 50%; display: flex; shrink-0; }
        .support-text h4 { margin: 0 0 2px 0; font-weight: 800; font-size: 17px; }
        .support-text p { margin: 0; font-size: 14px; color: #666; }
        
        .button-group { display: flex; flex-direction: column; gap: 10px; width: 100%; }
        .btn-book { color: #fff; border: none; padding: 14px; border-radius: 12px; font-weight: 800; cursor: pointer; transition: 0.2s; font-size: 14px; width: 100%; }
        .btn-call { background: #fff; border: 1.5px solid; padding: 14px; border-radius: 12px; font-weight: 800; display: flex; align-items: center; justify-content: center; gap: 8px; cursor: pointer; transition: 0.2s; font-size: 14px; width: 100%; }

        @media (min-width: 768px) {
          .main-heading { font-size: 42px; }
          .support-card { flex-direction: row; justify-content: space-between; align-items: center; }
          .button-group { flex-direction: row; width: auto; }
          .btn-book, .btn-call { width: auto; padding: 14px 28px; }
        }

        @media (max-width: 1024px) {
          .faq-container { flex-direction: column; }
          .faq-right { display: none; }
        }

        @media (min-width: 1025px) {
           .faq-right { flex: 0.8; border-radius: 30px; overflow: hidden; height: 650px; position: sticky; top: 100px; display: block; }
           .faq-right img { width: 100%; height: 100%; object-fit: cover; }
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
