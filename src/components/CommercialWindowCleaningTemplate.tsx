import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Building2, Clock, Camera, FileCheck, CheckCircle } from "lucide-react";

interface CommercialWindowCleaningTemplateProps {
  cityName: string;
  citySlug: string;
  countySlug: string;
  nearbyCities?: Array<{ name: string; slug: string }>;
}

const CommercialWindowCleaningTemplate = ({
  cityName,
  citySlug,
  countySlug,
  nearbyCities = [],
}: CommercialWindowCleaningTemplateProps) => {
  const pageTitle = `Commercial Window Cleaning in ${cityName}, CA | Business Storefront Services`;
  const metaDescription = `Reliable storefront & building window washing in ${cityName} with after-hours options, documentation, and maintenance plans for businesses.`;
  const pageUrl = `https://getroyaltyservices.com/window-cleaning/${citySlug}/commercial`;

  const industries = [
    "Retail & Shopping Centers",
    "Restaurants & Cafes",
    "Office Buildings",
    "Medical Facilities",
    "Hotels & Hospitality",
    "Corporate Campuses",
    "Industrial Facilities",
    "Fitness Centers",
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`commercial window cleaning ${cityName}, storefront window washing ${cityName}, business window cleaning, office building window cleaning`} />
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero */}
          <section className="bg-gradient-to-br from-secondary/5 via-background to-primary/5 py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Building2 className="h-16 w-16 text-secondary mx-auto mb-6" />
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Commercial Window Cleaning in {cityName}, CA
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
                  Storefronts, Restaurants, Offices & Campuses — On-Schedule, On-Brand
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to={`/contact?service=com-window&city=${citySlug}`}>
                      Request Commercial Quote
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
                <h2 className="text-3xl font-bold mb-6">Professional Business Window Care</h2>
                <p className="text-lg text-muted-foreground">
                  After-hours or before-open cleaning available. Programs for monthly/bi-weekly storefronts and quarterly campus cycles. Keep your business looking professional with sparkling clean windows.
                </p>
              </div>
            </div>
          </section>

          {/* Industries */}
          <section className="py-16 bg-secondary/5">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Industries We Serve</h2>
              <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="bg-background p-4 rounded-lg border text-center hover:shadow-lg transition-shadow"
                  >
                    <p className="font-medium">{industry}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Commercial Services</h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-6 rounded-lg border">
                  <Building2 className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Core Window Services</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Exterior/interior glass</li>
                    <li>• Frames & sills</li>
                    <li>• Water-fed pole to 5–6 stories</li>
                    <li>• Sticker/adhesive removal</li>
                    <li>• Post-construction cleanup</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border">
                  <CheckCircle className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Additional Services</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Sign cleaning</li>
                    <li>• Light fixture cleaning</li>
                    <li>• Pressure washing for fascia/entry</li>
                    <li>• Solar panel cleaning</li>
                    <li>• Maintenance programs</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-16 bg-secondary/5">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Why Businesses Choose Us</h2>
              <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="text-center">
                  <Clock className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Flexible Scheduling</h3>
                  <p className="text-sm text-muted-foreground">
                    After-hours and weekend availability
                  </p>
                </div>
                <div className="text-center">
                  <FileCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Documentation</h3>
                  <p className="text-sm text-muted-foreground">
                    COI on file, completion reports
                  </p>
                </div>
                <div className="text-center">
                  <Camera className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Photo Proof</h3>
                  <p className="text-sm text-muted-foreground">
                    Before/after documentation available
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Consistent Crews</h3>
                  <p className="text-sm text-muted-foreground">
                    Same trained team every visit
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Nearby Cities */}
          {nearbyCities.length > 0 && (
            <section className="py-16 bg-background">
              <div className="container mx-auto px-4">
                <h3 className="text-2xl font-bold mb-8 text-center">Serving Nearby</h3>
                <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                  {nearbyCities.map((city, index) => (
                    <Link
                      key={index}
                      to={`/window-cleaning/${countySlug}/${city.slug}`}
                      className="bg-secondary/10 px-4 py-2 rounded-full border hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="py-16 bg-gradient-to-br from-secondary/10 to-primary/10">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Get a Business Quote</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your commercial window cleaning needs and create a custom maintenance plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to={`/contact?service=com-window&city=${citySlug}`}>
                    Request Commercial Quote
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

export default CommercialWindowCleaningTemplate;
