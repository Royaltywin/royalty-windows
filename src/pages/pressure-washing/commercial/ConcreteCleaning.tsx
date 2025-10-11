import PressureWashingServiceTemplate from "@/components/PressureWashingServiceTemplate";
import heroImage from "@/assets/pressure-washing/before-after/concrete-sidewalk-before-after.jpg";
import driveway from "@/assets/pressure-washing/before-after/driveway-transformation.jpg";

const ConcreteCleaning = () => {
  return (
    <PressureWashingServiceTemplate
      serviceName="Concrete Cleaning"
      serviceSlug="concrete-cleaning"
      serviceType="commercial"
      heroTitle="Deep Clean Concrete"
      heroSubtitle="Enhance Safety & Curb Appeal"
      heroDescription="Remove oil, gum, tire marks, rust stains, and algae from sidewalks, plazas, loading zones, and parking lots."
      heroImage={heroImage}
      aboutContent="Specialized concrete cleaning services that restore safety and appearance to high-traffic areas. Our commercial-grade equipment removes oil stains, tire marks, gum, rust, and organic growth that make surfaces slippery and unsightly. We use surface cleaners for even results and hot water systems to break down petroleum-based stains. Perfect for retail centers, office parks, warehouses, and municipal properties."
      processSteps={[
        "Surface assessment and stain identification",
        "Pre-treatment of oil stains and tough buildup",
        "High-pressure surface cleaning with rotating heads for even results",
        "Hot water application for petroleum-based stain removal",
        "Edge cleaning and detail work around obstacles",
        "Post-cleaning inspection and documentation"
      ]}
      benefits={[
        { title: "Removes Oil & Rust Stains", description: "Hot water systems break down petroleum stains that cold water can't touch" },
        { title: "Restores Traction & Appearance", description: "Remove slippery algae and grime to improve safety and aesthetics" },
        { title: "OSHA-Safe Walkways", description: "Eliminate slip hazards and maintain compliance with safety regulations" },
        { title: "Eliminates Gum & Debris", description: "High-temperature steam lifts gum and stubborn debris without chemicals" },
        { title: "Protects Concrete Investment", description: "Regular cleaning prevents premature deterioration and extends surface life" },
        { title: "Even, Streak-Free Results", description: "Professional surface cleaners ensure uniform cleaning without wand marks" }
      ]}
      beforeAfterImages={[
        { before: heroImage, after: heroImage, title: "Concrete Sidewalk Restoration" },
        { before: driveway, after: driveway, title: "Driveway Deep Clean" }
      ]}
      metaTitle="Commercial Concrete Cleaning | Pressure Washing Southern California"
      metaDescription="Professional concrete cleaning removes oil stains, gum, tire marks, and algae from sidewalks, parking lots, and loading zones. OSHA-compliant methods. Licensed & insured. Free quotes."
    />
  );
};

export default ConcreteCleaning;
