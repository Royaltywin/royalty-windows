import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { CheckCircle, Phone } from "lucide-react";
import { services, slugify } from "@/data/locations";

interface CityHubTemplateProps {
  cityName: string;
  citySlug: string;
  countyName: string;
  countySlug: string;
  intro: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

const CityHubTemplate = ({
  cityName,
  citySlug,
  countyName,
  countySlug,
  intro,
  faqs,
}: CityHubTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`Royalty Cleaning Services ${cityName}, CA – Window Cleaning, Pressure Washing, Solar & More`}
        description={`Trusted cleaning pros in ${cityName}, ${countyName}. Window cleaning, pressure washing, solar panels cleaning, roof & gutters cleaning, post-construction clean up, graffiti removal. Call (951) 999-4546.`}
      />
      <Header />

      <main className="container mx-auto px-4 md:px-8 py-16 space-y-16">
        {/* Breadcrumbs */}
        <nav className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          {" › "}
          <Link to="/locations" className="hover:text-primary">Locations</Link>
          {" › "}
          <Link to={`/locations/${countySlug}`} className="hover:text-primary">{countyName}</Link>
          {" › "}
          <span className="text-foreground">{cityName}</span>
        </nav>

        {/* Hero */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-black text-foreground">
            Royalty Cleaning Services in{" "}
            <span className="text-outlined">{cityName}</span>, California
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {intro}
          </p>
        </section>

        {/* Services Grid */}
        <section>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8 text-center">
            Services We Offer in {cityName}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.key}
                to={`/${service.key}/${citySlug}`}
                className="group p-6 bg-card border-2 border-accent/30 rounded-xl hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.name} {cityName}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-gradient-primary text-primary-foreground rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            Serving {cityName} with Excellence
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:951-999-4546"
              className="flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
            >
              <Phone className="w-5 h-5" />
              (951) 999-4546
            </a>
            <Link
              to="/#quote"
              className="bg-white/20 backdrop-blur px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </section>

        {/* FAQs */}
        {faqs && faqs.length > 0 && (
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8 text-center">
              Frequently Asked Questions
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
        )}

        {/* Map Embed */}
        <section className="bg-card rounded-2xl p-4 border-2 border-accent/30">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(cityName + ", California")}&zoom=12`}
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map of ${cityName}, California`}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CityHubTemplate;
