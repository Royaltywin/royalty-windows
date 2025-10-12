import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Home, Sparkles, Shield } from "lucide-react";

interface ResidentialWindowCleaningTemplateProps {
  cityName: string;
  citySlug: string;
  countySlug: string;
  nearbyCities?: Array<{ name: string; slug: string }>;
}

const ResidentialWindowCleaningTemplate = ({
  cityName,
  citySlug,
  countySlug,
  nearbyCities = [],
}: ResidentialWindowCleaningTemplateProps) => {
  const pageTitle = `Residential Window Cleaning in ${cityName}, CA | Home Window Washing`;
  const metaDescription = `Professional residential window cleaning in ${cityName}. Interior/exterior window washing, screens, tracks, skylights. Streak-free guarantee for homes.`;
  const pageUrl = `https://getroyaltyservices.com/window-cleaning/${citySlug}/residential`;

  const packages = [
    {
      name: "Essential",
      description: "Exterior only",
      features: ["Exterior glass cleaning", "Basic frame wipe-down", "Quick turnaround"],
    },
    {
      name: "Complete",
      description: "Interior + exterior + screens + tracks",
      features: [
        "Interior & exterior glass",
        "Screen cleaning",
        "Track & sill cleaning",
        "Frame detailing",
        "Most popular choice",
      ],
    },
    {
      name: "Premium",
      description: "Complete + skylights + mirrors + spot treatment",
      features: [
        "Everything in Complete",
        "Skylight cleaning",
        "Mirror cleaning",
        "Hard-water spot treatment",
        "Light fixture wiping",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`residential window cleaning ${cityName}, home window washing ${cityName}, interior exterior window cleaning, window cleaners near me`} />
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero */}
          <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Home className="h-16 w-16 text-primary mx-auto mb-6" />
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Residential Window Cleaning in {cityName}, CA
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
                  Interior & Exterior, Tracks, Screens, Skylights — Streak-Free
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to={`/contact?service=res-window&city=${citySlug}`}>
                      Book Home Window Cleaning
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href="tel:+19519994546">Call (951) 999-4546</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Overview */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Safe, Spotless Home Window Washing</h2>
                <p className="text-lg text-muted-foreground">
                  We use pure-water poles and hand detailing to clean your home windows inside and out, protecting your floors, frames, and landscaping with careful attention to detail.
                </p>
              </div>
            </div>
          </section>

          {/* What's Included */}
          <section className="py-16 bg-secondary/5">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">What's Included</h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="bg-background p-6 rounded-lg border">
                  <Sparkles className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Complete Glass Care</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Interior & exterior glass</li>
                    <li>• Tracks & sills</li>
                    <li>• Frames & mullions</li>
                    <li>• Screen cleaning</li>
                  </ul>
                </div>
                <div className="bg-background p-6 rounded-lg border">
                  <Home className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Special Windows</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• French panes</li>
                    <li>• Transoms</li>
                    <li>• High/odd-shape windows</li>
                    <li>• Hard-to-reach areas</li>
                  </ul>
                </div>
                <div className="bg-background p-6 rounded-lg border">
                  <CheckCircle className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Add-Ons Available</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Skylight cleaning</li>
                    <li>• Mirror cleaning</li>
                    <li>• Shower glass</li>
                    <li>• Light fixtures</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Packages */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Our Packages</h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {packages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-lg border ${
                      index === 1
                        ? "bg-gradient-to-br from-primary/10 to-primary/5 border-primary"
                        : "bg-background"
                    }`}
                  >
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-muted-foreground mb-6">{pkg.description}</p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-16 bg-secondary/5">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Why Homeowners Choose Us</h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Pet & Plant Safe</h3>
                  <p className="text-muted-foreground">
                    Eco-friendly cleaning solutions that are safe for your family, pets, and landscaping.
                  </p>
                </div>
                <div className="text-center">
                  <Sparkles className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Streak-Free Finish</h3>
                  <p className="text-muted-foreground">
                    Pure-water systems and microfiber detailing ensure crystal-clear results every time.
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Respectful Service</h3>
                  <p className="text-muted-foreground">
                    Uniformed, background-checked technicians who treat your home with care.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Nearby Cities */}
          {nearbyCities.length > 0 && (
            <section className="py-16 bg-background">
              <div className="container mx-auto px-4">
                <h3 className="text-2xl font-bold mb-8 text-center">Serving Nearby Cities</h3>
                <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                  {nearbyCities.map((city, index) => (
                    <Link
                      key={index}
                      to={`/window-cleaning/${countySlug}/${city.slug}`}
                      className="bg-secondary/10 px-4 py-2 rounded-full border hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Get Your Residential Quote</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to={`/contact?service=res-window&city=${citySlug}`}>
                    Request a Quote
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

export default ResidentialWindowCleaningTemplate;
