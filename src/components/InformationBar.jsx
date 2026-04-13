export const InformationBar = () => {
  return (
    <div className="flex gap-6 bg-[#002B5B] w-full text-white px-4 h-[38px] items-center text-[12px] font-medium tracking-tight overflow-hidden border-b border-[#1a4b82]">
      <div className="flex items-center gap-1.5 cursor-pointer hover:text-[#94a3b8] transition-colors">
        <span>standrews479@gmail.com</span>
      </div>
      <div className="flex items-center gap-1.5 cursor-pointer hover:text-[#94a3b8] transition-colors">
        <span>+44 7999 435333</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-[#94a3b8]">24/7 Service</span>
      </div>
    </div>
  );
};
