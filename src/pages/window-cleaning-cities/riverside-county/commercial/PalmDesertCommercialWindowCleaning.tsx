import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PalmDesertCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Palm Desert"
      citySlug="palm-desert"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["palm-desert"]}
    />
  );
};

export default PalmDesertCommercialWindowCleaning;
