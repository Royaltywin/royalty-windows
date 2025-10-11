import PressureWashingServiceTemplate from "@/components/PressureWashingServiceTemplate";
import heroImage from "@/assets/pressure-washing/before-after/driveway-transformation.jpg";

const GarageDrivewayClean = () => {
  return (
    <PressureWashingServiceTemplate
      serviceName="Residential Garage & Driveway Cleaning"
      serviceSlug="garage-driveway-cleaning"
      serviceType="residential"
      heroTitle="Restore Your Driveway's Curb Appeal"
      heroSubtitle="Professional Garage & Driveway Cleaning"
      heroDescription="Lift oil, tire marks, rust, and grime from garages and driveways for a cleaner, brighter entrance to your home."
      heroImage={heroImage}
      aboutContent="Professional garage and driveway cleaning that dramatically improves your home's curb appeal. Driveways and garage floors accumulate oil stains, tire marks, rust, dirt, and organic growth that make surfaces look old and neglected. Our hot water systems break down petroleum-based stains that cold water can't touch, and our surface cleaners provide even, streak-free results. Clean driveways are safer (less slippery), protect concrete from deterioration, and make your entire property look well-maintained."
      processSteps={[
        "Surface inspection and stain identification",
        "Oil stain pre-treatment with degreasers",
        "Hot water pressure washing for deep cleaning",
        "Even surface cleaning with rotating heads",
        "Edge detail work along garage doors and landscaping",
        "Final inspection and optional sealing recommendation"
      ]}
      benefits={[
        { title: "Safer Non-Slip Surface", description: "Remove slippery algae and buildup that create hazards" },
        { title: "Removes Tough Stains & Buildup", description: "Hot water systems eliminate oil, rust, and tire marks" },
        { title: "Protects Concrete from Deterioration", description: "Remove contaminants that accelerate concrete breakdown" },
        { title: "Boosts Home Value", description: "Clean driveways create powerful first impression for visitors and buyers" },
        { title: "Even, Professional Results", description: "Surface cleaners eliminate wand marks for uniform appearance" },
        { title: "Sealing Preparation", description: "Clean surface allows sealers to bond properly and last longer" }
      ]}
      beforeAfterImages={[
        { before: heroImage, after: heroImage, title: "Driveway Transformation" }
      ]}
      metaTitle="Garage & Driveway Cleaning | Residential Pressure Washing"
      metaDescription="Professional garage and driveway cleaning removes oil stains, tire marks, and grime. Hot water systems for tough stains. Boost curb appeal and property value. Licensed & insured."
    />
  );
};

export default GarageDrivewayClean;
