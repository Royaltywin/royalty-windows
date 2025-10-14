import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SimiValleyCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Simi Valley"
      citySlug="simi-valley"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["simi-valley"]}
    />
  );
};

export default SimiValleyCommercialWindowCleaning;
