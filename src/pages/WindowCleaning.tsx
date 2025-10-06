import ServicePageTemplate from "@/components/ServicePageTemplate";
import SEOHead from "@/components/SEOHead";
import heroImage from "@/assets/hero-cleaning-team.jpg";

const WindowCleaning = () => {
  const benefits = [
    "Crystal-clear results guaranteed",
    "Streak-free professional cleaning",
    "Interior & exterior service",
    "Track and screen cleaning included",
    "Hard water stain removal",
    "Eco-friendly cleaning solutions",
    "Fully insured and licensed",
    "Residential & commercial expertise",
  ];

  const services = [
    "Exterior Window Cleaning",
    "Interior Window Cleaning",
    "Window Tracks & Screens",
    "Post-Construction Window Cleaning",
    "Hard Water Stain Removal",
    "High-Rise Window Cleaning",
    "Glass Restoration",
    "Regular Maintenance Plans",
  ];

  const beforeAfterImages = [
    {
      before: heroImage,
      after: heroImage,
      title: "Residential Window Cleaning",
    },
    {
      before: heroImage,
      after: heroImage,
      title: "Commercial Office Building",
    },
  ];

  return (
    <>
      <SEOHead
        title="Professional Window Cleaning Services | Royalty Cleaning"
        description="Crystal-clear window cleaning for residential and commercial properties in Southern California. Streak-free results, eco-friendly solutions. Get a free estimate today!"
        url="https://getroyaltyservices.com/window-cleaning"
      />
      <ServicePageTemplate
      title="Window Cleaning Services"
      description="Professional window cleaning for crystal-clear views and lasting shine"
      heroImage={heroImage}
      benefits={benefits}
      services={services}
      beforeAfterImages={beforeAfterImages}
    >
      <section className="max-w-4xl mx-auto prose prose-lg">
        <h3 className="text-3xl font-black text-foreground">
          Professional Window Cleaning Near You
        </h3>
        <p className="text-muted-foreground">
          Looking for <strong>window cleaners near me</strong>? Royalty Cleaning Services offers
          top-rated residential and commercial window cleaning throughout Southern California.
          Our expert team delivers spotless windows inside and out, using professional-grade
          equipment and eco-friendly solutions.
        </p>
        <p className="text-muted-foreground">
          We specialize in removing hard water stains, cleaning tracks and screens, and providing
          post-construction window cleaning. Whether you need one-time service or regular
          maintenance, we guarantee crystal-clear results every time.
        </p>
      </section>
    </ServicePageTemplate>
    </>
  );
};

export default WindowCleaning;
