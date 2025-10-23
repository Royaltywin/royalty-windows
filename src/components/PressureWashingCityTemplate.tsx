import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceBookingForm from "@/components/ServiceBookingForm";
import SEOHead from "@/components/SEOHead";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import InteractiveMap from "@/components/InteractiveMap";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { commercialPressureWashingServices, residentialPressureWashingServices, pressureWashingTestimonials } from "@/data/locations";

interface PressureWashingCityTemplateProps {
  cityName: string;
  citySlug: string;
  countyName: string;
  countySlug: string;
}

const PressureWashingCityTemplate = ({
  cityName,
  citySlug,
  countyName,
  countySlug
}: PressureWashingCityTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`Pressure Washing in ${cityName}, CA | Royalty Pressure Washing`}
        description={`Professional pressure washing services in ${cityName}, ${countyName}. Commercial & residential power washing, concrete cleaning, roof cleaning. EPA compliant. Licensed & insured. Call (951) 999-4546`}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-black text-foreground text-3d">
              Royalty Pressure Washing
            </h1>
            <p className="text-sm text-muted-foreground/70 mb-2">
              Royalty Pressure Washing {cityName} • Also known as {cityName} Pressure Washing
            </p>
            <p className="text-3xl md:text-4xl font-bold text-gold">
              {cityName}, {countyName}
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Professional Commercial & Residential Power Washing. Transform your property with 250°F steam technology and EPA-compliant methods.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 py-6">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-accent" />
                <span className="font-semibold">Licensed • Bonded • Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-accent" />
                <span className="font-semibold">EPA/CWA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 text-accent fill-accent" />
                <span className="font-semibold">5-Star Rated</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild variant="accent" size="lg" className="text-xl">
                <a href="#quote-form">Get Free Commercial Quote</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-xl">
                <a href="#quote-form">Get Free Residential Quote</a>
              </Button>
            </div>
            <p className="text-lg">
              Or call us directly: <a href="tel:+19519994546" className="text-accent font-bold hover:underline">(951) 999-4546</a>
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Commercial Pressure Washing Services
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Reliable, scalable cleaning for businesses, HOAs, and property managers in {cityName}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {commercialPressureWashingServices.map((service) => (
              <Link
                key={service.slug}
                to={`/pressure-washing/${service.slug}`}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all hover:scale-105 border-2 hover:border-accent">
                  <CardContent className="p-6">
                    <CheckCircle className="w-10 h-10 text-accent mb-4" />
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full group-hover:border-accent group-hover:text-accent">
                      Learn More →
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Residential Pressure Washing Services
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Safe, surface-appropriate cleaning for {cityName} homeowners
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {residentialPressureWashingServices.map((service) => (
              <Link
                key={service.slug}
                to={`/pressure-washing/${service.slug}`}
                className="group"
              >
                <Card className="h-full bg-gradient-primary text-primary-foreground hover:scale-105 transition-transform">
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-3">
                      {service.name}
                    </h3>
                    <p className="text-sm opacity-90 mb-4">
                      {service.description}
                    </p>
                    <Button variant="outline" size="sm" className="bg-white text-foreground hover:bg-white/90">
                      Learn More →
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pressureWashingTestimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Serving {cityName} & All of {countyName}
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Professional pressure washing across Southern California
          </p>
          <div className="max-w-5xl mx-auto">
            <InteractiveMap />
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-muted/30" id="quote-form">
        <div className="container mx-auto px-4 max-w-4xl">
          <ServiceBookingForm 
            serviceName={`Pressure Washing in ${cityName}`} 
            showPressureWashingFields={true}
          />
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-8">
            Follow Our Work on Social Media
          </h2>
          <div className="flex justify-center">
            <SocialMediaLinks />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PressureWashingCityTemplate;
