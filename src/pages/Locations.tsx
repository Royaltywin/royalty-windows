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
        <section className="text-center">
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6">
            Service <span className="text-gold text-3d">Areas</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proudly serving Southern California with professional cleaning services
            across 6 counties and hundreds of cities
          </p>
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

        {/* Cities by County */}
        {Object.entries(counties).map(([countyKey, county]) => (
          <section key={countyKey} className="scroll-mt-20">
            <h2
              className="text-3xl md:text-4xl font-black mb-6 flex items-center"
              style={{ color: county.color }}
            >
              <MapPin className="w-8 h-8 mr-3" />
              Royalty Cleaning — {county.name}
            </h2>
            
            <p className="text-muted-foreground mb-6">
              {county.cities.length} cities • All services available
            </p>

            <div className="bg-card border-2 border-border rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Cities (Service + City):</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {county.cities.map((city) => (
                  <span key={city} className="text-muted-foreground">
                    {city}
                    {county.cities[county.cities.length - 1] !== city && ' •'}
                  </span>
                ))}
              </div>

              <h4 className="text-lg font-bold text-foreground mb-4">Available Services:</h4>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {services.map((service) => (
                  <div key={service.key} className="space-y-2">
                    <p className="font-semibold text-sm text-accent">{service.name}</p>
                    <div className="space-y-1">
                      {county.cities.slice(0, 3).map((city) => (
                        <Link
                          key={`${service.key}-${city}`}
                          to={`/${service.key}/${slugify(city)}`}
                          className="block text-xs text-muted-foreground hover:text-accent transition-colors"
                        >
                          → {city}
                        </Link>
                      ))}
                      {county.cities.length > 3 && (
                        <p className="text-xs text-muted-foreground/60">
                          + {county.cities.length - 3} more cities
                        </p>
                      )}
                    </div>
                  </div>
                ))}
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
