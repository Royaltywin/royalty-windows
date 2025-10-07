import royaltyLogo from "@/assets/royalty-logo.jpg";

const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <img 
        src={royaltyLogo} 
        alt="Royalty Cleaning Services Logo" 
        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
      />
      <span className="font-logo text-5xl md:text-7xl text-outlined tracking-wider font-black whitespace-nowrap">
        ROYALTY CLEANING SERVICES
      </span>
    </div>
  );
};

export default Logo;
