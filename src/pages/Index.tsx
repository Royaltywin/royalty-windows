import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EstimateCard from "@/components/EstimateCard";
import InfoSection from "@/components/InfoSection";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section with Value Message */}
        <Hero />
        
        {/* Estimate Card Section */}
        <section className="container mx-auto px-4 md:px-8 py-12">
          <EstimateCard />
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
