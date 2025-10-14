import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PalmSpringsCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Palm Springs"
      citySlug="palm-springs"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["palm-springs"]}
    />
  );
};

export default PalmSpringsCommercialWindowCleaning;
