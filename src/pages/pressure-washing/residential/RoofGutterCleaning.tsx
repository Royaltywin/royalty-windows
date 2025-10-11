import PressureWashingServiceTemplate from "@/components/PressureWashingServiceTemplate";
import heroImage from "@/assets/pressure-washing/before-after/tile-roof-before-after.jpg";
import roofMoss from "@/assets/pressure-washing/roof/tile-roof-moss-removal.jpg";

const RoofGutterCleaning = () => {
  return (
    <PressureWashingServiceTemplate
      serviceName="Residential Roof & Gutter Cleaning"
      serviceSlug="roof-gutter-cleaning"
      serviceType="residential"
      heroTitle="Protect Your Home from the Top Down"
      heroSubtitle="Professional Roof & Gutter Cleaning"
      heroDescription="Clear organic growth and debris to improve drainage, prevent leaks, and extend roof life with safe, effective methods."
      heroImage={heroImage}
      aboutContent="Expert residential roof and gutter cleaning services that protect your home and extend roof life. Moss, algae, lichen, and debris on roofs accelerate shingle deterioration, trap moisture, and void warranties. Clogged gutters cause water damage to fascia, soffit, and foundations. We use low-pressure soft-wash methods that safely remove organic growth without damaging shingles or tiles. Our gutter cleaning includes full cleanout, downspout clearing, and drainage verification to protect your home investment."
      processSteps={[
        "Roof material identification and inspection",
        "Safety equipment setup",
        "Gutter debris removal and bagging",
        "Downspout clearing and flow testing",
        "Roof soft-wash application with biocides",
        "Final inspection and maintenance recommendations"
      ]}
      benefits={[
        { title: "Prevent Leaks & Water Damage", description: "Clear gutters and healthy roofs prevent costly interior damage" },
        { title: "Extend Roof Lifespan", description: "Remove organic growth that degrades shingles and tiles prematurely" },
        { title: "Improve Energy Efficiency", description: "Clean roofs reflect more heat, reducing cooling costs in summer" },
        { title: "Better Drainage", description: "Clear gutters protect foundations, landscaping, and basement from water" },
        { title: "Maintain Curb Appeal", description: "Remove unsightly dark streaks and moss for beautiful roof appearance" },
        { title: "Protect Home Value", description: "Well-maintained roofs command higher resale values and avoid repair costs" }
      ]}
      beforeAfterImages={[
        { before: heroImage, after: heroImage, title: "Tile Roof Cleaning" },
        { before: roofMoss, after: roofMoss, title: "Roof Moss Removal" }
      ]}
      metaTitle="Roof & Gutter Cleaning | Residential Pressure Washing Services"
      metaDescription="Professional roof and gutter cleaning protects your home and extends roof life. Safe soft-wash methods for all roof types. Prevent leaks and water damage. Licensed & insured."
    />
  );
};

export default RoofGutterCleaning;
