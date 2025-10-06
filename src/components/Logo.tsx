import { Crown } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <Crown className="w-10 h-10 text-gold drop-shadow-lg" />
      <div className="flex flex-col leading-none">
        <span className="font-logo text-3xl md:text-4xl text-gold text-3d tracking-wider">
          ROYALTY
        </span>
        <span className="font-bold text-sm md:text-base text-foreground tracking-widest">
          CLEANING SERVICES
        </span>
      </div>
    </div>
  );
};

export default Logo;
