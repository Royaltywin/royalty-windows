import ServicePageTemplate from "@/components/ServicePageTemplate";
import heroImage from "@/assets/hero-cleaning-team.jpg";

const PressureWashing = () => {
  const benefits = [
    "Professional power washing equipment",
    "Residential & commercial expertise",
    "Soft washing for delicate surfaces",
    "Removes dirt, mold & mildew",
    "Eco-friendly cleaning solutions",
    "Water recovery systems available",
    "Fully licensed and insured",
    "Affordable pricing with free estimates",
  ];

  const services = [
    "Driveway & Concrete Cleaning",
    "House & Building Washing",
    "Deck & Patio Cleaning",
    "Sidewalk & Walkway Cleaning",
    "Parking Lot Cleaning",
    "Paver Cleaning & Sealing",
    "Soft Washing Services",
    "Sandblasting & Gum Removal",
  ];

  const beforeAfterImages = [
    {
      before: heroImage,
      after: heroImage,
      title: "Driveway Pressure Washing",
    },
    {
      before: heroImage,
      after: heroImage,
      title: "Commercial Building Exterior",
    },
  ];

  return (
    <ServicePageTemplate
      title="Pressure Washing Services"
      description="Transform your property with professional pressure washing and power cleaning"
      heroImage={heroImage}
      benefits={benefits}
      services={services}
      beforeAfterImages={beforeAfterImages}
    >
      <section className="max-w-4xl mx-auto prose prose-lg">
        <h3 className="text-3xl font-black text-foreground">
          Professional Pressure Washing Near You
        </h3>
        <p className="text-muted-foreground">
          Searching for <strong>pressure washing near me</strong>? Royalty Cleaning Services
          provides expert pressure washing and power washing throughout Southern California.
          We clean driveways, patios, decks, sidewalks, and building exteriors with professional
          equipment that removes years of buildup.
        </p>
        <p className="text-muted-foreground">
          Our soft washing services protect delicate surfaces while delivering exceptional results.
          From residential homes to commercial properties, we offer comprehensive exterior cleaning
          that restores curb appeal and protects your investment.
        </p>
      </section>
    </ServicePageTemplate>
  );
};

export default PressureWashing;
