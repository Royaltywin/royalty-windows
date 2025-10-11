import PressureWashingServiceTemplate from "@/components/PressureWashingServiceTemplate";
import heroImage from "@/assets/pressure-washing/before-after/concrete-sidewalk-before-after.jpg";

const TrashEnclosureCleaning = () => {
  return (
    <PressureWashingServiceTemplate
      serviceName="Trash Enclosure Pressure Washing"
      serviceSlug="trash-enclosure-cleaning"
      serviceType="commercial"
      heroTitle="Eliminate Odors & Bacteria at the Source"
      heroSubtitle="Professional Trash Enclosure Cleaning"
      heroDescription="Degrease pads, walls, and drains to control odors, pests, and slip hazards with EPA-compliant methods."
      heroImage={heroImage}
      aboutContent="Specialized trash enclosure cleaning that eliminates odors, bacteria, and pest attractants from dumpster pads, walls, and drains. Trash enclosures accumulate grease, organic waste, and bacteria that create health hazards and attract pests. Our high-temperature cleaning systems sanitize these areas while our water recovery methods keep parking lots clean and meet EPA requirements. Essential for restaurants, retail centers, apartments, and any facility with waste collection areas."
      processSteps={[
        "Area preparation and containment setup",
        "Debris removal and pre-sweep",
        "Degreaser application to pads, walls, and gates",
        "High-pressure, high-temperature cleaning",
        "Drain cleaning and odor treatment",
        "Water recovery and proper disposal"
      ]}
      benefits={[
        { title: "Pest Control", description: "Remove food sources and odors that attract rodents, flies, and other pests" },
        { title: "Odor Removal", description: "High-temperature cleaning eliminates bacteria causing foul smells" },
        { title: "Safety Compliance", description: "Reduce slip hazards and maintain health department standards" },
        { title: "Reduces Liability", description: "Clean enclosures prevent accidents and code violations" },
        { title: "EPA Compliant Methods", description: "Proper water recovery and disposal meet environmental regulations" },
        { title: "Scheduled Maintenance Plans", description: "Regular cleaning prevents buildup and keeps enclosures sanitary" }
      ]}
      beforeAfterImages={[
        { before: heroImage, after: heroImage, title: "Trash Enclosure Restoration" }
      ]}
      metaTitle="Trash Enclosure Cleaning | Commercial Pressure Washing Services"
      metaDescription="Professional trash enclosure cleaning eliminates odors, bacteria, and pests. High-temperature sanitizing for dumpster pads, walls, and drains. EPA compliant. Scheduled maintenance available."
    />
  );
};

export default TrashEnclosureCleaning;
