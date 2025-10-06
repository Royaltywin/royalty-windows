import royaltyLogo from "@/assets/royalty-logo.jpg";

const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-6">
        <img 
          src={royaltyLogo} 
          alt="Royalty Cleaning Services Logo" 
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
        />
        <span className="font-logo text-5xl md:text-6xl lg:text-7xl text-outlined tracking-wider font-black whitespace-nowrap">
          ROYALTY CLEANING SERVICES
        </span>
      </div>
      <a href="tel:951-999-4546" className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary hover:text-accent transition-colors">
        (951) 999-4546
      </a>
    </div>
  );
};

export default Logo;
