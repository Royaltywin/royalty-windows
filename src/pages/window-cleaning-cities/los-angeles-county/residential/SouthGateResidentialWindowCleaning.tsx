import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SouthGateResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="South Gate"
      citySlug="south-gate"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["south-gate"]}
    />
  );
};

export default SouthGateResidentialWindowCleaning;
