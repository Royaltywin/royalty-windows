import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Building, Shield, Users, AlertTriangle, CheckCircle } from "lucide-react";

interface HighRiseWindowCleaningTemplateProps {
  cityName: string;
  citySlug: string;
  countySlug: string;
  nearbyCities?: Array<{ name: string; slug: string }>;
}

const HighRiseWindowCleaningTemplate = ({
  cityName,
  citySlug,
  countySlug,
  nearbyCities = [],
}: HighRiseWindowCleaningTemplateProps) => {
  const pageTitle = `High-Rise Window Cleaning in ${cityName}, CA | Rope Access & Lift Services`;
  const metaDescription = `Professional rope access & lift-based window cleaning for mid/high-rise buildings in ${cityName}. Safe, efficient, documented high-rise services.`;
  const pageUrl = `https://getroyaltyservices.com/window-cleaning/${citySlug}/high-rise`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`high-rise window cleaning ${cityName}, rope access window cleaning, lift window cleaning, tall building window washing`} />
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero */}
          <section className="bg-gradient-to-br from-accent/5 via-background to-primary/5 py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Building className="h-16 w-16 text-accent mx-auto mb-6" />
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  High-Rise Window Cleaning in {cityName}, CA
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
                  Rope Access • Lift Work • Pure-Water Systems
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to={`/contact?service=highrise-window&city=${citySlug}`}>
                      Schedule a Site Walk
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
                <h2 className="text-3xl font-bold mb-6">Expert High-Rise Specialists</h2>
                <p className="text-lg text-muted-foreground">
                  Rope access specialists and lift-certified technicians clean towers safely and efficiently with minimal disruption. We handle mid-rise and high-rise buildings with professional equipment and OSHA-compliant practices.
                </p>
              </div>
            </div>
          </section>

          {/* Safety & Method */}
          <section className="py-16 bg-accent/5">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Safety & Method</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="bg-background p-6 rounded-lg border">
                  <Shield className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Job Hazard Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Pre-job safety assessment and planning
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg border">
                  <AlertTriangle className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Drop Zones & Barricades</h3>
                  <p className="text-sm text-muted-foreground">
                    Protected work areas for public safety
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg border">
                  <Users className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Trained Teams</h3>
                  <p className="text-sm text-muted-foreground">
                    Rope access certified & lift operators
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg border">
                  <CheckCircle className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Weather Monitoring</h3>
                  <p className="text-sm text-muted-foreground">
                    Continuous safety checks during work
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What We Clean */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">What We Clean</h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-lg border">
                  <Building className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Building Types</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Curtain wall systems</li>
                    <li>• Spandrel glass</li>
                    <li>• Mullions & frames</li>
                    <li>• Atriums & skylights</li>
                    <li>• Mid-rise to high-rise</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border">
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Access Methods</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Rope access (IRATA/SPRAT)</li>
                    <li>• Boom lifts</li>
                    <li>• Scissor lifts</li>
                    <li>• Water-fed pole systems</li>
                    <li>• Suspended scaffolding</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-16 bg-accent/5">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our High-Rise Services</h2>
              <div className="max-w-3xl mx-auto space-y-4">
                <div className="flex items-start gap-3 bg-background p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Professional Documentation</h3>
                    <p className="text-sm text-muted-foreground">
                      Detailed reports, photos, and compliance records for every project
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-background p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Flexible Scheduling</h3>
                    <p className="text-sm text-muted-foreground">
                      Work around tenant schedules with minimal disruption to operations
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-background p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">OSHA Compliant</h3>
                    <p className="text-sm text-muted-foreground">
                      All safety protocols followed with certified equipment and trained personnel
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-background p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Efficient Methods</h3>
                    <p className="text-sm text-muted-foreground">
                      Advanced equipment and techniques for faster, safer completion
                    </p>
                  </div>
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
                      className="bg-accent/10 px-4 py-2 rounded-full border hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="py-16 bg-gradient-to-br from-accent/10 to-primary/10">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Request High-Rise Proposal</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's schedule a site walk to assess your high-rise building and provide a detailed proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to={`/contact?service=highrise-window&city=${citySlug}`}>
                    Schedule Site Walk
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

export default HighRiseWindowCleaningTemplate;
