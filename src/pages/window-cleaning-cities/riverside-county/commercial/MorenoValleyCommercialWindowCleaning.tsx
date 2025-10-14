import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const MorenoValleyCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Moreno Valley"
      citySlug="moreno-valley"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["moreno-valley"]}
    />
  );
};

export default MorenoValleyCommercialWindowCleaning;
