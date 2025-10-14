import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CanyonLakeCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Canyon Lake"
      citySlug="canyon-lake"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["canyon-lake"]}
    />
  );
};

export default CanyonLakeCommercialWindowCleaning;
