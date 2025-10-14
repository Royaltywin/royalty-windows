import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ServiceBookingForm from "@/components/ServiceBookingForm";
import HeroCarousel from "@/components/HeroCarousel";
import { CheckCircle } from "lucide-react";
import tileRoofPressureWashing from "@/assets/roof-cleaning/tile-roof-pressure-washing.jpg";
import cleanTileRoofResidential from "@/assets/roof-cleaning/clean-tile-roof-residential.jpg";
import tileRoofBeforeAfter from "@/assets/roof-cleaning/tile-roof-before-after-wide.jpg";
import tileRoofMossRemoval from "@/assets/roof-cleaning/tile-roof-moss-removal.jpg";

const RoofCleaning = () => {
  const roofCleaningSlides = [
    {
      image: tileRoofBeforeAfter,
      title: "Professional Roof Cleaning Results",
      description: "See the dramatic difference our expert cleaning makes"
    },
    {
      image: cleanTileRoofResidential,
      title: "Residential Tile Roof Cleaning",
      description: "Beautiful, spotless roofs that enhance curb appeal"
    },
    {
      image: tileRoofPressureWashing,
      title: "Expert Roof Technicians at Work",
      description: "Trained professionals using safe soft-wash systems"
    },
    {
      image: tileRoofMossRemoval,
      title: "Moss & Algae Removal",
      description: "Removing harmful organic growth to extend roof lifespan"
    }
  ];

  const benefits = [
    "Extend your roof's lifespan",
    "Remove algae, moss & mildew",
    "Residential & commercial service",
    "Safe soft washing methods",
    "All roof types serviced",
    "Prevent costly repairs",
    "Fully insured professionals",
    "Restore curb appeal",
  ];

  const services = [
    "Residential Roof Cleaning",
    "Commercial Roof Cleaning",
    "Asphalt Shingle Cleaning",
    "Tile & Clay Roof Cleaning",
    "Metal Roof Cleaning",
    "Moss & Algae Removal",
    "Soft Washing Services",
    "Roof Maintenance Plans",
  ];

  const beforeAfterImages = [
    {
      before: tileRoofMossRemoval,
      after: cleanTileRoofResidential,
      title: "Residential Roof Transformation",
    },
    {
      before: tileRoofBeforeAfter,
      after: tileRoofBeforeAfter,
      title: "Commercial Roof Cleaning Results",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Carousel */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <HeroCarousel slides={roofCleaningSlides} className="absolute inset-0" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 text-3d">
            Roof Cleaning Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Professional roof cleaning to extend lifespan and restore your home's beauty
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 md:px-8 py-16 space-y-24">
        {/* Why Choose Us */}
        <section>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 text-center">
            Why Choose <span className="text-gold text-3d">Royalty</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-6 bg-card border-2 border-accent/30 rounded-2xl hover:border-accent transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Included */}
        <section>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 text-center">
            Our Services Include
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-gradient-primary text-primary-foreground rounded-xl font-semibold"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Before & After Gallery */}
        <section>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-12 text-center">
            See the <span className="text-gold text-3d">Difference</span>
          </h2>
          <BeforeAfterSlider images={beforeAfterImages} />
        </section>

        {/* Additional Content */}
        <section className="max-w-4xl mx-auto prose prose-lg">
          <h3 className="text-3xl font-black text-foreground">
            Professional Roof Cleaning Near You
          </h3>
          <p className="text-muted-foreground">
            Searching for <strong>roof cleaning services near me</strong>? Royalty Cleaning Services
            specializes in safe, effective roof cleaning for residential and commercial properties
            throughout Southern California. We remove algae, moss, mildew, and stains that can
            damage your roof and reduce its lifespan.
          </p>
          <p className="text-muted-foreground">
            Our soft washing techniques clean without high pressure that can damage shingles or tiles.
            We service all roof types including asphalt, tile, clay, and metal roofing systems.
            Regular roof cleaning protects your investment and maintains your property's value.
          </p>
        </section>

        {/* Booking Form */}
        <section id="quote">
          <ServiceBookingForm serviceName="Roof Cleaning Services" />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RoofCleaning;
