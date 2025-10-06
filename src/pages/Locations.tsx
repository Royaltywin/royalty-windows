import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CountyMap from "@/components/CountyMap";
import { counties, services, slugify } from "@/data/locations";
import { MapPin } from "lucide-react";

const Locations = () => {
  return (
    <div className="min-h-screen bg-background">
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
            Southern California Coverage
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Hover over a county to see all cities we serve
          </p>
          <CountyMap />
        </section>

        {/* Cities by County */}
        {Object.entries(counties).map(([countyKey, county]) => (
          <section key={countyKey}>
            <h2
              className="text-3xl md:text-4xl font-black text-foreground mb-6"
              style={{ color: county.color }}
            >
              <MapPin className="inline-block w-8 h-8 mr-2" />
              {county.name}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.key}
                  className="bg-card border-2 border-border rounded-2xl p-6 hover:border-accent transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {service.name}
                  </h3>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {county.cities.map((city) => (
                      <Link
                        key={city}
                        to={`/${service.key}/${slugify(city)}`}
                        className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        {service.name} {city}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default Locations;
