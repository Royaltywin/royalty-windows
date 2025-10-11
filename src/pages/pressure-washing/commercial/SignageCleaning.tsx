import PressureWashingServiceTemplate from "@/components/PressureWashingServiceTemplate";
import heroImage from "@/assets/pressure-washing/before-after/building-exterior-cleaning.jpg";

const SignageCleaning = () => {
  return (
    <PressureWashingServiceTemplate
      serviceName="Signage Pressure Washing"
      serviceSlug="signage-cleaning"
      serviceType="commercial"
      heroTitle="Keep Your Sign Visible & Vibrant"
      heroSubtitle="Professional Signage Cleaning Services"
      heroDescription="Clean oxidation, grime, and bird droppings to keep branding clear and vibrant without damaging materials."
      heroImage={heroImage}
      aboutContent="Specialized signage cleaning services that restore visibility and protect your brand investment. Commercial signs accumulate dirt, oxidation, bird droppings, and pollution that diminish impact and professionalism. Our technicians understand that different sign materials require different approaches—from delicate painted surfaces to LED displays to metal cabinets. We safely clean all signage types without damaging lighting, graphics, or finishes."
      processSteps={[
        "Sign material and lighting system identification",
        "Electrical component protection and prep",
        "Gentle pre-treatment application",
        "Low-pressure cleaning with appropriate methods",
        "Detail work around lights and graphics",
        "Final inspection and brightness verification"
      ]}
      benefits={[
        { title: "Brighter Visibility", description: "Remove oxidation and grime that reduces sign effectiveness and brand impact" },
        { title: "Brand Protection", description: "Keep your business looking professional and well-maintained" },
        { title: "Safe for LED & Painted Surfaces", description: "Gentle methods protect sensitive electronics and graphic finishes" },
        { title: "Improved Customer Perception", description: "Clean signage signals attention to detail and quality" },
        { title: "Extends Sign Life", description: "Regular cleaning prevents permanent staining and material degradation" },
        { title: "Day or Night Service", description: "Flexible scheduling to minimize business disruption" }
      ]}
      beforeAfterImages={[
        { before: heroImage, after: heroImage, title: "Signage Restoration" }
      ]}
      metaTitle="Commercial Signage Cleaning | Sign Pressure Washing Services"
      metaDescription="Professional signage cleaning restores visibility and protects brand investment. Safe for LED displays, painted surfaces, and all sign materials. Flexible scheduling. Licensed & insured."
    />
  );
};

export default SignageCleaning;
