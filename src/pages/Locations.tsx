import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveMapGoogle from "@/components/InteractiveMapGoogle";
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

      <main className="container mx-auto px-4 md:px-8 py-8 space-y-12">
        {/* Condensed Hero Section */}
        <section className="text-center py-6">
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-3">
            Find <span className="text-outlined">Royalty Cleaning</span> Near You
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Serving 200+ cities across Southern California with professional cleaning services
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:951-999-4546"
              className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
            >
              📞 (951) 999-4546
            </a>
            <Link
              to="/#quote"
              className="bg-card border-2 border-accent px-8 py-3 rounded-xl font-bold hover:bg-accent/10 transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </section>

        {/* Interactive Map - NOW FIRST */}
        <section>
          <InteractiveMapGoogle />
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
