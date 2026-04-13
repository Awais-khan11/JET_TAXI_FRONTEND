import React, { useState, useEffect } from "react";
import {
  CalendarDays,
  Clock3,
  User,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

// Images
import taxiMinivan from "../assets/images/taxi-minivan.png";
import mengolf from "../assets/images/mengolf.png";
import taxiBlackdefault from "../assets/images/taxi-black-default.png";

const BlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedPost]);

  const blogPosts = [
    {
      tag: "AIRPORT TRANSFERS",
      image: taxiBlackdefault,
      date: "15 Mar 2026",
      readTime: "8 min",
      title: "The Ultimate Guide to Edinburgh Airport Transfers",
      description:
        "Everything you need to know about getting from St Andrews to Edinburgh Airport — routes, timing, and costs. We cover the best times to leave, expected traffic, and how our meet-and-greet service works to make your journey stress-free.",
    },
    {
      tag: "STUDENT LIFE",
      image: taxiMinivan,
      date: "10 Mar 2026",
      readTime: "10 min",
      title: "A Student's Complete Guide to Getting Around St Andrews",
      description:
        "From Freshers' Week to graduation — how to navigate St Andrews like a pro. Learn about student discounts, late-night safety, and the best ways to get to nearby cities for weekend trips without breaking the bank.",
    },
    {
      tag: "GOLF",
      image: mengolf,
      date: "5 Mar 2026",
      readTime: "9 min",
      title: "Top 10 Golf Courses Near St Andrews You Need to Visit",
      description:
        "Beyond the famous Old Course, discover spectacular golf courses within easy reach. We provide specialized transport for golfers with plenty of room for clubs and gear to courses like Kingsbarns and Carnoustie.",
    },
    {
      tag: "AIRPORT TRANSFERS",
      image: taxiBlackdefault,
      date: "15 Mar 2026",
      readTime: "8 min",
      title: "The Ultimate Guide to Edinburgh Airport Transfers",
      description:
        "Everything you need to know about getting from St Andrews to Edinburgh Airport — routes, timing, and costs. We cover the best times to leave, expected traffic, and how our meet-and-greet service works to make your journey stress-free.",
    },
    {
      tag: "STUDENT LIFE",
      image: taxiMinivan,
      date: "10 Mar 2026",
      readTime: "10 min",
      title: "A Student's Complete Guide to Getting Around St Andrews",
      description:
        "From Freshers' Week to graduation — how to navigate St Andrews like a pro. Learn about student discounts, late-night safety, and the best ways to get to nearby cities for weekend trips without breaking the bank.",
    },
    {
      tag: "GOLF",
      image: mengolf,
      date: "5 Mar 2026",
      readTime: "9 min",
      title: "Top 10 Golf Courses Near St Andrews You Need to Visit",
      description:
        "Beyond the famous Old Course, discover spectacular golf courses within easy reach. We provide specialized transport for golfers with plenty of room for clubs and gear to courses like Kingsbarns and Carnoustie.",
    },
  ];

  const nextSlide = () => {
    if (currentIndex < blogPosts.length - (isMobile ? 1 : 3)) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const styles = {
    section: {
      padding: isMobile ? "40px 0" : "60px 0",
      backgroundColor: "#fff",
      fontFamily: "'Inter', sans-serif",
    },
    container: {
      maxWidth: "1320px",
      margin: "0 auto",
      padding: "0 20px",
    },
    mainHeading: {
      fontSize: isMobile ? "28px" : "38px",
      fontWeight: "900",
      color: "#002147", 
      margin: "10px 0",
      letterSpacing: "-1px",
    },
    sliderViewport: {
      overflow: "hidden",
      width: "100%",
      marginTop: "20px",
    },
    sliderWrapper: {
      display: "flex",
      gap: isMobile ? "0px" : "20px",
      transition: "transform 0.5s ease-in-out",
      transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.33 + 1.51)}%)`,
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      border: "1px solid #f2f2f2",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      minWidth: isMobile ? "100%" : "calc(33.333% - 13.4px)",
      height: isMobile ? "auto" : "480px",
      boxSizing: "border-box",
    },
    imageContainer: {
      position: "relative",
      height: isMobile ? "200px" : "220px",
      width: "100%",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,33,71,0.9)", 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
      padding: "20px",
    },
    modalContent: {
      backgroundColor: "#fff",
      maxWidth: "700px",
      width: "100%",
      maxHeight: "90vh",
      borderRadius: "24px",
      position: "relative",
      overflowY: "auto",
    },
    closeBtn: {
      position: "absolute",
      top: "15px",
      right: "15px",
      backgroundColor: "#002147",
      border: "none",
      borderRadius: "50%",
      width: "35px",
      height: "35px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      zIndex: 10,
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={{ textAlign: "left" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                height: "4px",
                width: "30px",
                backgroundColor: "#002147", 
              }}
            ></div>
            <span
              style={{
                color: "#002147",
                fontSize: "11px",
                fontWeight: "800",
                letterSpacing: "2px",
              }}
            >
              BLOG
            </span>
          </div>
          <h2 style={styles.mainHeading}>Latest From Our Blog</h2>
        </div>

        <div style={styles.sliderViewport}>
          <div style={styles.sliderWrapper}>
            {blogPosts.map((post, index) => (
              <div key={index} style={styles.card}>
                <div style={styles.imageContainer}>
                  <img src={post.image} alt={post.title} style={styles.image} />
                  <span
                    style={{
                      position: "absolute",
                      top: "15px",
                      left: "15px",
                      backgroundColor: "#002147",
                      color: "#fff",
                      padding: "5px 12px",
                      borderRadius: "6px",
                      fontSize: "10px",
                      fontWeight: "900",
                    }}
                  >
                    {post.tag}
                  </span>
                </div>

                <div style={{ padding: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      fontSize: "12px",
                      color: "#888",
                      marginBottom: "10px",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <CalendarDays size={14} color="#002147" /> {post.date}
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <Clock3 size={14} color="#002147" /> {post.readTime}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: isMobile ? "18px" : "20px",
                      fontWeight: "800",
                      marginBottom: "10px",
                      lineHeight: "1.3",
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      lineHeight: "1.5",
                      marginBottom: "15px",
                    }}
                  >
                    {post.description.substring(0, 100)}...
                  </p>
                </div>

                <div
                  style={{
                    padding: "15px 20px",
                    borderTop: "1px solid #f2f2f2",
                    marginTop: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "700",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <User size={14} color="#002147" /> Jet Taxi
                  </div>
                  <button
                    onClick={() => setSelectedPost(post)}
                    style={{
                      color: "#002147",
                      border: "none",
                      background: "none",
                      fontWeight: "900",
                      fontSize: "13px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    Read More <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginTop: "30px",
          }}
        >
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            style={{
              padding: "12px",
              borderRadius: "12px",
              border: "none",
              backgroundColor: "#002147",
              color: "#fff",
              cursor: currentIndex === 0 ? "default" : "pointer",
              opacity: currentIndex === 0 ? 0.3 : 1,
            }}
          >
            <ChevronLeft size={22} strokeWidth={3} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= blogPosts.length - (isMobile ? 1 : 3)}
            style={{
              padding: "12px",
              borderRadius: "12px",
              border: "none",
              backgroundColor: "#002147",
              color: "#fff",
              cursor:
                currentIndex >= blogPosts.length - (isMobile ? 1 : 3)
                  ? "default"
                  : "pointer",
              opacity:
                currentIndex >= blogPosts.length - (isMobile ? 1 : 3) ? 0.3 : 1,
            }}
          >
            <ChevronRight size={22} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* MODAL POPUP */}
      {selectedPost && (
        <div style={styles.modalOverlay} onClick={() => setSelectedPost(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              style={styles.closeBtn}
              onClick={() => setSelectedPost(null)}
            >
              <X size={20} color="#fff" strokeWidth={3} />
            </button>
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
            <div style={{ padding: "30px" }}>
              <span
                style={{
                  backgroundColor: "#002147",
                  color: "#fff",
                  padding: "5px 15px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: "900",
                }}
              >
                {selectedPost.tag}
              </span>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: "900",
                  margin: "20px 0 15px",
                }}
              >
                {selectedPost.title}
              </h2>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  color: "#888",
                  marginBottom: "20px",
                  fontSize: "14px",
                }}
              >
                <span
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <CalendarDays size={16} color="#002147" /> {selectedPost.date}
                </span>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <Clock3 size={16} color="#002147" /> {selectedPost.readTime}
                </span>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <User size={16} color="#002147" /> Jet Taxi
                </span>
              </div>
              <p style={{ lineHeight: "1.8", color: "#444", fontSize: "16px" }}>
                {selectedPost.description}
                <br />
                <br />
                At Jet Taxi St Andrews, we pride ourselves on punctuality and
                comfort. Contact us today to book your next ride.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
