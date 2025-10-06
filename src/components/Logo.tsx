import royaltyLogo from "@/assets/royalty-logo.jpg";

const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <img 
        src={royaltyLogo} 
        alt="Royalty Cleaning Services Logo" 
        className="w-16 h-16 md:w-20 md:h-20 object-contain"
      />
      <div className="flex flex-col leading-none">
        <span className="font-logo text-3xl md:text-4xl lg:text-5xl text-gold text-3d tracking-wider drop-shadow-lg">
          ROYALTY
        </span>
        <span className="font-bold text-xs md:text-sm text-foreground tracking-widest">
          CLEANING SERVICES
        </span>
      </div>
    </div>
  );
};

export default Logo;
