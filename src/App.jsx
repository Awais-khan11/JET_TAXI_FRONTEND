import { useState } from "react";
import Navbar from "./components/Navbar";
import { InformationBar } from "./components/InformationBar";
import Home from "./pages/Home";
import FAQPage from "./components/FAQPage";
import Reviews from "./components/Reviews";
import ContactUs from "./components/ContactUs";
import { ToastContainer } from "react-toastify";

function App() {
  const [activePage, setActivePageState] = useState("home");

  const setActivePage = (page, scrollTargetId = null) => {
  setActivePageState(page);

  if (scrollTargetId) {
    setTimeout(() => {
      const element = document.getElementById(scrollTargetId);
      if (element) {
        const yOffset = -80; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 150); 
  }
};
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">

      <div className="fixed top-0 left-0 w-full z-[1000]">

        <div className="hidden sm:block">
          <InformationBar />
        </div>
        <Navbar setActivePage={setActivePage} activePage={activePage} />
      </div>

      {/* MAIN CONTENT */}
      <div className="w-full">
        {activePage === "home" && <Home setActivePage={setActivePage} />}
        {activePage === "reviews" && <Reviews />}
        {activePage === "faq" && <FAQPage />}
        {activePage === "contact" && <ContactUs />}
      </div>
       <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
