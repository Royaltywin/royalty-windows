import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Home, Building2, Building } from "lucide-react";

interface WindowCleaningCityTemplateProps {
  cityName: string;
  citySlug: string;
  countyName: string;
  countySlug: string;
  nearbyCities?: Array<{ name: string; slug: string }>;
}

const WindowCleaningCityTemplate = ({
  cityName,
  citySlug,
  countyName,
  countySlug,
  nearbyCities = [],
}: WindowCleaningCityTemplateProps) => {
  const pageTitle = `Best Window Cleaning in ${cityName}, CA | Residential, Commercial & High-Rise`;
  const metaDescription = `Royalty Window Cleaning serves ${cityName} with streak-free interior/exterior window washing, screen cleaning, hard-water stain removal, post-construction cleanup, and maintenance plans.`;
  const pageUrl = `https://getroyaltyservices.com/window-cleaning/${countySlug}/${citySlug}`;

  const services = [
    {
      title: "Residential Window Cleaning",
      description: "Interior/exterior glass, tracks, sills, frames, screens; hard-to-reach windows, skylights, French panes.",
      icon: Home,
    },
    {
      title: "Commercial Window Cleaning",
      description: "Storefronts, restaurants, offices, showrooms; after-hours options to reduce disruption.",
      icon: Building2,
    },
    {
      title: "High-Rise & Rope Access",
      description: "Rope access, boom/scissor lift; OSHA-aware practices; water-fed pole up to 5–6 stories.",
      icon: Building,
    },
    {
      title: "Hard Water Stain Removal",
      description: "Mineral deposit removal; glass restoration best-practice approach.",
      icon: CheckCircle,
    },
    {
      title: "Post-Construction Window Cleaning",
      description: "Paint/adhesive removal; razor-safe protocols; debris and sticker removal.",
      icon: CheckCircle,
    },
    {
      title: "Maintenance Plans",
      description: "Monthly • Bi-Monthly • Quarterly; subscription pricing for predictable costs.",
      icon: CheckCircle,
    },
  ];

  const benefits = [
    "Streak-Free Guarantee (pure-water polish + microfiber finish)",
    "Safer Methods: ladders only when necessary; rope access by trained techs",
    "Eco-friendly, residue-free cleaning; safe for landscaping & pets",
    "Flexible scheduling; emergency/same-day when available",
  ];

  const faqs = [
    {
      question: "Do you clean screens & tracks?",
      answer: "Yes—both are included on most packages.",
    },
    {
      question: "Can you remove hard-water spots?",
      answer: "In most cases; we'll test and advise before restoring.",
    },
    {
      question: "How often should I clean windows?",
      answer: "Home: 2–4×/year; storefront: monthly/bi-weekly.",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Royalty Window Cleaning",
    image: "https://getroyaltyservices.com/assets/window-cleaning.jpg",
    telephone: "(951) 999-4546",
    email: "info@getroyaltyservices.com",
    url: pageUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressRegion: "CA",
      addressCountry: "US",
    },
    areaServed: [cityName, `${countyName} County`, "Southern California"],
    sameAs: [
      "https://www.facebook.com/royaltywindowcleaning",
      "https://www.instagram.com/royaltywindowcleaning",
    ],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Window Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Window Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "High-Rise Window Cleaning" } },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`window cleaners near me, window washing services ${cityName}, commercial window cleaning ${cityName}, high-rise window cleaning ${cityName}, affordable window cleaning ${cityName}`} />
        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Window Cleaning in {cityName}, CA
                </h1>
                <p className="text-sm text-muted-foreground/80 mb-4">
                  Royalty Window Cleaning {cityName} • Also known as {cityName} Window Cleaning
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground/90">
                  Streak-Free Interior & Exterior Window Washing for Homes & Businesses
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Royalty Window Cleaning delivers professional residential, commercial, and high-rise window cleaning in {cityName} and across {countyName}. We use pure-water, water-fed poles, safe ladders, and rope access for high-rise—leaving glass spotless and frames, tracks, and screens cleaned with care.
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-background/80 px-4 py-2 rounded-full border">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Fully Insured</span>
                  </div>
                  <div className="flex items-center gap-2 bg-background/80 px-4 py-2 rounded-full border">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Streak-Free Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 bg-background/80 px-4 py-2 rounded-full border">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Eco-Friendly Systems</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg">
                    <Link to={`/contact?service=window-cleaning&city=${citySlug}`}>
                      Get a Free Window Cleaning Quote
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-lg">
                    <a href="tel:+19519994546">Call (951) 999-4546</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                  Local, Reliable & Detail-Obsessed
                </h2>
                <p className="text-lg text-muted-foreground text-center mb-8">
                  We're a family-owned team serving {cityName} with interior & exterior window washing, screen cleaning, hard-water stain removal, post-construction glass cleanup, and scheduled maintenance plans. From single-story homes to high-rise buildings, we tailor the method to each surface for safe, consistent results.
                </p>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16 bg-secondary/5">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-background p-6 rounded-lg border hover:shadow-lg transition-shadow"
                  >
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Related Services in {cityName}</h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <Link
                  to={`/window-cleaning/${citySlug}/residential`}
                  className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border hover:shadow-lg transition-all hover:scale-105"
                >
                  <Home className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Residential Window Cleaning</h3>
                  <p className="text-muted-foreground mb-4">Interior & exterior home window washing with streak-free results</p>
                  <span className="text-primary font-medium">Learn More →</span>
                </Link>

                <Link
                  to={`/window-cleaning/${citySlug}/commercial`}
                  className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-6 rounded-lg border hover:shadow-lg transition-all hover:scale-105"
                >
                  <Building2 className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Commercial Window Cleaning</h3>
                  <p className="text-muted-foreground mb-4">Professional storefront and office building window services</p>
                  <span className="text-secondary font-medium">Learn More →</span>
                </Link>

                <Link
                  to={`/window-cleaning/${citySlug}/high-rise`}
                  className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-lg border hover:shadow-lg transition-all hover:scale-105"
                >
                  <Building className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">High-Rise Window Cleaning</h3>
                  <p className="text-muted-foreground mb-4">Rope access and lift-based services for tall buildings</p>
                  <span className="text-accent font-medium">Learn More →</span>
                </Link>
              </div>
            </div>
          </section>

          {/* How We Work */}
          <section className="py-16 bg-secondary/5">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How We Work</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Assess & Protect</h3>
                  <p className="text-muted-foreground">
                    Walkthrough, identify glass types, protect interiors/exteriors.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Pure-Water / Hand Detail</h3>
                  <p className="text-muted-foreground">
                    Water-fed pole for exterior + hand detailing; tracks/screens cleaned.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Final Check</h3>
                  <p className="text-muted-foreground">
                    Quality control with you; photos upon request.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Us</h2>
              <div className="max-w-3xl mx-auto space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Service Area */}
          {nearbyCities.length > 0 && (
            <section className="py-16 bg-secondary/5">
              <div className="container mx-auto px-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                  We Serve {cityName} & Nearby
                </h3>
                <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-6">
                  {nearbyCities.map((city, index) => (
                    <Link
                      key={index}
                      to={`/window-cleaning/${countySlug}/${city.slug}`}
                      className="bg-background px-4 py-2 rounded-full border hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
                <p className="text-center">
                  <Link to="/window-cleaning" className="text-primary hover:underline">
                    See all locations →
                  </Link>
                </p>
              </div>
            </section>
          )}

          {/* FAQs */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Frequently Asked Questions
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-secondary/5 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for Crystal-Clear Windows in {cityName}?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact us today for a free quote on professional window cleaning services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to={`/contact?service=window-cleaning&city=${citySlug}`}>
                    Get a Free Quote
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:+19519994546">Call (951) 999-4546</a>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WindowCleaningCityTemplate;
