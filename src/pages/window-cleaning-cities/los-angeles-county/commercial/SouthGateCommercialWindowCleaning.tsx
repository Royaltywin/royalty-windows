import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SouthGateCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="South Gate"
      citySlug="south-gate"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["south-gate"]}
    />
  );
};

export default SouthGateCommercialWindowCleaning;
