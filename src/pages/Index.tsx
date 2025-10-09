import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";
import SEOHead from "@/components/SEOHead";
import InteractiveMap from "@/components/InteractiveMap";
import SocialMediaLinks from "@/components/SocialMediaLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead />
      <Header />
      <AIChatbot />
      
      <main>
        {/* Hero Section with Value Message */}
        <Hero />
        
        {/* Info Banner */}
        <InfoSection />
        
        {/* Services Grid */}
        <Services />
        
        {/* Industries Section */}
        <Industries />
        
        {/* Interactive Map Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-foreground">
              Find Your Local Cleaning Service
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Select your county to explore our services in your area
            </p>
            <InteractiveMap />
          </div>
        </section>
        
        {/* Social Media Section */}
        <section className="py-12 px-4 md:px-8 bg-accent/10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
              Connect With Royalty Cleaning
            </h2>
            <p className="text-muted-foreground mb-6">
              Follow us for tips, promotions, and before/after transformations
            </p>
            <SocialMediaLinks iconSize={32} showLabels />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
