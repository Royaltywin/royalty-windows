import royaltyLogo from "@/assets/royalty-logo.jpg";

const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <img 
        src={royaltyLogo} 
        alt="Royalty Cleaning Services Logo" 
        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
      />
      <div className="flex items-end gap-3 md:gap-4 flex-nowrap">
        <span className="font-logo text-3xl md:text-4xl lg:text-5xl text-outlined tracking-wider font-black whitespace-nowrap">
          ROYALTY CLEANING SERVICES
        </span>
        <a href="tel:951-999-4546" className="text-lg md:text-xl font-bold text-primary hover:text-accent transition-colors whitespace-nowrap">
          (951) 999-4546
        </a>
      </div>
    </div>
  );
};

export default Logo;
