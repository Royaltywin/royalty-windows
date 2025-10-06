import royaltyLogo from "@/assets/royalty-logo.jpg";

const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <img 
        src={royaltyLogo} 
        alt="Royalty Cleaning Services Logo" 
        className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
      />
      <div className="flex flex-col leading-none">
        <span className="font-logo text-4xl md:text-5xl lg:text-6xl text-gold text-3d tracking-wider drop-shadow-lg">
          ROYALTY
        </span>
        <span className="font-bold text-sm md:text-base lg:text-lg text-foreground tracking-widest">
          CLEANING SERVICES
        </span>
      </div>
    </div>
  );
};

export default Logo;
