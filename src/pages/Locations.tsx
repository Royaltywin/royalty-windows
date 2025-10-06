import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveMap from "@/components/InteractiveMap";
import SEOHead from "@/components/SEOHead";
import { counties, services, slugify } from "@/data/locations";
import { MapPin } from "lucide-react";

const Locations = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Service Areas - Southern California Cleaning Services | Royalty"
        description="Professional cleaning services across Southern California. Serving Orange, Riverside, San Bernardino, San Diego, Los Angeles, and Ventura Counties."
        url="https://getroyaltyservices.com/locations"
      />
      <Header />

      <main className="container mx-auto px-4 md:px-8 py-16 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6">
            Locations We Serve in{" "}
            <span className="text-outlined">Southern California</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We cover Los Angeles, Orange, Riverside, San Bernardino, San Diego, and Ventura counties.
            Tap the map or pick your city to open a tailored page for Window Cleaning, Pressure Washing,
            Solar Panels Cleaning, Roof Cleaning, Gutters Cleaning, Post-Construction Clean Up, and Graffiti Removal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="tel:951-999-4546"
              className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
            >
              Call (951) 999-4546
            </a>
            <Link
              to="/#quote"
              className="bg-card border-2 border-accent px-8 py-3 rounded-xl font-bold hover:bg-accent/10 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </section>

        {/* Interactive Map */}
        <section>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 text-center">
            📍 Locations We Serve (Southern California)
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Click on county markers to explore our service areas
          </p>
          <InteractiveMap />
        </section>

        {/* County Cards with Links */}
        <section>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-12 text-center">
            Service Areas by County
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {Object.entries(counties).map(([countyKey, county]) => (
              <Link
                key={countyKey}
                to={`/locations/${countyKey}`}
                className="group bg-card border-2 border-accent/30 rounded-2xl p-8 hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <MapPin 
                    className="w-8 h-8 flex-shrink-0 group-hover:scale-110 transition-transform" 
                    style={{ color: county.color }}
                  />
                  <div>
                    <h3 className="text-2xl font-black text-foreground mb-2">
                      {county.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {county.cities.length} Cities • All Services
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Featured cities: {county.cities.slice(0, 5).join(" • ")}
                    {county.cities.length > 5 && ` • +${county.cities.length - 5} more`}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-accent/30">
                  <span className="text-sm font-semibold text-accent group-hover:underline">
                    View All Cities & Services →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* All Counties Expanded View */}
        {Object.entries(counties).map(([countyKey, county]) => (
          <section key={countyKey} className="scroll-mt-20">
            <div className="flex items-center justify-between mb-6">
              <h2
                className="text-3xl md:text-4xl font-black flex items-center"
                style={{ color: county.color }}
              >
                <MapPin className="w-8 h-8 mr-3" />
                {county.name}
              </h2>
              <Link
                to={`/locations/${countyKey}`}
                className="text-accent hover:underline font-semibold"
              >
                View County Hub →
              </Link>
            </div>

            <div className="bg-card border-2 border-accent/30 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {county.cities.sort().map((city) => (
                  <Link
                    key={city}
                    to={`/locations/${countyKey}/${slugify(city)}`}
                    className="text-foreground hover:text-accent transition-colors font-medium"
                  >
                    {city}
                  </Link>
                ))}
              </div>

              <div className="pt-6 border-t border-accent/30">
                <h4 className="text-lg font-bold text-foreground mb-4">Services Available:</h4>
                <div className="flex flex-wrap gap-3">
                  {services.map((service) => (
                    <Link
                      key={service.key}
                      to={`/${service.key}/${slugify(county.cities[0])}`}
                      className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform text-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default Locations;
