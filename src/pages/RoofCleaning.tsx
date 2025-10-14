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
    "30+ years serving Southern California",
    "Extend your roof's lifespan significantly",
    "Remove algae, moss, mildew & stains",
    "Safe soft washing methods (no high pressure damage)",
    "All roof types serviced (tile, asphalt, metal, clay)",
    "Prevent costly repairs & premature replacement",
    "Fully licensed, bonded & insured professionals",
    "Restore curb appeal & property value",
    "Biodegradable cleaning solutions",
    "Gutter & drain protection during service",
    "Complimentary roof inspection included",
    "Serving 1,000s of satisfied clients",
  ];

  const services = [
    "Residential Roof Cleaning",
    "Commercial Roof Cleaning",
    "Asphalt Shingle Cleaning",
    "Tile & Clay Roof Cleaning",
    "Metal Roof Cleaning",
    "Concrete Tile Roof Cleaning",
    "Moss & Algae Removal",
    "Lichen Removal",
    "Soft Washing Services",
    "Pressure Washing (when appropriate)",
    "Skylight Cleaning",
    "Solar Panel Cleaning (on roof)",
    "Preventative Maintenance Plans",
    "Emergency Roof Cleaning",
    "Gutter Cleaning During Service",
    "Post-Construction Roof Cleaning",
  ];

  const residentialFeatures = [
    "Gentle soft-wash systems safe for all roofing materials",
    "Remove black streaks, green algae, and organic stains",
    "Protect shingles, tiles, and underlayment from damage",
    "Improve energy efficiency by restoring reflectivity",
    "Enhance curb appeal and increase home value",
    "Extend roof life by 5-10 years with regular cleaning",
  ];

  const commercialFeatures = [
    "Minimize business disruption with flexible scheduling",
    "Large-scale equipment for efficient cleaning",
    "TPO, EPDM, metal, and tile commercial roof expertise",
    "Comply with property management and insurance requirements",
    "Document service with before/after photos for records",
    "Prevent ponding water by clearing drains and scuppers",
  ];

  const faqs = [
    {
      question: "How often should I have my roof cleaned?",
      answer: "Most residential roofs benefit from professional cleaning every 2-3 years. However, homes in humid climates, under heavy tree coverage, or with visible algae/moss growth may need annual cleaning. Commercial roofs should be inspected and cleaned annually to maintain warranties and prevent drainage issues."
    },
    {
      question: "Will pressure washing damage my roof?",
      answer: "High-pressure washing can absolutely damage shingles, tiles, and roof membranes. That's why Royalty Cleaning Services uses soft washing techniques—low-pressure application of specialized cleaning solutions that safely remove organic growth without damaging your roofing materials. We adjust our methods based on your specific roof type."
    },
    {
      question: "What causes those black streaks on my roof?",
      answer: "Those unsightly black streaks are caused by Gloeocapsa Magma, a type of blue-green algae that feeds on the limestone filler in asphalt shingles. This organism not only looks bad but also retains moisture, which can accelerate roof deterioration. Professional cleaning removes the algae and helps prevent premature roof failure."
    },
    {
      question: "Can roof cleaning really extend my roof's lifespan?",
      answer: "Yes! Algae, moss, lichen, and debris hold moisture against your roof, leading to rot, underlayment damage, and premature shingle deterioration. Regular professional cleaning removes these damaging organisms and can extend your roof's life by 5-10 years, saving you thousands in premature replacement costs."
    },
    {
      question: "Is roof cleaning safe for all roof types?",
      answer: "Absolutely. Royalty Cleaning Services has 30+ years of experience with all roofing materials including asphalt shingles, concrete and clay tiles, metal roofing, slate, and commercial TPO/EPDM membranes. We customize our cleaning methods, pressure, and solutions for each specific roof type to ensure safe, effective cleaning."
    },
    {
      question: "Do you clean commercial and industrial roofs?",
      answer: "Yes! We specialize in commercial roof cleaning for retail centers, office buildings, warehouses, and industrial facilities. Our large-scale equipment efficiently cleans TPO, EPDM, metal, and tile commercial roofing systems. We work around your schedule to minimize business disruption and provide documentation for insurance and property management."
    },
    {
      question: "What areas do you serve?",
      answer: "Royalty Cleaning Services proudly serves all of Southern California, including Los Angeles County, Orange County, Riverside County, San Bernardino County, and San Diego County. We've been cleaning roofs throughout the region for over 30 years."
    },
    {
      question: "How long does roof cleaning take?",
      answer: "Most residential roof cleaning jobs are completed in 2-4 hours, depending on roof size, pitch, and condition. Commercial projects vary based on square footage and may be scheduled during off-hours. We'll provide a detailed timeline during your free estimate."
    },
    {
      question: "Do you offer any guarantees?",
      answer: "Yes! We stand behind our work with a satisfaction guarantee. We're fully licensed, bonded, and insured, giving you complete peace of mind. If you're not completely satisfied with our roof cleaning service, we'll make it right."
    },
    {
      question: "Will you damage my landscaping?",
      answer: "We take extensive precautions to protect your landscaping, including pre-wetting plants, covering sensitive vegetation, and using biodegradable cleaning solutions. Our experienced technicians have cleaned thousands of roofs without landscape damage."
    },
    {
      question: "Can I walk on my roof after cleaning?",
      answer: "We recommend waiting 24-48 hours before walking on your roof after cleaning to allow surfaces to fully dry and cleaning solutions to complete their work. We'll provide specific guidance based on your roof type and weather conditions."
    },
    {
      question: "How much does roof cleaning cost?",
      answer: "Roof cleaning costs vary based on roof size, pitch, material, condition, and accessibility. Most residential roof cleanings range from $300-$800. We offer free, no-obligation estimates with transparent pricing—no hidden fees. Contact us today for your personalized quote."
    },
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
            Welcome to Royalty Roof Cleaning – Southern California's Premier Roof Cleaning Experts
          </h3>
          <p className="text-muted-foreground">
            With over <strong>30 years of experience</strong>, Royalty Cleaning Services is Southern California's 
            most trusted name in professional roof cleaning. We've safely cleaned thousands of residential and 
            commercial roofs throughout Los Angeles, Orange, Riverside, San Bernardino, and San Diego counties.
          </p>
          <p className="text-muted-foreground">
            Searching for <strong>roof cleaning services near me</strong>? Our expert technicians specialize in 
            safe, effective roof cleaning that removes algae, moss, mildew, and stains without damaging your 
            roofing materials. We use advanced soft washing techniques that clean deeply while protecting your 
            investment.
          </p>
        </section>

        {/* Residential Roof Cleaning Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-black text-foreground mb-6">
              Residential Roof Cleaning
            </h3>
            <p className="text-muted-foreground mb-6">
              Your home is your largest investment. Protect it with professional roof cleaning that extends 
              roof life, prevents costly repairs, and restores your home's beauty.
            </p>
            <div className="space-y-3">
              {residentialFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={cleanTileRoofResidential} 
              alt="Clean residential tile roof" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Commercial Roof Cleaning Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
            <img 
              src={tileRoofPressureWashing} 
              alt="Commercial roof cleaning in progress" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-black text-foreground mb-6">
              Commercial Roof Cleaning
            </h3>
            <p className="text-muted-foreground mb-6">
              Protect your commercial property investment with professional roof maintenance. Clean roofs 
              last longer, improve energy efficiency, and satisfy insurance requirements.
            </p>
            <div className="space-y-3">
              {commercialFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-12 text-center">
            Frequently Asked <span className="text-gold text-3d">Questions</span>
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details 
                key={index} 
                className="group bg-card border-2 border-accent/30 rounded-2xl p-6 hover:border-accent transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-xl font-bold text-foreground pr-4">{faq.question}</h3>
                  <span className="text-accent text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-muted-foreground mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Trust Signals */}
        <section className="bg-gradient-primary text-primary-foreground rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Trusted by 1,000s of Southern California Property Owners
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div>
              <div className="text-5xl font-black mb-2">30+</div>
              <div className="text-xl font-semibold">Years of Experience</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">1,000s</div>
              <div className="text-xl font-semibold">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">100%</div>
              <div className="text-xl font-semibold">Licensed & Insured</div>
            </div>
          </div>
          <p className="text-xl mt-8 max-w-3xl mx-auto opacity-90">
            Family-owned and operated since 1993, we've built our reputation on quality workmanship, 
            fair pricing, and exceptional customer service. Your satisfaction is our guarantee.
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
