import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const BreaCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Brea"
      citySlug="brea"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["brea"]}
    />
  );
};

export default BreaCommercialWindowCleaning;
