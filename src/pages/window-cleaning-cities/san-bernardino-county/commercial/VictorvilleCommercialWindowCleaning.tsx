import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const VictorvilleCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Victorville"
      citySlug="victorville"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["victorville"]}
    />
  );
};

export default VictorvilleCommercialWindowCleaning;
