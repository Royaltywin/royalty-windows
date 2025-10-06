import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceBookingForm from "@/components/ServiceBookingForm";
import { Button } from "@/components/ui/button";
import { counties, services, slugify } from "@/data/locations";
import { MapPin, Phone, ArrowRight } from "lucide-react";

const CityService = () => {
  const { service, city } = useParams<{ service: string; city: string }>();

  // Find matching service and city
  const serviceData = services.find(s => s.key === service);
  
  let cityName = "";
  let countyName = "";
  
  Object.values(counties).forEach(county => {
    const matchingCity = county.cities.find(c => slugify(c) === city);
    if (matchingCity) {
      cityName = matchingCity;
      countyName = county.name;
    }
  });

  // If service or city not found, redirect to locations
  if (!serviceData || !cityName) {
    return <Navigate to="/locations" replace />;
  }

  const pageTitle = `${serviceData.name} in ${cityName}`;
  const metaDescription = `Professional ${serviceData.name.toLowerCase()} services in ${cityName}, ${countyName}. Licensed, insured, and satisfaction guaranteed. Call (951) 999-4546 for a free estimate.`;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 md:px-8 py-16 space-y-16">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-accent mb-4">
            <MapPin className="w-6 h-6" />
            <span className="text-lg font-semibold">{cityName}, {countyName}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 text-3d">
            {pageTitle}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            {metaDescription}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <a href="#quote">
                Get Free Quote <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+19519994546">
                <Phone className="mr-2 w-5 h-5" /> (951) 999-4546
              </a>
            </Button>
          </div>
        </section>

        {/* Service Overview */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
            Expert {serviceData.name} in {cityName}
          </h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg">
              Looking for professional <strong>{serviceData.name.toLowerCase()} services in {cityName}</strong>? 
              Royalty Cleaning Services is your trusted local provider in {countyName}. We deliver 
              exceptional results for residential and commercial properties throughout {cityName} and 
              surrounding areas.
            </p>
            
            <p className="text-lg">
              Our team of experienced professionals uses state-of-the-art equipment and eco-friendly 
              cleaning solutions to ensure your property looks its absolute best. Whether you need 
              one-time service or regular maintenance, we're committed to exceeding your expectations.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-4xl mx-auto bg-muted/50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8 text-center">
            Why Choose Royalty in {cityName}?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Licensed & Insured Professionals",
              "Free, No-Obligation Estimates",
              "100% Satisfaction Guarantee",
              "Eco-Friendly Cleaning Solutions",
              "Residential & Commercial Expertise",
              "Same-Day Service Available",
              "Competitive Pricing",
              "Trusted Throughout Southern California"
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-background rounded-xl"
              >
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <p className="text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local Map Embed Placeholder */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 text-center">
            Serving {cityName} & Nearby Areas
          </h2>
          
          <div className="bg-muted rounded-2xl p-12 text-center border-2 border-border">
            <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {cityName}, {countyName}
            </h3>
            <p className="text-muted-foreground">
              Proudly serving {cityName} and all surrounding communities
            </p>
          </div>
        </section>

        {/* Things to Do (SEO Content) */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
            About {cityName}
          </h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              {cityName} is a vibrant community in {countyName}, known for its beautiful properties 
              and thriving neighborhoods. Our local team understands the unique cleaning needs of 
              {cityName} residents and businesses, from historic buildings to modern developments.
            </p>
            
            <p>
              Whether you're in the heart of {cityName} or in one of the surrounding neighborhoods, 
              Royalty Cleaning Services is here to help maintain your property's beauty and value. 
              We're committed to being your trusted cleaning partner in {cityName}.
            </p>
          </div>
        </section>

        {/* Booking Form */}
        <section id="quote" className="max-w-4xl mx-auto">
          <ServiceBookingForm serviceName={`${serviceData.name} in ${cityName}`} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CityService;
