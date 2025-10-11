import PressureWashingServiceTemplate from "@/components/PressureWashingServiceTemplate";
import heroImage from "@/assets/pressure-washing/before-after/building-exterior-cleaning.jpg";

const ExteriorBuildingWash = () => {
  return (
    <PressureWashingServiceTemplate
      serviceName="Exterior Building Wash & Pressure Washing"
      serviceSlug="exterior-building-wash"
      serviceType="commercial"
      heroTitle="Revive Your Building's Exterior"
      heroSubtitle="Safely & Effectively"
      heroDescription="Facades, stucco, EIFS, brick, glass, and metal restored without damage using advanced soft-wash techniques."
      heroImage={heroImage}
      aboutContent="Expert exterior building wash services that safely clean all facade types without causing damage. We use soft-wash methods for delicate surfaces like painted stucco, EIFS, and modern siding systems, while applying appropriate pressure for brick, concrete, and metal. Our technicians are trained to identify surface materials and adjust methods accordingly, protecting your building while delivering exceptional results."
      processSteps={[
        "Building material identification and condition assessment",
        "Custom pressure and detergent formulation selection",
        "Soft-wash application for delicate surfaces",
        "Gentle agitation and dwell time for deep cleaning",
        "Low-pressure rinse to protect paint and finishes",
        "Final inspection with photo documentation"
      ]}
      benefits={[
        { title: "Non-Abrasive Soft-Wash", description: "Gentle methods clean effectively without stripping paint or damaging surfaces" },
        { title: "Removes Grime Without Paint Damage", description: "pH-balanced detergents break down dirt while protecting finishes" },
        { title: "Enhances Professional Image", description: "Clean exterior makes powerful impression on clients and visitors" },
        { title: "Protects Exterior Surfaces", description: "Regular maintenance prevents permanent staining and material degradation" },
        { title: "Works on All Materials", description: "Safe for stucco, EIFS, brick, metal, glass, and modern composite systems" },
        { title: "Mold & Mildew Removal", description: "Eliminate organic growth that damages surfaces and looks unprofessional" }
      ]}
      beforeAfterImages={[
        { before: heroImage, after: heroImage, title: "Building Exterior Restoration" }
      ]}
      metaTitle="Exterior Building Wash | Commercial Pressure Washing Services"
      metaDescription="Professional exterior building wash services for all facade types. Soft-wash methods safely clean stucco, EIFS, brick, metal, and glass without damage. EPA compliant. Licensed & insured."
    />
  );
};

export default ExteriorBuildingWash;
