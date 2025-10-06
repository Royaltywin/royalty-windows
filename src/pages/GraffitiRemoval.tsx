import ServicePageTemplate from "@/components/ServicePageTemplate";
import heroImage from "@/assets/hero-cleaning-team.jpg";

const GraffitiRemoval = () => {
  const benefits = [
    "Fast response times",
    "Safe for all surfaces",
    "Residential & commercial service",
    "Anti-graffiti coatings available",
    "Eco-friendly removal methods",
    "Fully insured professionals",
    "Same-day service available",
    "Prevent repeat vandalism",
  ];

  const services = [
    "Graffiti Removal",
    "Paint Removal",
    "Street Art Removal",
    "Pressure Washing Removal",
    "Chemical-Based Removal",
    "Anti-Graffiti Coatings",
    "Surface Restoration",
    "Emergency Response Services",
  ];

  const beforeAfterImages = [
    {
      before: heroImage,
      after: heroImage,
      title: "Commercial Building Graffiti Removal",
    },
    {
      before: heroImage,
      after: heroImage,
      title: "Residential Fence Cleaning",
    },
  ];

  return (
    <ServicePageTemplate
      title="Graffiti Removal Services"
      description="Fast, effective graffiti removal to restore your property's appearance"
      heroImage={heroImage}
      benefits={benefits}
      services={services}
      beforeAfterImages={beforeAfterImages}
    >
      <section className="max-w-4xl mx-auto prose prose-lg">
        <h3 className="text-3xl font-black text-foreground">
          Professional Graffiti Removal Near You
        </h3>
        <p className="text-muted-foreground">
          Need <strong>graffiti removal near me</strong>? Royalty Cleaning Services provides
          rapid response graffiti removal throughout Southern California. We understand that
          vandalism needs immediate attention to maintain your property's appearance and prevent
          repeat incidents.
        </p>
        <p className="text-muted-foreground">
          Our experts use a combination of pressure washing, eco-friendly chemicals, and specialized
          techniques to safely remove graffiti from brick, concrete, stucco, metal, and painted
          surfaces. We also offer anti-graffiti coatings that make future removal easier and faster.
        </p>
      </section>
    </ServicePageTemplate>
  );
};

export default GraffitiRemoval;
