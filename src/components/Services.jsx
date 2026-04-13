export const Services = () => {
  return (
    <section className="bg-white py-14">
      <div className="px-4 w-full font-sans">
        <div className="flex items-center gap-2 mb-5">
          {/* Silver Metallic Gradient Line */}
          <div className="w-10 h-[4px] bg-gradient-to-r from-[#bdc3c7] via-[#7f8c8d] to-[#bdc3c7]"></div>{" "}
          <span className="text-[15px] font-extrabold text-[#7f8c8d] uppercase tracking-[0.25em]">
            Our Services
          </span>
          <div className="w-10 h-[4px] bg-gradient-to-r from-[#bdc3c7] via-[#7f8c8d] to-[#bdc3c7]"></div>
        </div>

        <h2 className="text-[48px] font-extrabold text-[#002B5B] leading-[1.1] mb-7 tracking-tight">
          Premium Taxi Services in St <br /> Andrews
        </h2>

        <p className="text-[18px] text-gray-700 max-w-[950px] leading-relaxed font-medium border-l-4 border-[#bdc3c7] pl-6">
          From airport transfers to golf tours, we offer reliable and
          comfortable transportation services across Scotland.
        </p>
      </div>
    </section>
  );
};
