import PressureWashingServiceTemplate from "@/components/PressureWashingServiceTemplate";
import heroImage from "@/assets/pressure-washing/before-after/wood-deck-restoration.jpg";
import collage from "@/assets/pressure-washing/before-after/deck-siding-restoration-collage.jpg";

const DeckPatioCleaning = () => {
  return (
    <PressureWashingServiceTemplate
      serviceName="Residential Deck & Patio Cleaning"
      serviceSlug="deck-patio-cleaning"
      serviceType="residential"
      heroTitle="Refresh Your Outdoor Living Spaces"
      heroSubtitle="Professional Deck & Patio Cleaning"
      heroDescription="Restore beauty and safety on pavers, stone, concrete, wood, and composite. Remove algae, mildew, food stains, and efflorescence."
      heroImage={heroImage}
      aboutContent="Expert deck and patio cleaning services that restore outdoor living spaces to like-new condition. Whether you have wood decking, composite materials, concrete patios, pavers, or natural stone, we use surface-appropriate methods that clean deeply without causing damage. Our services remove slippery algae and mildew, lift food and tannin stains, eliminate efflorescence, and prepare surfaces for sealing or staining. Transform your outdoor entertainment areas into spaces you'll be proud to show off."
      processSteps={[
        "Material identification and condition assessment",
        "Pre-treatment application for mold and stains",
        "Gentle cleaning with appropriate pressure settings",
        "Detail work around railings and furniture areas",
        "Thorough rinsing and drainage verification",
        "Optional brightening treatment for wood surfaces"
      ]}
      benefits={[
        { title: "Removes Mold & Slippery Buildup", description: "Eliminate hazardous algae and create safe walking surfaces" },
        { title: "Extends Deck Life", description: "Regular cleaning prevents organic growth that degrades materials" },
        { title: "Makes Entertainment Spaces Shine", description: "Restore beauty and pride in your outdoor living areas" },
        { title: "Safe Surface Restoration", description: "Appropriate methods for wood, composite, concrete, pavers, and stone" },
        { title: "Sealing Preparation", description: "Clean surface allows stains and sealers to penetrate properly" },
        { title: "Pet & Family Safe", description: "Eco-friendly products safe for children, pets, and plants" }
      ]}
      beforeAfterImages={[
        { before: heroImage, after: heroImage, title: "Wood Deck Restoration" },
        { before: collage, after: collage, title: "Deck & Patio Transformation" }
      ]}
      metaTitle="Deck & Patio Cleaning | Residential Pressure Washing Services"
      metaDescription="Professional deck and patio cleaning for wood, composite, concrete, pavers, and stone. Remove mold, stains, and buildup safely. Sealing preparation available. Licensed & insured."
    />
  );
};

export default DeckPatioCleaning;
