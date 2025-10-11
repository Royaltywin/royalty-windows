import PressureWashingServiceTemplate from "@/components/PressureWashingServiceTemplate";
import heroImage from "@/assets/pressure-washing/before-after/building-exterior-cleaning.jpg";
import beforeAfter from "@/assets/pressure-washing/before-after/building-exterior-cleaning.jpg";

const CommercialExteriorCleaning = () => {
  return (
    <PressureWashingServiceTemplate
      serviceName="Commercial Exterior Cleaning"
      serviceSlug="commercial-exterior-cleaning"
      serviceType="commercial"
      heroTitle="Commercial Exterior Cleaning"
      heroSubtitle="Transform Your Property's Appearance"
      heroDescription="Full-property exterior steam and pressure cleaning for walls, walkways, entries, and common areas across Southern California."
      heroImage={heroImage}
      aboutContent="Professional commercial exterior cleaning services that restore your property's curb appeal and protect your investment. Our advanced 4,200 PSI systems and 250°F steam technology safely remove years of dirt, grime, pollution, and organic growth from all exterior surfaces without causing damage. We specialize in multi-unit properties, retail centers, office buildings, and industrial facilities throughout Southern California."
      processSteps={[
        "Comprehensive surface inspection and material analysis",
        "Pressure and temperature calibration for each surface type",
        "Eco-friendly pre-treatment application on stubborn stains",
        "High-temperature steam pressure wash using surface-appropriate methods",
        "Thorough rinse and drainage verification",
        "Final quality inspection with before/after photo documentation"
      ]}
      benefits={[
        { title: "Restores Professional Curb Appeal", description: "Remove years of buildup to make a powerful first impression on customers and tenants" },
        { title: "Prevents Long-Term Damage", description: "Regular cleaning protects surfaces from deterioration and extends material lifespan" },
        { title: "Improves Property Value", description: "Well-maintained exteriors command higher rents and attract quality tenants" },
        { title: "Safe for Paint & Landscaping", description: "Surface-appropriate methods protect your investment while delivering deep cleaning" },
        { title: "EPA/CWA Compliant", description: "Eco-friendly detergents and proper water recovery meet all environmental standards" },
        { title: "Flexible Scheduling", description: "Work around your business hours with minimal disruption to operations" }
      ]}
      beforeAfterImages={[
        { before: beforeAfter, after: beforeAfter, title: "Building Exterior Transformation" }
      ]}
      metaTitle="Commercial Exterior Cleaning | Royalty Pressure Washing"
      metaDescription="Professional commercial exterior cleaning across Southern California. Advanced steam technology safely removes dirt, grime, and pollution from buildings, walkways, and common areas. EPA compliant, licensed & insured."
    />
  );
};

export default CommercialExteriorCleaning;
