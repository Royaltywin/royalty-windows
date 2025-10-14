import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PomonaCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Pomona"
      citySlug="pomona"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["pomona"]}
    />
  );
};

export default PomonaCommercialWindowCleaning;
