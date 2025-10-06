import ServicePageTemplate from "@/components/ServicePageTemplate";
import heroImage from "@/assets/hero-cleaning-team.jpg";

const SolarPanelCleaning = () => {
  const benefits = [
    "Maximize energy efficiency",
    "Safe cleaning methods for panels",
    "Residential & commercial service",
    "Bird proofing & control available",
    "Regular maintenance plans",
    "Fully insured professionals",
    "Eco-friendly cleaning solutions",
    "Improve panel lifespan",
  ];

  const services = [
    "Residential Solar Panel Cleaning",
    "Commercial Solar Panel Cleaning",
    "Solar Panel Maintenance Plans",
    "Hard Water Spot Removal",
    "Bird Proofing & Control",
    "Panel Inspection Services",
    "Soft Wash Cleaning",
    "Emergency Cleaning Services",
  ];

  const beforeAfterImages = [
    {
      before: heroImage,
      after: heroImage,
      title: "Residential Solar Panel Cleaning",
    },
    {
      before: heroImage,
      after: heroImage,
      title: "Commercial Solar Array",
    },
  ];

  return (
    <ServicePageTemplate
      title="Solar Panel Cleaning"
      description="Keep your solar panels performing at peak efficiency with professional cleaning"
      heroImage={heroImage}
      benefits={benefits}
      services={services}
      beforeAfterImages={beforeAfterImages}
    >
      <section className="max-w-4xl mx-auto prose prose-lg">
        <h3 className="text-3xl font-black text-foreground">
          Professional Solar Panel Cleaning Services
        </h3>
        <p className="text-muted-foreground">
          Looking for <strong>solar panel cleaning near me</strong>? Dirty solar panels can lose
          20-30% of their efficiency. Royalty Cleaning Services provides professional solar panel
          cleaning throughout Southern California, helping you maximize your investment and energy
          production.
        </p>
        <p className="text-muted-foreground">
          We use soft washing techniques and purified water systems that safely remove dust, pollen,
          bird droppings, and mineral deposits without damaging your panels. Our bird proofing
          services protect your investment from nesting and debris accumulation.
        </p>
      </section>
    </ServicePageTemplate>
  );
};

export default SolarPanelCleaning;
