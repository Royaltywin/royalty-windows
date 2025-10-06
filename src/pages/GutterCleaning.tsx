import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import ServiceBookingForm from "@/components/ServiceBookingForm";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import gutterImage from "@/assets/hero-cleaning-team.jpg";

const GutterCleaning = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Professional Gutter Cleaning Services | Royalty Cleaning"
        description="Keep your gutters flowing freely. Professional gutter cleaning and maintenance services by Royalty Cleaning Services."
        url="https://getroyaltyservices.com/gutter-cleaning"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={gutterImage} 
            alt="Professional gutter cleaning services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 text-3d">
              Professional Gutter Cleaning Services
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-accent mb-8 drop-shadow-lg">
              Protect your home from water damage with expert gutter cleaning
            </p>
            <Button variant="accent" size="lg" className="text-xl py-6 px-8">
              Get Free Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-muted py-16 px-4 md:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Clean Gutters, Protected Home
          </h2>
          <p className="text-xl text-muted-foreground">
            Clogged gutters can cause serious water damage to your foundation, roof, and landscaping. 
            Royalty Cleaning Services provides thorough gutter cleaning to keep your home protected year-round.
          </p>
        </div>
      </section>

      <Services />
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-black text-center mb-12">Our Gutter Cleaning Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-6 rounded-xl border-2 border-border">
              <h3 className="text-xl font-bold mb-3">Complete Gutter Cleaning</h3>
              <p className="text-muted-foreground">Remove all debris, leaves, and buildup from your gutters</p>
            </div>
            <div className="bg-card p-6 rounded-xl border-2 border-border">
              <h3 className="text-xl font-bold mb-3">Downspout Clearing</h3>
              <p className="text-muted-foreground">Ensure proper water flow through all downspouts</p>
            </div>
            <div className="bg-card p-6 rounded-xl border-2 border-border">
              <h3 className="text-xl font-bold mb-3">Debris Removal</h3>
              <p className="text-muted-foreground">Haul away all removed debris from your property</p>
            </div>
            <div className="bg-card p-6 rounded-xl border-2 border-border">
              <h3 className="text-xl font-bold mb-3">Gutter Guard Installation</h3>
              <p className="text-muted-foreground">Prevent future clogs with quality gutter guards</p>
            </div>
            <div className="bg-card p-6 rounded-xl border-2 border-border">
              <h3 className="text-xl font-bold mb-3">Inspection & Repairs</h3>
              <p className="text-muted-foreground">Identify and fix minor gutter issues</p>
            </div>
            <div className="bg-card p-6 rounded-xl border-2 border-border">
              <h3 className="text-xl font-bold mb-3">Seasonal Maintenance</h3>
              <p className="text-muted-foreground">Regular cleaning plans to keep gutters flowing</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <ServiceBookingForm serviceName="Gutter Cleaning" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GutterCleaning;
