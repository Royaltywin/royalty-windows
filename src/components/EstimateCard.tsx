import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import QuoteWizard from "./quote-form/QuoteWizard";

const services = [
  "Window Cleaning",
  "Pressure Washing",
  "Roof Washing",
  "House Washing",
  "Gutter Cleaning",
  "Solar Panel Cleaning",
  "Bird Control",
  "Other"
];

const EstimateCard = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <QuoteWizard open={isQuoteOpen} onOpenChange={setIsQuoteOpen} />
    
    <div className="bg-accent/10 border-4 border-accent rounded-3xl p-8 md:p-12 shadow-accent-glow">
      <h3 className="text-3xl md:text-4xl font-black text-foreground mb-2">
        Start Your Free Estimate
      </h3>
      
      <p className="text-xl font-bold text-primary mb-8">
        I'M INTERESTED IN:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {services.map((service) => (
          <button
            key={service}
            className="flex items-center gap-3 p-4 bg-background hover:bg-accent/20 border-2 border-accent/30 hover:border-accent rounded-xl transition-all duration-200 group"
          >
            <CheckCircle className="w-5 h-5 text-accent" />
            <span className="text-foreground font-semibold group-hover:text-accent transition-colors">
              {service}
            </span>
          </button>
        ))}
      </div>
      
      <Button 
        variant="accent" 
        size="lg" 
        className="w-full text-xl py-6 rounded-2xl"
        onClick={() => setIsQuoteOpen(true)}
      >
        Get Started
      </Button>
    </div>
    </>
  );
};

export default EstimateCard;
