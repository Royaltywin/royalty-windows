import ServicePageTemplate from "@/components/ServicePageTemplate";
import heroImage from "@/assets/solar-panels/action-1.jpg";
import solarAction2 from "@/assets/solar-panels/action-2.jpg";
import solarAction3 from "@/assets/solar-panels/action-3.jpg";
import solarBeforeAfter from "@/assets/solar-panels/before-after-1.jpg";
import solarClean1 from "@/assets/solar-panels/clean-1.jpg";
import solarClean2 from "@/assets/solar-panels/clean-2.jpg";
import licensedBadge from "@/assets/badges/licensed-insured-bonded.jpg";
import satisfactionBadge from "@/assets/badges/satisfaction-guaranteed.jpg";

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
      before: solarBeforeAfter,
      after: solarClean1,
      title: "Residential Solar Panel Cleaning",
    },
    {
      before: solarAction2,
      after: solarClean2,
      title: "Commercial Solar Array",
    },
    {
      before: solarAction3,
      after: solarClean1,
      title: "Professional Panel Maintenance",
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
        
        {/* Trust Badges */}
        <div className="flex flex-wrap gap-6 justify-center my-8 not-prose">
          <img 
            src={licensedBadge} 
            alt="Licensed, Insured and Bonded Solar Panel Cleaning Service" 
            className="h-24 w-auto object-contain"
          />
          <img 
            src={satisfactionBadge} 
            alt="100% Satisfaction Guaranteed Solar Panel Maintenance" 
            className="h-24 w-auto object-contain"
          />
        </div>
      </section>
    </ServicePageTemplate>
  );
};

export default SolarPanelCleaning;
