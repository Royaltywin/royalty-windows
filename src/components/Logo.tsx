import royaltyLogo from "@/assets/royalty-logo.jpg";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 md:gap-4">
      <img 
        src={royaltyLogo} 
        alt="Royalty Cleaning Services Logo" 
        className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain flex-shrink-0"
      />
      <div className="font-gunplay font-black text-outlined-thick text-2xl md:text-4xl lg:text-5xl tracking-wider whitespace-nowrap">
        ROYALTY CLEANING SERVICES
      </div>
    </div>
  );
};

export default Logo;
