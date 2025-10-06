import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuoteWizard from "@/components/QuoteWizard";
import InfoSection from "@/components/InfoSection";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead />
      <Header />
      <AIChatbot />
      
      <main>
        {/* Hero Section with Value Message */}
        <Hero />
        
        {/* Quote Wizard Section */}
        <section className="container mx-auto px-4 md:px-8 py-12">
          <QuoteWizard />
        </section>
        
        {/* Info Banner */}
        <InfoSection />
        
        {/* Services Grid */}
        <Services />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
