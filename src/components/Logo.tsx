import royaltyLogo from "@/assets/royalty-logo.jpg";

const Logo = () => {
  return (
    <div className="flex items-center gap-6">
      <img 
        src={royaltyLogo} 
        alt="Royalty Cleaning Services Logo" 
        className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
      />
      <div className="flex flex-col leading-none">
        <span className="font-logo text-6xl md:text-7xl lg:text-8xl text-outlined tracking-wider font-black">
          ROYALTY
        </span>
        <span className="font-bold text-lg md:text-xl lg:text-2xl text-foreground tracking-widest mt-2">
          CLEANING SERVICES
        </span>
      </div>
    </div>
  );
};

export default Logo;
