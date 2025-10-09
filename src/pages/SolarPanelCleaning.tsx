import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import InteractiveMap from "@/components/InteractiveMap";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import ServiceBookingForm from "@/components/ServiceBookingForm";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Droplets, Camera, CheckCircle2, Star } from "lucide-react";

import heroImage from "@/assets/solar-panels/action-1.jpg";
import solarAction2 from "@/assets/solar-panels/action-2.jpg";
import solarAction3 from "@/assets/solar-panels/action-3.jpg";
import solarBeforeAfter from "@/assets/solar-panels/before-after-1.jpg";
import solarClean1 from "@/assets/solar-panels/clean-1.jpg";
import solarClean2 from "@/assets/solar-panels/clean-2.jpg";
import licensedBadge from "@/assets/badges/licensed-insured-bonded.jpg";
import satisfactionBadge from "@/assets/badges/satisfaction-guaranteed.jpg";

const SolarPanelCleaning = () => {
  const heroSlides = [
    {
      image: heroImage,
      title: "Professional Solar Panel Cleaning",
      description: "Maximize your energy efficiency with expert cleaning",
    },
    {
      image: solarAction2,
      title: "Commercial Solar Solutions",
      description: "Greater ROI, Sooner",
    },
    {
      image: solarAction3,
      title: "Residential Solar Care",
      description: "Protect your investment",
    },
    {
      image: solarClean1,
      title: "Bird Proofing & Protection",
      description: "Prevent damage and maintain efficiency",
    },
  ];

  const beforeAfterImages = [
    {
      before: solarBeforeAfter,
      after: solarClean1,
      title: "Residential Solar Panel Cleaning",
      category: "solar" as const,
    },
    {
      before: solarAction2,
      after: solarClean2,
      title: "Commercial Solar Array",
      category: "solar" as const,
    },
    {
      before: solarAction3,
      after: solarClean1,
      title: "Professional Panel Maintenance",
      category: "solar" as const,
    },
  ];

  const commercialHealthCheck = [
    "Panel efficiency assessment",
    "Wiring and connection inspection",
    "Inverter performance check",
    "Bird nest and debris removal",
    "Hard water spot analysis",
    "Shade and obstruction review",
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
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Solar Panel Cleaning & Bird Netting | Royalty Solar Panels Cleaning"
        description="Professional solar panel cleaning services in Southern California. Maximize energy efficiency, protect your investment, and improve panel lifespan with Royalty Cleaning Services."
      />
      <Header />

      <main>
        {/* Hero Section with Carousel */}
        <section className="relative h-[600px] md:h-[700px]">
          <HeroCarousel slides={heroSlides} />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center text-white px-4 max-w-5xl">
              <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-2xl">
                Royalty Solar Panels Cleaning
              </h1>
              <p className="text-2xl md:text-3xl font-bold mb-4 drop-shadow-lg">
                Trusted, Insured & Affordable Solar Cleaning + Bird Netting
              </p>
              <p className="text-lg md:text-xl mb-3 drop-shadow-lg">
                Christian-Owned • Over 200 Homes Protected • Licensed & Insured
              </p>
              <p className="text-lg md:text-xl mb-8 drop-shadow-lg">
                Increase Energy Production • Protect Your Roof • Improve Curb Appeal
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Button size="lg" variant="accent" className="text-xl px-8 py-6">
                  Commercial Solar Cleaning
                </Button>
                <Button size="lg" variant="outline" className="text-xl px-8 py-6 bg-white/20 backdrop-blur-sm hover:bg-white/30 border-white text-white">
                  Residential Solar Cleaning
                </Button>
                <Button size="lg" className="text-xl px-8 py-6" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get Free Quote
                </Button>
              </div>
              <div className="flex flex-wrap gap-4 justify-center text-sm font-semibold">
                <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4" /> Insured
                </span>
                <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Droplets className="w-4 h-4" /> RO/DI Pure Water
                </span>
                <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Camera className="w-4 h-4" /> Photo Proof
                </span>
                <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-4 h-4" /> 6-Point Health Check
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Map + County Finder */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-foreground">
              Find Your City in Southern California
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Select your county to see our local solar panel cleaning services and special offers
            </p>
            <InteractiveMap />
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-12 px-4 md:px-8 bg-accent/10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
              Connect With Us
            </h2>
            <p className="text-muted-foreground mb-6">
              Follow us for tips, before/after photos, and special promotions
            </p>
            <SocialMediaLinks iconSize={32} showLabels />
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-8 text-foreground">
              Locally Owned & Operated
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-center mb-8">
                Looking for <strong>solar panel cleaning near me</strong>? Dirty solar panels can lose
                20-30% of their efficiency. Royalty Cleaning Services provides professional solar panel
                cleaning throughout Southern California, helping you maximize your investment and energy
                production.
              </p>
              <p className="text-muted-foreground text-center">
                We use soft washing techniques and purified water systems that safely remove dust, pollen,
                bird droppings, and mineral deposits without damaging your panels. Our bird proofing
                services protect your investment from nesting and debris accumulation.
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center my-12">
              <img 
                src={licensedBadge} 
                alt="Licensed, Insured and Bonded Solar Panel Cleaning Service" 
                className="h-32 w-auto object-contain hover:scale-110 transition-transform"
              />
              <img 
                src={satisfactionBadge} 
                alt="100% Satisfaction Guaranteed Solar Panel Maintenance" 
                className="h-32 w-auto object-contain hover:scale-110 transition-transform"
              />
            </div>

            <div className="text-center">
              <Button size="lg" variant="accent" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Get a Free Quote
              </Button>
            </div>
          </div>
        </section>

        {/* Commercial Solar Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-foreground">
              Commercial Solar Panel Cleaning
            </h2>
            <p className="text-2xl font-bold text-center mb-8 text-accent">
              Greater ROI, Sooner
            </p>
            <div className="bg-background rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                6-Point Commercial Health Check
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {commercialHealthCheck.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button 
                  size="lg" 
                  variant="accent"
                  onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Request Commercial Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Residential Solar Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-8 text-foreground">
              Residential Solar Panel Cleaning
            </h2>
            <h3 className="text-2xl font-bold text-center mb-6 text-accent">
              Why Clean Solar Panels?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="text-xl font-bold mb-3 text-foreground">Maximize Efficiency</h4>
                <p className="text-muted-foreground">
                  Dust, pollen, and bird droppings block sunlight and reduce energy output by 20-30%
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="text-xl font-bold mb-3 text-foreground">Protect Investment</h4>
                <p className="text-muted-foreground">
                  Regular cleaning extends panel lifespan and maintains warranty coverage
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="text-xl font-bold mb-3 text-foreground">Improve Curb Appeal</h4>
                <p className="text-muted-foreground">
                  Clean panels look better and increase home value
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="text-xl font-bold mb-3 text-foreground">Bird Proofing</h4>
                <p className="text-muted-foreground">
                  Prevent nesting damage with professional bird netting solutions
                </p>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Button size="lg" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Schedule Residential Cleaning
              </Button>
            </div>
          </div>
        </section>

        {/* Maintenance Plans */}
        <section className="py-16 px-4 md:px-8 bg-secondary/30">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-foreground">
              Choose the Plan That Fits Your Budget
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              No long contracts • Cancel anytime • Satisfaction guaranteed
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                  <Button
                    variant={plan.highlighted ? "default" : "outline"}
                    className="w-full mt-6"
                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Enroll Today
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <BeforeAfterGallery images={beforeAfterImages} />

        {/* Why Choose Royalty */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-foreground">
              Local, Trusted, Faith-Led Service
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4 fill-yellow-400" />
                <h3 className="text-xl font-bold mb-2">5-Star Rated</h3>
                <p className="text-muted-foreground">#1 on Google and social media</p>
              </Card>
              <Card className="p-6">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
                <p className="text-muted-foreground">Fully bonded for your protection</p>
              </Card>
              <Card className="p-6">
                <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Satisfaction Guaranteed</h3>
                <p className="text-muted-foreground">100% money-back guarantee</p>
              </Card>
            </div>
            <SocialMediaLinks iconSize={28} />
            <div className="mt-8">
              <Button size="lg" variant="outline" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                See Before/After Photos
              </Button>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-16 px-4 md:px-8">
          <div className="container mx-auto max-w-3xl">
            <ServiceBookingForm serviceName="Solar Panel Cleaning" showSolarFields />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SolarPanelCleaning;
