import ServicePageTemplate from "@/components/ServicePageTemplate";
import heroImage from "@/assets/hero-cleaning-team.jpg";

const ConstructionCleanup = () => {
  const benefits = [
    "Move-in ready cleaning",
    "Residential & commercial projects",
    "Trusted by contractors",
    "Deep cleaning specialists",
    "Debris removal included",
    "Window & surface cleaning",
    "Fully insured professionals",
    "Flexible scheduling available",
  ];

  const services = [
    "Post-Construction Cleaning",
    "Final Clean Services",
    "Debris Removal",
    "Dust & Surface Cleaning",
    "Window Cleaning & Tracks",
    "Floor Cleaning & Polishing",
    "Renovation Cleanup",
    "New Build Final Clean",
  ];

  const beforeAfterImages = [
    {
      before: heroImage,
      after: heroImage,
      title: "Post-Construction Window Cleaning",
    },
    {
      before: heroImage,
      after: heroImage,
      title: "Commercial Space Final Clean",
    },
  ];

  return (
    <ServicePageTemplate
      title="Post-Construction Cleaning"
      description="From construction site to move-in ready with expert post-construction cleaning"
      heroImage={heroImage}
      benefits={benefits}
      services={services}
      beforeAfterImages={beforeAfterImages}
    >
      <section className="max-w-4xl mx-auto prose prose-lg">
        <h3 className="text-3xl font-black text-foreground">
          Professional Post-Construction Cleaning
        </h3>
        <p className="text-muted-foreground">
          Looking for <strong>post construction cleaning near me</strong>? Royalty Cleaning Services
          specializes in after-construction cleanup for residential and commercial properties
          throughout Southern California. We transform dusty construction sites into pristine,
          move-in ready spaces.
        </p>
        <p className="text-muted-foreground">
          Our comprehensive cleaning includes dust removal, window cleaning, floor polishing, debris
          haul-off, and deep cleaning of all surfaces. Trusted by contractors and builders, we ensure
          your new or renovated space is spotless and ready for occupancy.
        </p>
      </section>
    </ServicePageTemplate>
  );
};

export default ConstructionCleanup;
