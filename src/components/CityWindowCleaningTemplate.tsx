import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Phone, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceBookingForm from "@/components/ServiceBookingForm";
import SEOHead from "@/components/SEOHead";
import { CityWindowCleaningContent } from "@/data/locations";

interface CityWindowCleaningTemplateProps {
  content: CityWindowCleaningContent;
  cityName: string;
  citySlug: string;
}

const CityWindowCleaningTemplate = ({ content, cityName, citySlug }: CityWindowCleaningTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={content.title}
        description={content.metaDescription}
        url={`https://getroyaltyservices.com/window-cleaning/${citySlug}`}
        type="LocalBusiness"
      />
      <Header />

      <main className="container mx-auto px-4 md:px-8 py-16 space-y-16">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-accent mb-4">
            <MapPin className="w-6 h-6" />
            <span className="text-lg font-semibold">{cityName}, Orange County</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 text-3d">
            {content.heading}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {content.intro}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <a href="#quote">
                Get Free Estimate <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+19519994546">
                <Phone className="mr-2 w-5 h-5" /> (951) 999-4546
              </a>
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8 text-center">
            Our Services Include
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {content.services.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-card border-2 border-border rounded-xl hover:border-accent transition-all"
              >
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground font-medium">{service}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-4xl mx-auto bg-accent/10 rounded-3xl p-8 md:p-12 border-2 border-accent/20">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8 text-center">
            Why Choose Royalty Window Cleaning {cityName}
          </h2>
          
          <div className="space-y-4">
            {content.whyChoose.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border"
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="accent" size="lg" asChild>
              <a href="tel:+19519994546">
                <Phone className="mr-2 w-5 h-5" />
                Call (951) 999-4546 for a Free Estimate
              </a>
            </Button>
          </div>
        </section>

        {/* Nearby Areas */}
        {content.nearbyAreas && (
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 text-center">
              Areas We Serve Near {cityName}
            </h2>
            <p className="text-center text-lg text-muted-foreground">
              {content.nearbyAreas}
            </p>
          </section>
        )}

        {/* Map Section */}
        <section className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden border-2 border-border" style={{ height: "400px" }}>
            <iframe 
              src={`https://maps.google.com/?q=${encodeURIComponent(cityName + ", CA")}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* Booking Form */}
        <section id="quote" className="max-w-4xl mx-auto">
          <ServiceBookingForm serviceName={`Window Cleaning in ${cityName}`} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CityWindowCleaningTemplate;
