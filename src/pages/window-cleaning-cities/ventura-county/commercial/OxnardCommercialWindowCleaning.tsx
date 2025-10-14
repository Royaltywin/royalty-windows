import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const OxnardCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Oxnard"
      citySlug="oxnard"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["oxnard"]}
    />
  );
};

export default OxnardCommercialWindowCleaning;
