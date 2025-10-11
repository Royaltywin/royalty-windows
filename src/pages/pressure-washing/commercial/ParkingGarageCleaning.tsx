import PressureWashingServiceTemplate from "@/components/PressureWashingServiceTemplate";
import heroImage from "@/assets/pressure-washing/before-after/concrete-sidewalk-before-after.jpg";

const ParkingGarageCleaning = () => {
  return (
    <PressureWashingServiceTemplate
      serviceName="Parking Garage Cleaning"
      serviceSlug="parking-garage-cleaning"
      serviceType="commercial"
      heroTitle="A Cleaner, Safer Garage Starts Here"
      heroSubtitle="Professional Parking Garage Cleaning"
      heroDescription="Deep clean decks, ramps, and stairwells to remove oil, gum, and buildup safely with EPA-compliant methods."
      heroImage={heroImage}
      aboutContent="Comprehensive parking garage cleaning services for multi-level structures, underground garages, and surface lots. Parking garages accumulate oil, tire rubber, gum, and debris that create slip hazards and convey poor maintenance. Our commercial equipment handles large-scale projects efficiently, and our water recovery systems meet EPA requirements. We work overnight or during low-traffic periods to minimize disruption to your tenants and customers."
      processSteps={[
        "Traffic control setup and area sectioning",
        "Pre-sweep and debris removal",
        "Degreaser application on heavy oil areas",
        "High-pressure surface cleaning of decks and ramps",
        "Detail cleaning of stairwells and elevators",
        "Water recovery and proper disposal"
      ]}
      benefits={[
        { title: "Removes Oil & Gum", description: "Deep cleaning eliminates slippery petroleum buildup and sticky debris" },
        { title: "Reduces Slip Risks", description: "Improve safety and reduce liability from accidents" },
        { title: "Maintains Compliance", description: "Meet ADA requirements and building safety codes" },
        { title: "Extends Surface Life", description: "Remove contaminants that degrade concrete and coatings" },
        { title: "Improves User Experience", description: "Clean garages create positive impression for tenants and visitors" },
        { title: "Flexible Scheduling", description: "Overnight and weekend service to minimize disruption" }
      ]}
      beforeAfterImages={[
        { before: heroImage, after: heroImage, title: "Parking Garage Restoration" }
      ]}
      metaTitle="Parking Garage Cleaning | Commercial Pressure Washing Services"
      metaDescription="Professional parking garage cleaning removes oil, gum, and buildup from decks, ramps, and stairwells. EPA-compliant methods. Flexible overnight scheduling. Licensed & insured."
    />
  );
};

export default ParkingGarageCleaning;
