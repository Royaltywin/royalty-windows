import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const RiversideCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Riverside"
      citySlug="riverside"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["riverside"]}
    />
  );
};

export default RiversideCommercialWindowCleaning;
