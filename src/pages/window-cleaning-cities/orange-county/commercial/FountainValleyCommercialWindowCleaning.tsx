import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const FountainValleyCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Fountain Valley"
      citySlug="fountain-valley"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["fountain-valley"]}
    />
  );
};

export default FountainValleyCommercialWindowCleaning;
