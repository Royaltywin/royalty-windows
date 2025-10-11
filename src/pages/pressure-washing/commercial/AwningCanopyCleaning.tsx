import PressureWashingServiceTemplate from "@/components/PressureWashingServiceTemplate";
import heroImage from "@/assets/pressure-washing/before-after/building-exterior-cleaning.jpg";

const AwningCanopyCleaning = () => {
  return (
    <PressureWashingServiceTemplate
      serviceName="Awning & Canopy Cleaning"
      serviceSlug="awning-canopy-cleaning"
      serviceType="commercial"
      heroTitle="Restore Color & Durability to Your Awnings"
      heroSubtitle="Professional Awning & Canopy Cleaning"
      heroDescription="Fabric, vinyl, and metal awnings cleaned with material-appropriate methods to restore appearance and extend life."
      heroImage={heroImage}
      aboutContent="Specialized awning and canopy cleaning for all material types including fabric, vinyl, metal, and polycarbonate. Awnings accumulate dirt, mold, bird droppings, and pollution that degrade materials and fade colors. Different materials require different approaches—fabric needs gentle methods to avoid damage, while metal can handle more aggressive cleaning. Our technicians are trained to identify materials and apply appropriate techniques that restore appearance without causing harm."
      processSteps={[
        "Material identification and condition assessment",
        "Dry brushing to remove loose debris",
        "pH-balanced detergent application",
        "Gentle agitation with soft brushes",
        "Low-pressure rinse to protect materials",
        "Air drying verification and final inspection"
      ]}
      benefits={[
        { title: "Extend Material Life", description: "Remove contaminants that degrade fabrics and coatings prematurely" },
        { title: "Improve Curb Appeal", description: "Restore original colors and professional appearance" },
        { title: "Prevent Mold Staining", description: "Eliminate organic growth before it causes permanent damage" },
        { title: "Restore Original Colors", description: "Remove oxidation and pollution that fade awning materials" },
        { title: "Safe for All Materials", description: "Appropriate methods for fabric, vinyl, metal, and polycarbonate" },
        { title: "Protects Investment", description: "Regular cleaning extends awning life and delays replacement costs" }
      ]}
      beforeAfterImages={[
        { before: heroImage, after: heroImage, title: "Awning Restoration" }
      ]}
      metaTitle="Awning & Canopy Cleaning | Commercial Pressure Washing Services"
      metaDescription="Professional awning and canopy cleaning for fabric, vinyl, and metal. Material-appropriate methods restore color and extend life. Licensed & insured. Free quotes."
    />
  );
};

export default AwningCanopyCleaning;
