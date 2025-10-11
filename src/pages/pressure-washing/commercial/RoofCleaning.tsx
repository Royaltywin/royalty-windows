import PressureWashingServiceTemplate from "@/components/PressureWashingServiceTemplate";
import heroImage from "@/assets/pressure-washing/before-after/tile-roof-before-after.jpg";
import roofMoss from "@/assets/pressure-washing/roof/tile-roof-moss-removal.jpg";
import roofProcess from "@/assets/pressure-washing/roof/tile-roof-cleaning-process.jpg";

const RoofCleaning = () => {
  return (
    <PressureWashingServiceTemplate
      serviceName="Roof Cleaning (TPO, Metal, Tile)"
      serviceSlug="roof-cleaning"
      serviceType="commercial"
      heroTitle="Protect Your Roof — Preserve Your Investment"
      heroSubtitle="Professional Commercial Roof Cleaning"
      heroDescription="Algae, dirt, and debris removal to protect membranes and extend roof life across all commercial roofing systems."
      heroImage={heroImage}
      aboutContent="Expert commercial roof cleaning services for TPO, metal, tile, and all roofing systems. Roof contamination from algae, moss, lichen, and debris accelerates deterioration and voids warranties. Our low-pressure soft-wash methods safely remove organic growth and buildup without damaging membranes or protective coatings. Regular roof maintenance extends system life, improves energy efficiency, and keeps you insurance compliant."
      processSteps={[
        "Roof system identification and inspection",
        "Safety equipment setup and fall protection",
        "Debris removal and drainage verification",
        "Low-pressure soft-wash application with biocides",
        "Gentle agitation and thorough rinsing",
        "Final inspection with warranty documentation photos"
      ]}
      benefits={[
        { title: "Extend Roof Life", description: "Remove organic growth that degrades membranes and accelerates aging" },
        { title: "Prevent Mold Growth", description: "Eliminate spores and bacteria that damage roofing materials" },
        { title: "Insurance Maintenance Compliant", description: "Document regular maintenance to satisfy insurance requirements" },
        { title: "Improves Energy Efficiency", description: "Clean roofs reflect more heat, reducing cooling costs significantly" },
        { title: "Protects Warranties", description: "Many roofing warranties require regular professional cleaning" },
        { title: "Prevents Drainage Issues", description: "Clear debris from drains and scuppers to prevent ponding water" }
      ]}
      beforeAfterImages={[
        { before: heroImage, after: heroImage, title: "Tile Roof Transformation" },
        { before: roofMoss, after: roofMoss, title: "Moss Removal from Tile Roof" },
        { before: roofProcess, after: roofProcess, title: "Roof Cleaning Process" }
      ]}
      metaTitle="Commercial Roof Cleaning | TPO, Metal, Tile Roof Washing"
      metaDescription="Professional commercial roof cleaning for TPO, metal, and tile systems. Safe soft-wash methods extend roof life, improve energy efficiency, and maintain compliance. Licensed & insured."
    />
  );
};

export default RoofCleaning;
