import ServicePageTemplate from "@/components/ServicePageTemplate";
import heroImage from "@/assets/hero-cleaning-team.jpg";

const RoofCleaning = () => {
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
      before: heroImage,
      after: heroImage,
      title: "Residential Roof Cleaning",
    },
    {
      before: heroImage,
      after: heroImage,
      title: "Commercial Roof Restoration",
    },
  ];

  return (
    <ServicePageTemplate
      title="Roof Cleaning Services"
      description="Professional roof cleaning to extend lifespan and restore your home's beauty"
      heroImage={heroImage}
      benefits={benefits}
      services={services}
      beforeAfterImages={beforeAfterImages}
    >
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
    </ServicePageTemplate>
  );
};

export default RoofCleaning;
