import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ServiceBookingForm from "@/components/ServiceBookingForm";
import HeroCarousel from "@/components/HeroCarousel";
import SEOHead from "@/components/SEOHead";
import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-cleaning-team.jpg";

const WindowCleaning = () => {
  const windowCleaningSlides = [
    {
      image: heroImage,
      title: "Professional Window Cleaning Results",
      description: "Crystal-clear, streak-free windows that sparkle"
    },
    {
      image: heroImage,
      title: "Residential Window Cleaning",
      description: "Beautiful, spotless windows that enhance your home's appeal"
    },
    {
      image: heroImage,
      title: "Commercial Window Cleaning",
      description: "Professional image with pristine windows for your business"
    },
    {
      image: heroImage,
      title: "Hard Water Stain Removal",
      description: "Restoring clarity to windows damaged by mineral deposits"
    }
  ];

  const benefits = [
    "30+ years serving Southern California",
    "Crystal-clear, streak-free results guaranteed",
    "Interior & exterior window cleaning",
    "Track, screen & sill cleaning included",
    "Hard water stain removal specialists",
    "Eco-friendly, biodegradable solutions",
    "Fully licensed, bonded & insured",
    "Residential & commercial expertise",
    "High-rise & multi-story capabilities",
    "Post-construction cleaning specialists",
    "Flexible scheduling for your convenience",
    "Serving 1,000s of satisfied clients",
  ];

  const services = [
    "Residential Window Cleaning",
    "Commercial Window Cleaning",
    "Exterior Window Cleaning",
    "Interior Window Cleaning",
    "Window Tracks & Screens",
    "Window Sill Cleaning",
    "Post-Construction Window Cleaning",
    "Hard Water Stain Removal",
    "Mineral Deposit Removal",
    "High-Rise Window Cleaning",
    "Glass Restoration Services",
    "Chandelier & Fixture Cleaning",
    "Skylight Cleaning",
    "Mirror Cleaning",
    "Regular Maintenance Plans",
    "Emergency Cleaning Services",
  ];

  const residentialFeatures = [
    "Streak-free cleaning inside and out for sparkling results",
    "Remove hard water stains, mineral deposits, and oxidation",
    "Clean tracks, screens, and sills as part of every service",
    "Enhance curb appeal and increase natural light",
    "Safe methods that protect your windows and frames",
    "Flexible scheduling including weekends for your convenience",
  ];

  const commercialFeatures = [
    "Maintain professional appearance for clients and employees",
    "Flexible scheduling to minimize business disruption",
    "High-rise and multi-story window cleaning capabilities",
    "Retail storefronts, office buildings, and commercial complexes",
    "Regular maintenance programs for consistent results",
    "Fully insured with comprehensive liability coverage",
  ];

  const faqs = [
    {
      question: "How often should I have my windows professionally cleaned?",
      answer: "Most residential properties benefit from professional window cleaning 2-4 times per year (quarterly or semi-annually). However, homes near the ocean, in dusty areas, or with heavy tree coverage may need more frequent cleaning. Commercial properties typically need monthly or quarterly service to maintain a professional appearance."
    },
    {
      question: "Do you clean both inside and outside windows?",
      answer: "Yes! Our standard window cleaning service includes both interior and exterior surfaces, plus tracks, screens, and sills. We provide complete window care from top to bottom, ensuring every aspect of your windows is spotless. If you only need exterior cleaning, we offer that as a separate service option."
    },
    {
      question: "Can you remove hard water stains from my windows?",
      answer: "Absolutely! Royalty Cleaning Services specializes in hard water stain removal using professional-grade tools and solutions. Hard water stains are caused by mineral deposits (calcium, magnesium, lime) that etch into glass. While severe etching may be permanent, we can dramatically improve the appearance and often restore complete clarity to affected windows."
    },
    {
      question: "Are your cleaning solutions safe for my family and pets?",
      answer: "Yes! We use eco-friendly, biodegradable window cleaning solutions that are safe for your family, pets, and plants. Our professional formulas deliver superior cleaning power without harsh chemicals, leaving no toxic residues. Your safety and the environment are our top priorities."
    },
    {
      question: "What's included in your window cleaning service?",
      answer: "Our comprehensive window cleaning includes washing both sides of the glass, cleaning window tracks and sills, wiping down frames, and cleaning or dusting screens. We remove cobwebs, insect debris, and all dirt and grime. For commercial clients, we can also clean glass doors, partitions, and display cases."
    },
    {
      question: "Do you clean high-rise or multi-story buildings?",
      answer: "Yes! Royalty Cleaning Services has the equipment, training, and insurance to safely clean windows on buildings of any height. We use rope access systems, boom lifts, and scaffolding as needed. Our technicians are fully trained in high-rise safety protocols and have cleaned some of Southern California's tallest buildings."
    },
    {
      question: "Can you clean windows after construction or renovation?",
      answer: "Absolutely! Post-construction window cleaning is one of our specialties. Construction leaves windows covered in paint overspray, stickers, adhesive residue, concrete splatter, and dirt. We have the tools and expertise to safely remove all construction debris and restore your windows to pristine condition."
    },
    {
      question: "Will you damage my window screens?",
      answer: "No. We carefully remove screens, clean them with appropriate brushes and solutions, and reinstall them properly. Our experienced technicians have cleaned thousands of screens without damage. If we notice any pre-existing damage to screens or windows, we'll alert you immediately."
    },
    {
      question: "What areas do you serve?",
      answer: "Royalty Cleaning Services proudly serves all of Southern California, including Los Angeles County, Orange County, Riverside County, San Bernardino County, and San Diego County. We've been cleaning windows throughout the region for over 30 years."
    },
    {
      question: "How long does window cleaning take?",
      answer: "Timing varies based on the number and size of windows. Most residential homes take 2-4 hours for complete interior and exterior service. Commercial properties vary widely based on square footage, number of panes, and accessibility. We'll provide an accurate time estimate during your free quote."
    },
    {
      question: "Do I need to be home during the cleaning?",
      answer: "For exterior-only cleaning, you don't need to be home—we can complete the work while you're away. For interior cleaning, someone needs to be present to provide access. Many clients leave us a key or garage code for regular scheduled cleanings. We're fully insured and trustworthy."
    },
    {
      question: "How much does professional window cleaning cost?",
      answer: "Window cleaning costs depend on the number of windows, accessibility, condition, and whether interior cleaning is included. Most residential services range from $150-$500. Commercial pricing varies by square footage and frequency. We offer free, no-obligation estimates with transparent pricing—contact us today for your personalized quote."
    },
  ];

  const beforeAfterImages = [
    {
      before: heroImage,
      after: heroImage,
      title: "Residential Window Transformation",
    },
    {
      before: heroImage,
      after: heroImage,
      title: "Commercial Building Window Cleaning",
    },
  ];

  return (
    <>
      <SEOHead
        title="Professional Window Cleaning Services | Royalty Cleaning"
        description="Crystal-clear window cleaning for residential and commercial properties in Southern California. Streak-free results, eco-friendly solutions. Get a free estimate today!"
        url="https://getroyaltyservices.com/window-cleaning"
      />
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section with Carousel */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <HeroCarousel slides={windowCleaningSlides} className="absolute inset-0" />

          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 text-3d">
              Window Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Professional window cleaning for crystal-clear views and lasting shine
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
              Welcome to Royalty Window Cleaning – Southern California's Premier Window Cleaning Experts
            </h3>
            <p className="text-muted-foreground">
              With over <strong>30 years of experience</strong>, Royalty Cleaning Services is Southern California's 
              most trusted name in professional window cleaning. We've delivered crystal-clear results to thousands 
              of residential and commercial clients throughout Los Angeles, Orange, Riverside, San Bernardino, and 
              San Diego counties.
            </p>
            <p className="text-muted-foreground">
              Searching for <strong>window cleaners near me</strong>? Our expert technicians specialize in 
              streak-free window cleaning for homes and businesses of any size. From single-story residences to 
              high-rise commercial buildings, we have the equipment, expertise, and experience to make your windows 
              sparkle. We use eco-friendly solutions and professional techniques that deliver superior results without 
              damaging your windows or frames.
            </p>
          </section>

          {/* Residential Window Cleaning Section */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-black text-foreground mb-6">
                Residential Window Cleaning
              </h3>
              <p className="text-muted-foreground mb-6">
                Transform your home with sparkling clean windows. Our residential window cleaning service enhances 
                curb appeal, increases natural light, and protects your investment with regular maintenance.
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
                src={heroImage} 
                alt="Clean residential windows with crystal clear views" 
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          {/* Commercial Window Cleaning Section */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
              <img 
                src={heroImage} 
                alt="Commercial window cleaning in progress on office building" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-black text-foreground mb-6">
                Commercial Window Cleaning
              </h3>
              <p className="text-muted-foreground mb-6">
                First impressions matter. Maintain a professional image with sparkling clean windows that 
                welcome clients and create a pleasant environment for employees. We service all types of 
                commercial properties.
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
            <ServiceBookingForm serviceName="Window Cleaning Services" />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WindowCleaning;
