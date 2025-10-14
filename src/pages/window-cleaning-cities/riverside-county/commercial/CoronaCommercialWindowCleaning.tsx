import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CoronaCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Corona"
      citySlug="corona"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["corona"]}
    />
  );
};

export default CoronaCommercialWindowCleaning;
