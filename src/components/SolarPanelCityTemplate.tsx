import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import HeroCarousel from "@/components/HeroCarousel";
import InteractiveMap from "@/components/InteractiveMap";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import ServiceBookingForm from "@/components/ServiceBookingForm";
import { Droplets, Shield, Camera, CheckCircle2 } from "lucide-react";
import heroImage1 from "@/assets/solar-panels/action-1.jpg";
import heroImage2 from "@/assets/solar-panels/action-2.jpg";
import heroImage3 from "@/assets/solar-panels/action-3.jpg";
import beforeAfter1Before from "@/assets/solar-panels/before-after-1.jpg";
import beforeAfter1After from "@/assets/solar-panels/clean-1.jpg";
import beforeAfter2Before from "@/assets/solar-panels/before-after-1.jpg";
import beforeAfter2After from "@/assets/solar-panels/clean-2.jpg";
import licensedBadge from "@/assets/badges/licensed-insured-bonded.jpg";
import satisfactionBadge from "@/assets/badges/satisfaction-guaranteed.jpg";

interface SolarPanelCityTemplateProps {
  cityName: string;
  citySlug: string;
  countyName: string;
  countySlug: string;
}

const SolarPanelCityTemplate = ({ cityName, citySlug, countyName, countySlug }: SolarPanelCityTemplateProps) => {
  const heroSlides = [
    {
      image: heroImage1,
      title: `Professional Solar Panel Cleaning in ${cityName}`,
      description: "Maximize efficiency • Protect your investment • Licensed & Insured"
    },
    {
      image: heroImage2,
      title: `Bird Netting & Solar Protection for ${cityName} Homes`,
      description: "Prevent damage • Extend panel life • Expert installation"
    },
    {
      image: heroImage3,
      title: `${cityName}'s Trusted Solar Maintenance Experts`,
      description: "200+ satisfied customers • Christian-owned • Same-day service"
    }
  ];

  const beforeAfterImages = [
    { before: beforeAfter1Before, after: beforeAfter1After, title: "Solar Panel Cleaning", category: "solar" as const },
    { before: beforeAfter2Before, after: beforeAfter2After, title: "Solar Panel Maintenance", category: "solar" as const }
  ];

  const commercialHealthCheck = [
    "Panel efficiency assessment",
    "Wiring and connection inspection",
    "Inverter performance check",
    "Bird nest and debris removal",
    "Hard water spot analysis",
    "Shade and obstruction review"
  ];

  const maintenancePlans = [
    {
      name: "Sunny Start",
      frequency: "Bi-Annual",
      description: "Perfect for homeowners in low-dust areas or those just starting to see the benefits of regular maintenance.",
      features: ["2 cleanings per year", "Hard water spot removal", "Panel inspection", "Basic bird proofing inspection"],
      highlighted: false
    },
    {
      name: "Brighter Boost",
      frequency: "Tri-Annual",
      description: "Ideal for coastal or high-pollen regions that require a bit more attention to maintain peak efficiency.",
      features: ["3 cleanings per year", "Priority scheduling", "Advanced bird proofing inspection", "Minor repair coordination"],
      highlighted: false
    },
    {
      name: "Full Sun Power Shield Plan",
      frequency: "Quarterly / $25/month",
      description: "Maximum efficiency with complete protection. Get 4 cleanings per year with subscription option.",
      features: ["4 cleanings per year", "Full 6-point health check", "Emergency service available", "Bird netting discounted", "$25/month subscription available"],
      highlighted: true
    }
  ];

  return (
    <>
      <SEOHead
        title={`Solar Panel Cleaning ${cityName}, CA | Royalty Solar Cleaning`}
        description={`Professional solar panel cleaning in ${cityName}, ${countyName}. Maximize efficiency, bird netting, maintenance plans. Licensed & insured. Call (951) 999-4546`}
        url={`https://royaltycleaningservices.com/solar-panel-cleaning/${citySlug}`}
      />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-background to-muted/20">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative">
            <HeroCarousel slides={heroSlides} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 drop-shadow-2xl pointer-events-none">
                Royalty Solar Panels Cleaning — {cityName}, {countyName}
              </h1>
              <p className="text-lg md:text-xl text-white/95 mb-6 max-w-2xl drop-shadow-lg pointer-events-none">
                Christian-Owned • 200+ Homes Cleaned • Licensed & Insured
              </p>
              <div className="flex flex-wrap gap-4 justify-center pointer-events-auto">
                <Button size="lg" className="text-lg px-8 py-6" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get Free Quote
                </Button>
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6" onClick={() => window.location.href = 'tel:9519994546'}>
                  Call (951) 999-4546
                </Button>
              </div>
            </div>
          </section>

          {/* Quick Trust Badges */}
          <section className="py-8 bg-muted/30 border-y">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-primary" />
                  <span className="font-semibold">RO/DI Pure Water</span>
                </div>
                <div className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Photo Proof Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-semibold">6-Point Inspection</span>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Map */}
          <section className="py-12 px-4 md:px-8">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-center mb-8">
                Serving {cityName} & Surrounding Areas
              </h2>
              <InteractiveMap />
            </div>
          </section>

          {/* Social Media */}
          <SocialMediaLinks />

          {/* About Section */}
          <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                Why Choose Royalty for Solar Cleaning in {cityName}?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                We're a locally-owned, Christian business serving {cityName} with integrity, expertise, and care. 
                Your solar panels are a major investment—we treat them that way.
              </p>
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <img src={licensedBadge} alt="Licensed, Insured & Bonded" className="h-24 object-contain" />
                <img src={satisfactionBadge} alt="100% Satisfaction Guaranteed" className="h-24 object-contain" />
              </div>
            </div>
          </section>

          {/* Commercial Solar Section */}
          <section className="py-16 px-4 md:px-8">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
                Commercial Solar Panel Cleaning in {cityName}
              </h2>
              <p className="text-center text-xl text-muted-foreground mb-12">
                6-Point Health Check Included with Every Service
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {commercialHealthCheck.map((item, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <p className="font-semibold text-lg">{item}</p>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6"
                  onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Request Commercial Quote
                </Button>
              </div>
            </div>
          </section>

          {/* Residential Solar Section */}
          <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
                Residential Solar Panel Cleaning in {cityName}
              </h2>
              <p className="text-center text-xl text-muted-foreground mb-12">
                Protect your home's solar investment
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3">Maximize Efficiency</h3>
                  <p className="text-muted-foreground">
                    Dust, pollen, and bird droppings block sunlight and reduce energy output by 20-30%
                  </p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3">Protect Investment</h3>
                  <p className="text-muted-foreground">
                    Regular cleaning extends panel lifespan and maintains warranty coverage
                  </p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3">Improve Curb Appeal</h3>
                  <p className="text-muted-foreground">
                    Clean panels look better and increase home value
                  </p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3">Bird Proofing</h3>
                  <p className="text-muted-foreground">
                    Prevent nesting damage with professional bird netting solutions
                  </p>
                </Card>
              </div>
            </div>
          </section>

          {/* Maintenance Plans */}
          <section className="py-16 px-4 md:px-8">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
                Choose the Plan That Fits Your Budget
              </h2>
              <p className="text-center text-xl text-muted-foreground mb-12">
                Flexible maintenance options for {cityName} homeowners
              </p>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {maintenancePlans.map((plan, index) => (
                  <Card 
                    key={index} 
                    className={`p-6 hover:shadow-lg transition-shadow ${
                      plan.highlighted ? 'ring-2 ring-primary shadow-xl relative' : ''
                    }`}
                  >
                    {plan.highlighted && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                        MOST POPULAR
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-lg text-primary font-semibold mb-4">{plan.frequency}</p>
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Before & After Gallery */}
          <section className="py-16 px-4 md:px-8 bg-muted/30">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-center mb-12">
                See the Royalty Difference
              </h2>
              <BeforeAfterGallery images={beforeAfterImages} />
            </div>
          </section>

          {/* Why Choose Royalty */}
          <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-8">
                Why {cityName} Trusts Royalty
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-bold mb-3">Licensed & Insured</h3>
                  <p className="text-muted-foreground">Full liability coverage for your peace of mind</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Photo Proof</h3>
                  <p className="text-muted-foreground">Before & after images sent to your phone</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">100% Satisfaction</h3>
                  <p className="text-muted-foreground">We don't leave until you're happy</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Christian Values</h3>
                  <p className="text-muted-foreground">Integrity and excellence in every job</p>
                </div>
              </div>
            </div>
          </section>

          {/* Quote Form */}
          <section id="quote-form" className="py-16 px-4 md:px-8">
            <div className="container mx-auto max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-center mb-8">
                Get Your Free Quote for {cityName}
              </h2>
              <ServiceBookingForm serviceName={`Solar Panel Cleaning - ${cityName}`} showSolarFields={true} />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SolarPanelCityTemplate;
