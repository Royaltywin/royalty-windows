import PressureWashingServiceTemplate from "@/components/PressureWashingServiceTemplate";
import heroImage from "@/assets/pressure-washing/before-after/building-exterior-cleaning.jpg";

const GraffitiRemoval = () => {
  return (
    <PressureWashingServiceTemplate
      serviceName="Graffiti Removal"
      serviceSlug="graffiti-removal"
      serviceType="commercial"
      heroTitle="Fast, Safe, Complete Graffiti Removal"
      heroSubtitle="Protect Your Brand & Property Value"
      heroDescription="Rapid, shadow-free removal using 250°F steam and surface-safe products. Emergency response available."
      heroImage={heroImage}
      aboutContent="Professional graffiti removal services with fast response times to protect your brand image and property value. Our 250°F steam systems and specialized chemicals remove spray paint, marker, and etching from all surfaces including brick, concrete, metal, glass, and painted surfaces. We understand that quick response prevents repeat vandalism, so we offer emergency service to restore your property's appearance immediately."
      processSteps={[
        "Surface type identification and graffiti assessment",
        "Selection of appropriate removal method and chemicals",
        "Test area to verify shadow-free removal",
        "Application of removal agent with proper dwell time",
        "High-temperature steam cleaning for deep penetration",
        "Final rinse and touch-up to ensure complete removal"
      ]}
      benefits={[
        { title: "Protects Brand Image", description: "Quick removal prevents damage to your business reputation and property value" },
        { title: "Prevents Repeat Vandalism", description: "Fast response discourages taggers from returning to your property" },
        { title: "Works on All Surfaces", description: "Safe removal from brick, concrete, metal, glass, painted surfaces, and more" },
        { title: "Fast Response Available", description: "Emergency graffiti removal to minimize visibility and impact" },
        { title: "Shadow-Free Results", description: "Complete removal without ghosting or surface damage" },
        { title: "Safe for Surrounding Areas", description: "Targeted removal protects landscaping and adjacent surfaces" }
      ]}
      beforeAfterImages={[
        { before: heroImage, after: heroImage, title: "Graffiti Removal Results" }
      ]}
      metaTitle="Commercial Graffiti Removal | Fast Response Southern California"
      metaDescription="Professional graffiti removal with emergency response. Shadow-free results on all surfaces using 250°F steam technology. Protect your brand and property value. Licensed & insured."
    />
  );
};

export default GraffitiRemoval;
