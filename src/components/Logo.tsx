import royaltyLogo from "@/assets/royalty-logo.jpg";

const Logo = () => {
  return (
    <img 
      src={royaltyLogo} 
      alt="Royalty Cleaning Services Logo" 
      className="h-16 md:h-24 lg:h-32 w-auto object-contain"
    />
  );
};

export default Logo;
