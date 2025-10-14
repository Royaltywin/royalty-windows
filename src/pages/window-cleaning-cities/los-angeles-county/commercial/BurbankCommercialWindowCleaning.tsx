import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const BurbankCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Burbank"
      citySlug="burbank"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["burbank"]}
    />
  );
};

export default BurbankCommercialWindowCleaning;
