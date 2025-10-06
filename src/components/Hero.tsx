import heroImage from "@/assets/hero-cleaning-team.jpg";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional cleaning team providing window and exterior cleaning services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none text-white tracking-tight mb-6">
            VALUE<br />
            YOU<br />
            CAN<br />
            <span className="text-gold text-3d">SEE</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-8 drop-shadow-lg">
            Satisfaction you can feel.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="accent" 
              size="lg" 
              className="text-xl py-6 px-8 group"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-xl py-6 px-8 bg-white/10 border-white text-white hover:bg-white hover:text-black backdrop-blur-sm"
            >
              <MapPin className="mr-2 w-5 h-5" />
              Find Your Local Cleaner
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
