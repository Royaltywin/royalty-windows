import customerImage from "@/assets/hero-customer.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left: Value Motto */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-foreground mb-4">
              VALUE<br />
              YOU<br />
              CAN<br />
              <span className="text-gold text-3d">SEE</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-accent">
              Satisfaction you can feel.
            </p>
          </div>

          {/* Middle: Customer Support Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <img 
                src={customerImage} 
                alt="Customer support representative ready to help with your cleaning needs" 
                className="w-full h-auto rounded-2xl shadow-2xl border-4 border-accent"
              />
            </div>
          </div>

          {/* Right: Start Your Free Estimate */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-2">
                Start Your
              </h2>
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
                FREE ESTIMATE
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Professional cleaning services<br />
                tailored to your needs
              </p>
            </div>
            <Button 
              variant="default"
              size="lg" 
              className="text-xl py-6 px-10 bg-accent hover:bg-accent/90 text-secondary font-bold group shadow-accent-glow"
            >
              Get Started
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
