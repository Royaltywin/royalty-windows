import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SanClementeCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="San Clemente"
      citySlug="san-clemente"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["san-clemente"]}
    />
  );
};

export default SanClementeCommercialWindowCleaning;
