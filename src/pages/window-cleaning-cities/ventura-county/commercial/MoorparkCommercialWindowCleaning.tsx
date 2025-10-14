import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MoorparkCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Moorpark"
      citySlug="moorpark"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["moorpark"]}
    />
  );
};

export default MoorparkCommercialWindowCleaning;
