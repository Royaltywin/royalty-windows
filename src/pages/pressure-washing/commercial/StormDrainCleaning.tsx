import PressureWashingServiceTemplate from "@/components/PressureWashingServiceTemplate";
import heroImage from "@/assets/pressure-washing/before-after/concrete-sidewalk-before-after.jpg";

const StormDrainCleaning = () => {
  return (
    <PressureWashingServiceTemplate
      serviceName="Storm Drain Cleaning"
      serviceSlug="storm-drain-cleaning"
      serviceType="commercial"
      heroTitle="Keep Water Flowing & Your Property Compliant"
      heroSubtitle="Professional Storm Drain Cleaning"
      heroDescription="Clear catch basins and inlets to prevent clogs, flooding, and EPA violations with proper maintenance."
      heroImage={heroImage}
      aboutContent="Professional storm drain and catch basin cleaning to prevent flooding and maintain EPA compliance. Clogged storm drains cause parking lot flooding, erosion, and potential code violations. Debris, sediment, and trash accumulation reduces drainage capacity and allows pollutants to enter waterways. Our services include full cleanout of catch basins, inlet clearing, and proper disposal of collected materials according to EPA and local requirements."
      processSteps={[
        "Storm drain location identification and mapping",
        "Grate removal and debris extraction",
        "High-pressure jetting of inlet pipes",
        "Sump cleaning and sediment removal",
        "Grate cleaning and reinstallation",
        "Documentation and disposal certification"
      ]}
      benefits={[
        { title: "Prevent Flooding & Erosion", description: "Clear drains handle heavy rainfall and prevent property damage" },
        { title: "Stay EPA Compliant", description: "Regular maintenance meets environmental regulations and prevents violations" },
        { title: "Protect Infrastructure", description: "Remove debris before it damages pipes and drainage systems" },
        { title: "Avoid Fines", description: "Prevent code violations and environmental penalties" },
        { title: "Improve Water Quality", description: "Remove pollutants before they enter waterways and cause contamination" },
        { title: "Scheduled Maintenance Programs", description: "Regular service prevents emergency cleanouts and flood damage" }
      ]}
      beforeAfterImages={[
        { before: heroImage, after: heroImage, title: "Storm Drain System Cleaning" }
      ]}
      metaTitle="Storm Drain Cleaning | Catch Basin Maintenance Services"
      metaDescription="Professional storm drain and catch basin cleaning prevents flooding and maintains EPA compliance. Regular maintenance programs available. Proper disposal certification. Licensed & insured."
    />
  );
};

export default StormDrainCleaning;
