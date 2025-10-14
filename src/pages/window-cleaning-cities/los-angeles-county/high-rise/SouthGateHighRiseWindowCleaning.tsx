import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SouthGateHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="South Gate"
      citySlug="south-gate"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["south-gate"]}
    />
  );
};

export default SouthGateHighRiseWindowCleaning;
