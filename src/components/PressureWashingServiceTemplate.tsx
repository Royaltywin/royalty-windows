import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceBookingForm from "@/components/ServiceBookingForm";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import SEOHead from "@/components/SEOHead";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PressureWashingServiceTemplateProps {
  serviceName: string;
  serviceSlug: string;
  serviceType: 'commercial' | 'residential';
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImage: string;
  aboutContent: string;
  processSteps: string[];
  benefits: { title: string; description: string }[];
  beforeAfterImages?: { before: string; after: string; title: string }[];
  metaTitle: string;
  metaDescription: string;
  keywords?: string;
  children?: ReactNode;
}

const PressureWashingServiceTemplate = ({
  serviceName,
  serviceSlug,
  serviceType,
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroImage,
  aboutContent,
  processSteps,
  benefits,
  beforeAfterImages = [],
  metaTitle,
  metaDescription,
  keywords,
  children
}: PressureWashingServiceTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={metaTitle}
        description={metaDescription}
      />
      <Header />

      {/* Breadcrumbs */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ArrowRight className="w-4 h-4" />
            <Link to="/pressure-washing" className="hover:text-foreground transition-colors">Pressure Washing</Link>
            <ArrowRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{serviceName}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={`${serviceName} in Southern California - Royalty Pressure Washing`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 text-3d">
            {heroTitle}
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 font-bold mb-6">
            {heroSubtitle}
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
            {heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="accent" size="lg" className="text-xl">
              <a href="#quote-form">Get Free Quote</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-xl bg-white/10 text-white border-white hover:bg-white hover:text-foreground">
              <a href="tel:+19519994546">Call (951) 999-4546</a>
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 md:px-8 py-16 space-y-24">
        {/* About Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-8">
            About Our {serviceName}
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed">{aboutContent}</p>
          </div>
        </section>

        {/* Process Section */}
        <section>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            Our <span className="text-gold text-3d">Process</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-card border-2 border-accent/30 rounded-2xl p-6 hover:border-accent transition-all hover:shadow-accent-glow"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center font-black text-2xl text-primary-foreground shadow-lg">
                  {index + 1}
                </div>
                <p className="mt-4 font-medium text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            Why Choose <span className="text-gold text-3d">Royalty</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-primary text-primary-foreground rounded-2xl p-6 hover:scale-105 transition-transform"
              >
                <CheckCircle className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="opacity-90">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Before & After Gallery */}
        {beforeAfterImages.length > 0 && (
          <section>
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
              See the <span className="text-gold text-3d">Transformation</span>
            </h2>
            <BeforeAfterSlider images={beforeAfterImages} />
          </section>
        )}

        {/* Additional Content */}
        {children}

        {/* CTA Section */}
        <section className="bg-gradient-primary text-primary-foreground rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Ready for Professional {serviceType === 'commercial' ? 'Commercial' : 'Residential'} Service?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let Royalty Pressure Washing restore your property with our proven {serviceName.toLowerCase()} process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="accent" size="lg" className="text-xl">
              <a href="#quote-form">Get Free Quote</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-xl bg-white text-foreground hover:bg-white/90">
              <a href="tel:+19519994546">Call (951) 999-4546</a>
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-80">
            Serving Los Angeles • Orange • Riverside • San Bernardino • San Diego • Ventura Counties
          </p>
        </section>

        {/* Booking Form */}
        <section id="quote-form">
          <ServiceBookingForm serviceName={serviceName} showPressureWashingFields={true} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PressureWashingServiceTemplate;
