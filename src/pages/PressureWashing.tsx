import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceBookingForm from "@/components/ServiceBookingForm";
import PressureWashingGallery from "@/components/PressureWashingGallery";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Zap, Leaf, ShieldCheck, Camera, Siren, BadgeCheck, Building2, Home, Square, SprayCan, Trash2, Car, Umbrella, Droplet, SquareActivity, Sun, Star, Award, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/pressure-washing/hero/pressure-washing-action.jpg";
import concreteBefore from "@/assets/pressure-washing/before-after/concrete-sidewalk-before-after.jpg";
import drivewayBefore from "@/assets/pressure-washing/before-after/driveway-transformation.jpg";
import deckBefore from "@/assets/pressure-washing/before-after/wood-deck-restoration.jpg";
import roofBefore from "@/assets/pressure-washing/before-after/tile-roof-before-after.jpg";
import buildingBefore from "@/assets/pressure-washing/before-after/building-exterior-cleaning.jpg";
import collageBefore from "@/assets/pressure-washing/before-after/deck-siding-restoration-collage.jpg";
import { commercialPressureWashingServices, residentialPressureWashingServices, pressureWashingTestimonials, pressureWashingBenefits } from "@/data/locations";

const PressureWashing = () => {
  const beforeAfterImages = [
    { before: concreteBefore, after: concreteBefore, title: "Concrete Sidewalk Cleaning", service: "concrete", location: "Orange County, CA" },
    { before: drivewayBefore, after: drivewayBefore, title: "Driveway Transformation", service: "driveway", location: "Riverside, CA" },
    { before: deckBefore, after: deckBefore, title: "Wood Deck Restoration", service: "deck", location: "Irvine, CA" },
    { before: roofBefore, after: roofBefore, title: "Tile Roof Cleaning", service: "roof", location: "San Diego, CA" },
    { before: buildingBefore, after: buildingBefore, title: "Building Exterior Cleaning", service: "building", location: "Los Angeles, CA" },
    { before: collageBefore, after: collageBefore, title: "Deck & Siding Restoration", service: "deck", location: "San Bernardino, CA" }
  ];

  const iconMap: Record<string, any> = {
    "building": Building2,
    "square": Square,
    "home": Home,
    "spray-can": SprayCan,
    "trash-2": Trash2,
    "car": Car,
    "umbrella": Umbrella,
    "droplet": Droplet,
    "square-activity": SquareActivity,
    "sun": Sun,
    "zap": Zap,
    "leaf": Leaf,
    "shield-check": ShieldCheck,
    "camera": Camera,
    "siren": Siren,
    "badge-check": BadgeCheck
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Royalty Pressure Washing | Commercial & Residential Power Washing in Southern California"
        description="Commercial and residential pressure washing, concrete cleaning, exterior building wash, graffiti removal, roof cleaning (TPO, metal, tile), parking garage cleaning, awning & canopy cleaning, and storm drain cleaning across Southern California. Licensed, insured, EPA compliant."
      />
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional pressure washing action shot - Royalty Pressure Washing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 text-3d">
            Royalty Pressure Washing
          </h1>
          <p className="text-3xl md:text-4xl text-gold font-bold mb-6">
            Professional Commercial & Residential Power Washing<br />Across Southern California
          </p>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
            We're not just cleaning surfaces—we're protecting reputations. Disciplined, eco-conscious power washing for businesses, HOAs, and homeowners.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Shield className="w-6 h-6 text-accent" />
              <span className="font-semibold">Licensed • Bonded • Insured</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Award className="w-6 h-6 text-accent" />
              <span className="font-semibold">EPA/CWA Compliant Methods</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Star className="w-6 h-6 text-accent fill-accent" />
              <span className="font-semibold">5-Star Rated</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="accent" size="lg" className="text-xl py-7 px-10">
              <a href="#quote-form">Get a Free Quote</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-xl py-7 px-10 bg-white/10 text-white border-white hover:bg-white hover:text-foreground">
              <a href="tel:+19519994546">Call (951) 999-4546</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-6">
            We're In the People Business<br />That Happens to Be Cleaning
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-4xl mx-auto">
            Royalty Pressure Washing was built on structure, consistency, and care. From storefronts and parking garages to homes and HOAs, we clean with intention—adjusting pressure and temperature to match each surface.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-accent/30 hover:border-accent transition-all hover:shadow-accent-glow">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Advanced Systems</h3>
                <p className="text-sm text-muted-foreground">Up to 4,200 PSI & 250°F steam</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-accent/30 hover:border-accent transition-all hover:shadow-accent-glow">
              <CardContent className="p-6 text-center">
                <Leaf className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Eco-Friendly</h3>
                <p className="text-sm text-muted-foreground">Surface-safe detergents, eco-friendly process</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-accent/30 hover:border-accent transition-all hover:shadow-accent-glow">
              <CardContent className="p-6 text-center">
                <Camera className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Photo Documentation</h3>
                <p className="text-sm text-muted-foreground">Proactive communication and documentation</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-accent/30 hover:border-accent transition-all hover:shadow-accent-glow">
              <CardContent className="p-6 text-center">
                <ShieldCheck className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Flexible Scheduling</h3>
                <p className="text-sm text-muted-foreground">Multi-site portfolios & HOAs welcome</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commercial Services Section */}
      <section className="py-20 px-4 md:px-8 bg-muted/30" id="commercial">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-4">
            Commercial Pressure Washing Services
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Consistency, compliance, and curb appeal—handled. Our commercial division serves shopping centers, office parks, warehouses, restaurants, hotels, schools, HOAs, and multi-site portfolios across SoCal with reliable, scalable cleaning plans.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8">
            {commercialPressureWashingServices.map((service) => {
              const IconComponent = iconMap[service.icon] || Building2;
              return (
                <Link
                  key={service.slug}
                  to={`/pressure-washing/${service.slug}`}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all hover:scale-105 border-2 hover:border-accent">
                    <CardContent className="p-6">
                      <IconComponent className="w-10 h-10 text-accent mb-4" />
                      <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" size="sm" className="w-full group-hover:border-accent group-hover:text-accent">
                        Learn More →
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Compliance Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <ShieldCheck className="w-6 h-6 text-accent" />
              <span>OSHA Aware Work Practices</span>
            </div>
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Leaf className="w-6 h-6 text-accent" />
              <span>EPA/CWA Compliant</span>
            </div>
          </div>

          <div className="text-center">
            <Button asChild variant="accent" size="lg" className="text-xl">
              <a href="#quote-form">Request a Commercial Quote</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Residential Services Section */}
      <section className="py-20 px-4 md:px-8" id="residential">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-4">
            Residential Pressure Washing Services
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Give your home the royal treatment. Our residential pressure washing and soft-wash systems safely remove mildew, algae, dirt, and stains—reviving curb appeal while protecting paint, plants, and surfaces.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {residentialPressureWashingServices.map((service) => {
              const IconComponent = iconMap[service.icon] || Home;
              return (
                <Link
                  key={service.slug}
                  to={`/pressure-washing/${service.slug}`}
                  className="group"
                >
                  <Card className="h-full bg-gradient-primary text-primary-foreground hover:scale-105 transition-transform">
                    <CardContent className="p-8">
                      <IconComponent className="w-14 h-14 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-center mb-4">
                        {service.name}
                      </h3>
                      <p className="text-sm opacity-90 text-center mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" size="sm" className="w-full bg-white text-foreground hover:bg-white/90">
                        Learn More →
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Safety Notes */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Surface-appropriate pressure & temperature</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Eco-friendly detergents</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Plant and pet conscious</span>
            </div>
          </div>

          <div className="text-center">
            <Button asChild variant="accent" size="lg" className="text-xl">
              <a href="#quote-form">Book a Home Service</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Before/After Gallery Section */}
      <section className="py-20 px-4 md:px-8 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-6">
            See The <span className="text-gold text-3d">Royal</span> Transformation
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Before and after results from real projects across Southern California
          </p>
          <PressureWashingGallery images={beforeAfterImages} filterEnabled={true} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-12">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pressureWashingTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-accent/30">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6 text-lg">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-lg">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 text-2xl font-bold">
              <Star className="w-8 h-8 text-accent fill-accent" />
              <Star className="w-8 h-8 text-accent fill-accent" />
              <Star className="w-8 h-8 text-accent fill-accent" />
              <Star className="w-8 h-8 text-accent fill-accent" />
              <Star className="w-8 h-8 text-accent fill-accent" />
              <span className="ml-2">Average 5.0 Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Royalty Section */}
      <section className="py-20 px-4 md:px-8 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-12">
            Why Choose <span className="text-gold text-3d">Royalty</span> Pressure Washing?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pressureWashingBenefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon] || CheckCircle;
              return (
                <Card key={index} className="border-2 border-accent/30 hover:border-accent transition-all hover:shadow-accent-glow">
                  <CardContent className="p-6">
                    <IconComponent className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Serving All of Southern California
          </h2>
          <p className="text-2xl text-accent font-bold mb-8">
            Los Angeles • Orange • Riverside • San Bernardino • San Diego • Ventura
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" size="lg">
              <Link to="/locations">View All Service Cities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Let's Revitalize Your Property
          </h2>
          <p className="text-2xl mb-8 opacity-90">
            From homes to high-rises, we deliver clean that lasts and service you'll remember. Get a fast quote today and experience the Royalty standard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button asChild variant="accent" size="lg" className="text-xl py-7 px-10">
              <a href="#quote-form">Get a Free Quote</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-xl py-7 px-10 bg-white text-foreground hover:bg-white/90">
              <a href="tel:+19519994546">Call (951) 999-4546</a>
            </Button>
          </div>
          <p className="text-lg opacity-80">
            Los Angeles • Orange • Riverside • San Bernardino • San Diego • Ventura
          </p>
        </div>
      </section>

      {/* Enhanced Quote Form */}
      <section className="py-20 px-4 md:px-8 bg-muted/30" id="quote-form">
        <div className="container mx-auto max-w-4xl">
          <ServiceBookingForm serviceName="Pressure Washing" showPressureWashingFields={true} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PressureWashing;
