import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { MapPin, CheckCircle } from "lucide-react";
import { slugify } from "@/data/locations";

interface CountyHubTemplateProps {
  countyName: string;
  countySlug: string;
  cities: string[];
  intro: string;
  popularServices: Array<{
    name: string;
    slug: string;
    city: string;
    citySlug: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

const CountyHubTemplate = ({
  countyName,
  countySlug,
  cities,
  intro,
  popularServices,
  faqs,
}: CountyHubTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`Royalty Cleaning Services in ${countyName}, CA – Window Cleaning, Pressure Washing & More`}
        description={`Serving ${countyName} cities including ${cities.slice(0, 5).join(", ")}. Window cleaning, pressure washing, solar panels cleaning, roof & gutters cleaning, post-construction clean up, graffiti removal.`}
      />
      <Header />

      <main className="container mx-auto px-4 md:px-8 py-16 space-y-16">
        {/* Breadcrumbs */}
        <nav className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          {" › "}
          <Link to="/locations" className="hover:text-primary">Locations</Link>
          {" › "}
          <span className="text-foreground">{countyName}</span>
        </nav>

        {/* Hero */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-foreground">
            <span className="text-outlined">{countyName}</span> Service Areas
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {intro}
          </p>
        </section>

        {/* Cities Grid */}
        <section>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8 text-center">
            Cities in {countyName}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {cities.sort().map((city) => (
              <Link
                key={city}
                to={`/locations/${countySlug}/${slugify(city)}`}
                className="flex items-center gap-2 p-4 bg-card border-2 border-accent/30 rounded-xl hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-semibold text-foreground">{city}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Services */}
        <section className="bg-card rounded-2xl p-8 border-2 border-accent/30">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8 text-center">
            Popular Services in {countyName}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularServices.map((service, index) => (
              <Link
                key={index}
                to={`/${service.slug}/${service.citySlug}`}
                className="p-6 bg-gradient-primary text-primary-foreground rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <CheckCircle className="w-6 h-6 mb-3" />
                <h3 className="font-bold text-lg mb-1">{service.name}</h3>
                <p className="text-sm opacity-90">in {service.city}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8 text-center">
            {countyName} FAQ
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border-2 border-accent/30">
                <h3 className="font-bold text-lg text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-primary text-primary-foreground rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Call (951) 999-4546 or request your free quote today
          </p>
          <Link
            to="/#quote"
            className="inline-block bg-background text-foreground px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
          >
            Get a Free Quote
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CountyHubTemplate;
