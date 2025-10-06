import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
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
        
        {/* Info Banner */}
        <InfoSection />
        
        {/* Services Grid */}
        <Services />
        
        {/* Industries Section */}
        <Industries />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
