import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ServiceBookingForm from "@/components/ServiceBookingForm";
import { CheckCircle, Phone } from "lucide-react";

interface ServiceCityTemplateProps {
  serviceName: string;
  serviceSlug: string;
  cityName: string;
  citySlug: string;
  countyName: string;
  countySlug: string;
  title: string;
  metaDescription: string;
  heading: string;
  intro: string;
  whyChoose: string[];
  serviceOptions: string[];
  neighborhoods?: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  otherServices: Array<{
    name: string;
    slug: string;
  }>;
  isRoofCleaning?: boolean;
  expertiseHighlight?: string;
  residentialSection?: {
    title: string;
    subtitle: string;
    content: string;
    features: string[];
  };
  commercialSection?: {
    title: string;
    subtitle: string;
    content: string;
    features: string[];
  };
  valueProposition?: string;
}

const ServiceCityTemplate = ({
  serviceName,
  serviceSlug,
  cityName,
  citySlug,
  countyName,
  countySlug,
  title,
  metaDescription,
  heading,
  intro,
  whyChoose,
  serviceOptions,
  neighborhoods,
  faqs,
  otherServices,
  isRoofCleaning,
  expertiseHighlight,
  residentialSection,
  commercialSection,
  valueProposition,
}: ServiceCityTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={title}
        description={metaDescription}
        url={`https://getroyaltyservices.com/${serviceSlug}/${citySlug}/`}
      />
      <Header />

      <main className="container mx-auto px-4 md:px-8 py-16 space-y-16">
        {/* Breadcrumbs */}
        <nav className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          {" › "}
          <Link to="/locations" className="hover:text-primary">Services</Link>
          {" › "}
          <Link to={`/${serviceSlug}`} className="hover:text-primary">{serviceName}</Link>
          {" › "}
          <span className="text-foreground">{cityName}</span>
        </nav>

        {/* Hero */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-black text-foreground">
            {heading}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {intro}
          </p>
        </section>

        {/* Roof Cleaning: Expertise Highlight */}
        {isRoofCleaning && expertiseHighlight && (
          <section className="bg-gradient-primary text-primary-foreground rounded-2xl p-8 text-center">
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              {expertiseHighlight}
            </p>
          </section>
        )}

        {/* Roof Cleaning: Value Proposition */}
        {isRoofCleaning && valueProposition && (
          <section className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border-2 border-accent/30">
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6 text-center">
                Squeegee Pro Roof & Tile Cleaning
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {valueProposition}
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3 p-4 bg-background rounded-xl">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="font-semibold text-foreground">Experienced and Trained Roof Technicians</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background rounded-xl">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="font-semibold text-foreground">Soft Wash Systems Safe for All Roof Types</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background rounded-xl">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="font-semibold text-foreground">Biodegradable Cleaning Solutions</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background rounded-xl">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="font-semibold text-foreground">Gutter & Drain Protection During Service</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Why Choose Us */}
        <section className="bg-card rounded-2xl p-8 border-2 border-accent/30">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8 text-center">
            Why Choose Us for {serviceName} in {cityName}?
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-background rounded-xl"
              >
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Roof Cleaning: Residential & Commercial Split */}
        {isRoofCleaning && residentialSection && commercialSection && (
          <section className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Residential Section */}
            <div className="bg-card rounded-2xl p-8 border-2 border-accent/30">
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-3">
                {residentialSection.title}
              </h2>
              <h3 className="text-lg font-semibold text-accent mb-4">
                {residentialSection.subtitle}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {residentialSection.content}
              </p>
              <div className="space-y-3">
                {residentialSection.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Commercial Section */}
            <div className="bg-card rounded-2xl p-8 border-2 border-accent/30">
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-3">
                {commercialSection.title}
              </h2>
              <h3 className="text-lg font-semibold text-accent mb-4">
                {commercialSection.subtitle}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {commercialSection.content}
              </p>
              <div className="space-y-3">
                {commercialSection.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Service Options */}
        <section>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8 text-center">
            {serviceName} Options
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {serviceOptions.map((option, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-gradient-primary text-primary-foreground rounded-xl"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-semibold">{option}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Neighborhoods */}
        {neighborhoods && (
          <section className="text-center bg-card rounded-2xl p-8 border-2 border-accent/30">
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
              Serving Neighborhoods in {cityName}
            </h2>
            <p className="text-lg text-muted-foreground">{neighborhoods}</p>
          </section>
        )}

        {/* FAQs */}
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

        {/* CTA Section */}
        <section className="bg-gradient-primary text-primary-foreground rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            Ready to Schedule Your {serviceName}?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:951-999-4546"
              className="flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
            >
              <Phone className="w-5 h-5" />
              (951) 999-4546
            </a>
            <a
              href="#quote"
              className="bg-white/20 backdrop-blur px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        </section>

        {/* Other Services in City */}
        <section className="bg-card rounded-2xl p-8 border-2 border-accent/30">
          <h3 className="text-2xl font-black text-foreground mb-6 text-center">
            Also in {cityName}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherServices.map((service) => (
              <Link
                key={service.slug}
                to={`/${service.slug}/${citySlug}`}
                className="px-4 py-2 bg-accent/20 hover:bg-accent/40 text-foreground rounded-lg font-semibold transition-colors"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Booking Form */}
        <section id="quote">
          <ServiceBookingForm serviceName={`${serviceName} in ${cityName}`} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceCityTemplate;
