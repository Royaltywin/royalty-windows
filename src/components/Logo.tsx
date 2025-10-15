import royaltyLogo from "@/assets/royalty-logo.jpg";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 md:gap-4">
      <img 
        src={royaltyLogo} 
        alt="Royalty Cleaning Services Logo" 
        className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain flex-shrink-0"
      />
      <svg viewBox="0 0 800 120" className="h-12 md:h-16 lg:h-24 w-auto" preserveAspectRatio="xMidYMid meet">
        <defs>
          <path id="textCurve" d="M 50,90 Q 400,35 750,90" fill="transparent"/>
        </defs>
        <text className="font-logo font-black text-outlined-thick" style={{ fontSize: '52px', fill: 'currentColor' }}>
          <textPath href="#textCurve" startOffset="50%" textAnchor="middle" className="tracking-wider">
            ROYALTY CLEANING SERVICES
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default Logo;
