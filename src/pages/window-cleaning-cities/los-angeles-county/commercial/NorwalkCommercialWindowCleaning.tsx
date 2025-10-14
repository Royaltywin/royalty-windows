import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const NorwalkCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Norwalk"
      citySlug="norwalk"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["norwalk"]}
    />
  );
};

export default NorwalkCommercialWindowCleaning;
